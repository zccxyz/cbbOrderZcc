import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,ScrollView,Modal,Alert,
    ToastAndroid,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button,Radio } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Classify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodType:[],
            zt:false,
            goodTypeDetail:{}
        };
    }

    _get(method, params) {
        return fetch(`${ym+method}?token=${userInfo.app_token}&${params}`).then(r=>r.json())
            .then(rs=>{
                return rs;
            }).catch(e=>{
                return e;
            })

    }

    _post(method, params, url_param = '') {

        var url = `${ym+method}?token=${userInfo.app_token}`;
        if(url_param) {
            url += url_param;
        }
        console.log(url);
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
        this._getGoodClassOne();
    }

    _getGoodClassOne(){
        this._get(request2.goodsSpec,'action=list&type=goods_type').then(rs=>{
            console.log(rs)
            if(rs.errCode == 0){
                this.setState({goodType:rs.data.list});
                console.log(this.state.goodType);
            }
        })
    }

    _goodTypeEdit(data,index){
        this.state.goodTypeDetail = this.state.goodType[index];
        this.setState({goodTypeDetail:this.state.goodTypeDetail,zt:true})
    }

    _saveEdit(){
        console.log(this.state.goodTypeDetail);
        this._post(request2.goodsSpec,{data:this.state.goodTypeDetail},'&action=save&type=goods_type_edit').then(rs=>{
            if(rs.errCode == 0){
                Alert.alert("提示","编辑成功");
                this.setState({zt:false})
            }
        })
    }



    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent><Text>采购</Text></Button>
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Thumbnail square source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}}/>
                <Text>阿克苏的飞机喀什地方</Text>
            </View>
        );
        return(
            <View style={{flex:10}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: 'white', flexDirection: 'row', padding:5}}>
                    <View style={{width:WIDTH/4}}>
                        <Text>一级分类</Text>
                    </View>
                    <View style={{width:WIDTH/4}}>
                        <Text>二级分类</Text>
                    </View>
                    <View style={{width:WIDTH/4}}>
                        <Text>操作</Text>
                    </View>
                </View>
                <Text style={{backgroundColor: 'gray', height:1}}/>
                <View style={{flex:10, backgroundColor: 'white', padding:5}}>
                    <ScrollView style={{flex:1}}>

                        {this.state.goodType ? this.state.goodType.map((data,index)=>(
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{width:WIDTH/4}}>
                                        <Text>{data.name}</Text>
                                    </View>
                                    <View style={{width:WIDTH/4}}/>
                                    <View style={{width:WIDTH/4}}/>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{width:WIDTH/4}}/>
                                    <View style={{width:WIDTH/4, alignItems:'center', justifyContent:'center'}}>
                                        <Text>茶</Text>
                                    </View>
                                    <View style={{width:WIDTH/4,justifyContent:'center', alignItems:'center'}}>
                                        <View style={{flexDirection: 'row',alignItems:'center', justifyContent:'center'}}>
                                            <Button transparent onPress={()=>this._goodTypeEdit(data,index)}><Text>编辑</Text></Button>
                                            <Button transparent><Text>删除</Text></Button>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{width:WIDTH/4}}/>
                                    <View style={{width:WIDTH/4, alignItems:'center', justifyContent:'center'}}>
                                        <Text>茶</Text>
                                    </View>
                                    <View style={{width:WIDTH/4,justifyContent:'center', alignItems:'center'}}>
                                        <View style={{flexDirection: 'row',alignItems:'center', justifyContent:'center'}}>
                                            <Button transparent><Text>编辑</Text></Button>
                                            <Button transparent><Text>删除</Text></Button>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                                    <View style={{width:WIDTH/4}}/>
                                    <View style={{width:WIDTH/4}}>
                                        <Button transparent>
                                            <Text>增加二级分类</Text>
                                        </Button>
                                    </View>
                                    <View style={{width:WIDTH/4}}/>
                                </View>
                            </View>
                        )):null}

                        {/*<View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width:WIDTH/4}}>
                                <Text>日常用品</Text>
                            </View>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4}}/>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4, alignItems:'center', justifyContent:'center'}}>
                                <Text>茶</Text>
                            </View>
                            <View style={{width:WIDTH/4,justifyContent:'center', alignItems:'center'}}>
                                <View style={{flexDirection: 'row',alignItems:'center', justifyContent:'center'}}>
                                    <Button transparent><Text>查看</Text></Button>
                                    <Button transparent><Text>下架</Text></Button>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4, alignItems:'center', justifyContent:'center'}}>
                                <Text>茶</Text>
                            </View>
                            <View style={{width:WIDTH/4,justifyContent:'center', alignItems:'center'}}>
                                <View style={{flexDirection: 'row',alignItems:'center', justifyContent:'center'}}>
                                    <Button transparent><Text>查看</Text></Button>
                                    <Button transparent><Text>下架</Text></Button>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4}}>
                                <Button transparent>
                                    <Text>增加二级分类</Text>
                                </Button>
                            </View>
                            <View style={{width:WIDTH/4}}/>
                        </View>
                    </View>*/}
                    </ScrollView>
                </View>

                <Modal animationType={'fade'} visible={this.state.zt} onRequestClose={()=>this.setState({zt: false})} transparent={true}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <View style={{width:WIDTH/2,backgroundColor:'#fff'}}>

                            <View style={{height:50,flexDirection:'row',backgroundColor:'#8DC23C',alignItems:'center'}}>
                                <Text style={{color:'#fff',paddingLeft:30}}>种类编辑</Text>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>种类名称：</Text>
                                <Item rounded style={{height:40,borderRadius:5,width:300}}>
                                    <Input placeholder="请输入种类名称" style={{color:'#666',fontSize:14}} value={this.state.goodTypeDetail.name}  onChangeText={e=>{
                                        this.state.goodTypeDetail.name = e;
                                        this.setState({goodTypeDetail:this.state.goodTypeDetail})
                                    }}/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>均摊折扣：</Text>
                                <Radio selected={this.state.goodTypeDetail.share_discount == 1} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                    this.state.goodTypeDetail.share_discount = 1;
                                    this.setState({goodTypeDetail:this.state.goodTypeDetail});
                                }} />
                                <Text style={{color:this.state.goodTypeDetail.share_discount == 1 ? '#1c91d1' : '#666',paddingRight:15,fontSize:14}}>均摊 </Text>
                                <Radio selected={this.state.goodTypeDetail.share_discount == 0} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                    this.state.goodTypeDetail.share_discount = 0;
                                    this.setState({goodTypeDetail:this.state.goodTypeDetail});
                                }} />
                                <Text style={{color:this.state.goodTypeDetail.share_discount == 0 ? '#1c91d1' : '#666',fontSize:14}}>不均摊 </Text>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态：</Text>
                                <Radio selected={this.state.goodTypeDetail.status == 1} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                    this.state.goodTypeDetail.status = 1;
                                    this.setState({goodTypeDetail:this.state.goodTypeDetail});
                                }} />
                                <Text style={{color: false ? '#1c91d1' : '#666',paddingRight:15,fontSize:14}}>启用</Text>
                                <Radio selected={this.state.goodTypeDetail.status == 0} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                    this.state.goodTypeDetail.status = 0;
                                    this.setState({goodTypeDetail:this.state.goodTypeDetail});
                                }} />
                                <Text style={{color: this.state.goodTypeDetail.status == 0 ? '#1c91d1' : '#666',fontSize:14}}>禁用</Text>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10,height:60}}>
                                <View style={{marginRight:50}}>
                                    <Button style={{backgroundColor:'#fa7159',height:35}} onPress={()=>this._saveEdit()}>
                                        <Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}}>确定</Text>
                                    </Button>
                                </View>
                                <View>
                                    <Button style={{backgroundColor:'#b3b3b3',height:35}}>
                                        <Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}} onPress={()=>{this.setState({zt:false})}}>取消</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

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