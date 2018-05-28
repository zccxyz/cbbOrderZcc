import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import ImagePicker from "react-native-image-picker";
import MyPicker from 'react-native-picker';

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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
        ImagePicker.showImagePicker(options, (response) => {
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

    render() {
        return(
            <View style={{flex:10, padding:5}}>
                <Button onPress={()=>this.getImg()}><Text>图片上传</Text></Button>
                <Button onPress={()=>this._showAreaPicker()}><Text>地区选择</Text></Button>
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
    btnText: { textAlign: 'center', color: '#fff' }
});