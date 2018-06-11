import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
    TextInput,FixedTextInput
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button ,Textarea} from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import ImagePicker from "react-native-image-picker";
import MyPicker from 'react-native-picker';
import MyLeft from "../common/Left";

export default class Info extends MyLeft {
    constructor(props) {
        super(props);
        this.state = {
            zt:false,
            shopInfo:{}
        };
    }

    _post1(method, params, url_param = '') {
        var url = `${ym+method}?token=${userInfo.app_token}`;
        if(url_param) {
            url += url_param;
        }
        return fetch(url, {
            method: "POST", body: JSON.stringify(params)
        }).then(r=>r.json())
            .then(rs=>{
                return rs;
            }).catch(e=>{
                return e;
            })
    }

    componentDidMount(){

        this._getShopInfo();

    }

    _getShopInfo(id){
        this._get(request2.shopInfo,'id='+ userInfo.shop_id).then(rs=>{
            console.log(rs);
            if(rs.errCode == 0){
                this.setState({shopInfo:rs.data})
            }
        })
    }
    _createAreaData() {
        let data = [];
        let len = area.length;
        for(let i=0;i<len;i++){
            let city = [];
            for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }

    _showAreaPicker() {
        MyPicker.init({
            pickerData: this._createAreaData(),
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            pickerTitleText: '地区选择',
            //selectedValue: ['河北', '唐山', '古冶区'],   //默认值
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
                this.state.shopInfo.province = pickedValue[0];
                this.state.shopInfo.city = pickedValue[1];
                this.state.shopInfo.county = pickedValue[2];
                this.setState({shopInfo:this.state.shopInfo})
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        MyPicker.show();
    }

    getImg() {
        console.log("1112211112211");

        ImagePicker.showImagePicker({
            title: '选择图片',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '从相册选取',
            cancelButtonTitle: '取消',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        }, (response) => {
            console.log(response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                //alert(response.error);
            }
            else if (response.customButton) {
                //console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let formData = new FormData();
                formData.append("file", {uri: response.uri, type: response.type, name: response.fileName});
                fetch(`${URL.upload}?mch_id=${mchId}&shop_id=${shopId}`, {
                    method: 'POST', body: formData
                }).then((response) => response.json())
                    .then(rs => {
                        if (rs.errCode == 0) {
                            this.setState({preview_cover: rs.data.object_url, member_img: rs.data.file});
                        } else {
                            alert(rs.data.message);
                        }
                    });
            }
        });
    }

    _SaveShopInfo(){
        console.log(this.state.shopInfo);
        this._post1(request2.shopInfo,{data:JSON.stringify(this.state.shopInfo)},"&action=save").then(rs=>{
            console.log(rs);
        })
    }

    render() {

        return(
            <View style={{flex:10}}>

                <View style={{flex:1, backgroundColor: TableColor,flexDirection:'row', padding:10}}>
                    <ScrollView style={{flex:1}}>
                        <Text style={{lineHeight:100,textAlign:'center'}}>门店基础信息</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={{textAlign:'center'}}>门店头图：</Text>
                            </View>
                            <View style={{flex:3,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <Thumbnail style={{marginLeft:20,width:120,height:80}} visible={false} square source={{uri: this.state.shopInfo.preview_cover}} />
                                <View style={{marginRight:20}}>
                                    <Button light onPress={()=>this.getImg()}><Text>上传新图</Text></Button>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:60}}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={{textAlign:'center'}}>门店名称：</Text>
                            </View>
                            <View style={{flex:3,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <TextInput style={styles.textInput} placeholder="请输入门店名称" value={this.state.shopInfo.name} onChangeText={e=>{
                                    this.state.shopInfo.name = e;
                                    this.setState({shopInfo:this.state.shopInfo})
                                }}/>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:60}}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={{textAlign:'center'}}>所在地：</Text>
                            </View>
                            <View style={{flex:3,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <Text>{ this.state.shopInfo.province + this.state.shopInfo.city + this.state.shopInfo.county}</Text>
                                <View><Button light onPress={()=>this._showAreaPicker()}><Text>地区选择</Text></Button></View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:60}}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={{textAlign:'center'}}>详细地址：</Text>
                            </View>
                            <View style={{flex:3,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <TextInput style={styles.textInput} value={this.state.shopInfo.address}  onChangeText={(e)=>{
                                    this.state.shopInfo.address = e;
                                    this.setState({shopInfo:this.state.shopInfo})
                                }} />
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:60}}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={{textAlign:'center'}}>联系人：</Text>
                            </View>
                            <View style={{flex:3,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <TextInput style={styles.textInput} value={this.state.shopInfo.admin_name} onChangeText={e=>{
                                    this.state.shopInfo.admin_name = e;
                                    this.setState({shopInfo:this.state.shopInfo})
                                }}/>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:60}}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={{textAlign:'center'}}>联系电话：</Text>
                            </View>
                            <View style={{flex:3,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <TextInput style={styles.textInput} value={this.state.shopInfo.tel} onChangeText={e=>{
                                    this.state.shopInfo.tel = e;
                                    this.setState({shopInfo:this.state.shopInfo})
                                }} />
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:60}}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={{textAlign:'center'}}>办公电话：</Text>
                            </View>
                            <View style={{flex:3,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <TextInput style={styles.textInput} value="010-56326221" />
                            </View>
                        </View>
                        <View style={{height:80,justifyContent:'center',alignItems:'center'}}>
                            <View>
                                <Button style={{flexDirection:'row',backgroundColor:'#16b8be',width:120,justifyContent:'center'}} onPress={()=>this._SaveShopInfo()}>
                                    <Text>保存信息</Text>
                                </Button>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{width:400,borderLeftWidth:1,borderColor:'#cad3df'}}>
                        <Text style={{textAlign:'center'}}>门店介绍</Text>
                        <Textarea style={styles.intro} bordered placeholder="请输入门店介绍"  value={this.state.shopInfo.intro} onChangeText={e=>{
                            this.state.shopInfo.intro = e;
                            this.setState({shopInfo:this.state.shopInfo})
                        }}/>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#ECEFF4' },
    text: { margin: 6, textAlign:'center' },
    row: { flexDirection: 'row', backgroundColor: 'white'  },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' },
    textInput:{flex:1,marginRight:50},
    intro:{ width:350,height:350,marginTop:20,marginLeft:25,borderRadius:5}
});