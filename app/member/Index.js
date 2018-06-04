import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,Modal
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button, Card, CardItem, Body,Form,Picker,Textarea } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Bottom from "../common/Bottom";
import Top from "../common/Top";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            tables: [
                {name: 'A01', num: 5, price: 1125},
                {name: 'A02', num: 6, price: 1253},
                {name: 'A03', num: 3, price: 1215},
                {name: 'A04', num: 4, price: 12215},
                {name: 'A05', num: 7, price: 1215},
                {name: 'A06', num: 12, price: 2125},
                {name: 'A06', num: 12, price: 2125},
                {name: 'A06', num: 12, price: 2125},
                {name: 'A06', num: 12, price: 2125},
                {name: 'A06', num: 12, price: 2125},
                {name: 'A06', num: 12, price: 2125},
                {name: 'A06', num: 12, price: 2125},
            ],
            nowNav: 5,
            zt:false,
            zt1:false,
            zt2:false,
            selected2:undefined
        });
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    _init() {
        return (
            <View style={{width: WIDTH*14/15, height: HEIGHT-70}}>
                <Top com={
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <View style={{height: GAO, width: 320, borderRadius: 5, flexDirection: 'row'}}/>
                        <Item rounded style={{width: 300, height: GAO}}>
                            <Input placeholder='输入会员名称或卡号'/>
                            <Icon name={'search'} type={'EvilIcons'} style={{fontSize: 35}}/>
                        </Item>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}} small onPress={()=>{this.setState({zt2:true})}}>
                                <Text>开卡</Text>
                            </Button>
                        </View>
                    </View>
                }/>

                <View style={{flex: 10}}>

                    <FlatList data={this.state.tables} columnWrapperStyle={{justifyContent:'center', flexWrap:'wrap'}}
                              renderItem={({item})=>this._item(item)} numColumns={3} keyExtractor={({v, k})=>k}/>
                </View>

                <Bottom/>

                <Modal animationType={'fade'} visible={this.state.zt} onRequestClose={()=>this.setState({zt: false})} transparent={true}>
                    <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'}}>

                        <View style={{backgroundColor:'#fff'}}>

                            <View style={{backgroundColor:'#8dc23c',height:40}}>
                                <Text style={{color:'#fff',paddingLeft:30,lineHeight:40,paddingRight:30}}>会员充值</Text>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>会员名称：</Text>
                                <Text style={{fontSize:14}}>acc</Text>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>会员号码：</Text>
                                <Text style={{fontSize:14}}>1852356699</Text>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>余额：</Text>
                                <Text style={{fontSize:26,color:'#8dc23c'}}>0.00</Text>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>充值金额：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input bordered style={{width:180,fontSize:14}} placeholder='请输入充值金额'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>在线支付：</Text>
                                <View style={{marginRight:20}}><Button style={{backgroundColor:'#8dc23c',height:40}}><Text style={{fontSize:14}}>在线支付</Text></Button></View>
                                <View style={{marginRight:20}}>
                                    <Button style={{backgroundColor:'#fff',borderColor:'#dedede',height:40,borderRadius:5}}><Text style={{color:'#333',fontSize:14}}>现金</Text></Button>
                                </View>
                                <View style={{marginRight:20}}>
                                    <Button style={{backgroundColor:'#fff',borderColor:'#dedede',height:40,borderRadius:5}}><Text style={{color:'#333',fontSize:14}}>银行卡</Text></Button>
                                </View>
                                <View style={{marginRight:20}}>
                                    <Button style={{backgroundColor:'#fff',borderColor:'#dedede',height:40,borderRadius:5}}><Text style={{color:'#333',fontSize:14}}>支付宝口碑</Text></Button>
                                </View>
                                <View style={{marginRight:20}}>
                                    <Button style={{backgroundColor:'#fff',borderColor:'#dedede',height:40,borderRadius:5}}><Text style={{color:'#333',fontSize:14}}>信用社融合付</Text></Button>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>赠送金额：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input  style={{width:180,fontSize:14}} placeholder='请输入赠送金额'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>发票金额：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input  style={{width:180,fontSize:14}} placeholder='请输入发票金额'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:20,height:60}}>
                                <View style={{marginRight:50}}>
                                    <Button style={{backgroundColor:'#fa7159',height:35}}><Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}}>充值</Text></Button>
                                </View>
                                <View>
                                    <Button style={{backgroundColor:'#b3b3b3',height:35}}><Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}} onPress={()=>{this.setState({zt:false})}}>取消</Text></Button>
                                </View>
                            </View>

                        </View>

                    </View>
                </Modal>

                <Modal animationType={'fade'} visible={this.state.zt1} onRequestClose={()=>this.setState({zt1: false})} transparent={true}>
                    <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'}}>

                        <View style={{backgroundColor:'#fff'}}>

                            <View style={{backgroundColor:'#8dc23c',height:40}}>
                                <Text style={{color:'#fff',paddingLeft:30,lineHeight:40,paddingRight:30}}>赠送优惠券</Text>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>会员名称：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input style={{width:180,fontSize:14}} placeholder='请输入会员名称'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>选择赠送：</Text>
                                <Form style={{width:180,borderWidth:2,borderColor:'#dedede',height:40,borderRadius:5}}>
                                    <Picker
                                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        style={{ width: 180,height:40}}
                                        selectedValue={this.state.selected2}
                                        onValueChange={this.onValueChange2.bind(this)}
                                    >
                                        <Picker.Item label="Wallet" value="key0" />
                                        <Picker.Item label="ATM Card" value="key1" />
                                        <Picker.Item label="Debit Card" value="key2" />
                                        <Picker.Item label="Credit Card" value="key3" />
                                        <Picker.Item label="Net Banking" value="key4" />
                                    </Picker>
                                </Form>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>赠送数量：</Text>
                                <Item rounded style={{width:100,height:40,borderRadius:5}}>
                                    <Input rounded style={{width:100,textAlign:'center',fontSize:14}} value='1'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:120,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>赠送理由：</Text>
                                <Textarea style={{width:300,height:120,borderRadius:5,fontSize:14}} bordered placeholder="请输入赠送理由" />
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:60}}>
                                <View style={{marginRight:50}}>
                                    <Button  style={{backgroundColor:'#fa7159',height:35}}><Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}}>充值</Text></Button>
                                </View>
                                <View>
                                    <Button style={{backgroundColor:'#b3b3b3',height:35}}><Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}} onPress={()=>{this.setState({zt1:false})}}>取消</Text></Button>
                                </View>
                            </View>

                        </View>

                    </View>
                </Modal>

                <Modal animationType={'fade'} visible={this.state.zt2} onRequestClose={()=>this.setState({zt2: false})} transparent={true}>
                    <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'}}>

                        <View style={{backgroundColor:'#fff'}}>

                            <View style={{backgroundColor:'#8dc23c',height:40}}>
                                <Text style={{color:'#fff',paddingLeft:30,lineHeight:40,paddingRight:30,fontSize:14}}>会员充值</Text>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>会员开卡：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input bordered style={{width:180,fontSize:14}} placeholder='请输入会员名称'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>会员号码：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input type="number" bordered style={{width:180,fontSize:14}} placeholder='请输入手机号码'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>卡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input bordered style={{width:180,fontSize:14}} placeholder='请输入卡号'/>
                                </Item>
                                <View style={{marginLeft:20}}>
                                    <Button style={{height:40,backgroundColor:'#8dc23c'}}><Text style={{fontSize:14}}>手机号</Text></Button>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>身份证号：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input bordered style={{width:180,fontSize:14}} placeholder='请输入身份证号'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input bordered style={{width:180,fontSize:14}} placeholder='格式 2018-03-02'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>在线支付：</Text>
                                <View style={{marginRight:20}}><Button style={{backgroundColor:'#8dc23c',height:40}}><Text>在线支付</Text></Button></View>
                                <View style={{marginRight:20}}>
                                    <Button style={{backgroundColor:'#fff',borderColor:'#dedede',height:40,borderRadius:5}}><Text style={{color:'#333',fontSize:14}}>现金</Text></Button>
                                </View>
                                <View style={{marginRight:20}}>
                                    <Button style={{backgroundColor:'#fff',borderColor:'#dedede',height:40,borderRadius:5}}><Text style={{color:'#333',fontSize:14}}>银行卡</Text></Button>
                                </View>
                                <View style={{marginRight:20}}>
                                    <Button style={{backgroundColor:'#fff',borderColor:'#dedede',height:40,borderRadius:5}}><Text style={{color:'#333',fontSize:14}}>支付宝口碑</Text></Button>
                                </View>
                                <View style={{marginRight:20}}>
                                    <Button style={{backgroundColor:'#fff',borderColor:'#dedede',height:40,borderRadius:5}}><Text style={{color:'#333',fontSize:14}}>信用社融合付</Text></Button>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>充值金额：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input bordered style={{width:180,fontSize:14}} placeholder='请输入充值金额'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>赠送金额：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input bordered style={{width:180,fontSize:14}} placeholder='请输入赠送金额'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',marginRight:30,height:60,alignItems:'center'}}>
                                <Text style={{paddingLeft:30,fontSize:14}}>发票金额：</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40}}>
                                    <Input bordered style={{width:180,fontSize:14}} placeholder='请输入发票金额'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10,height:60}}>
                                <View style={{marginRight:50}}>
                                    <Button style={{backgroundColor:'#fa7159',height:35}}><Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}}>确定</Text></Button>
                                </View>
                                <View>
                                    <Button style={{backgroundColor:'#b3b3b3',height:35}}><Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}} onPress={()=>{this.setState({zt2:false})}}>取消</Text></Button>
                                </View>
                            </View>

                        </View>

                    </View>
                </Modal>


            </View>
        );
    }

    _item(item) {
        return(
            <View style={{width:WIDTH/3-100, height: 150, elevation: 2, backgroundColor: 'white', margin:5}}>
                <View style={{height:120, padding:5}}>
                    <Text style={{padding:2, fontSize: 13}}>姓名：zcc</Text>
                    <Text style={{padding:2, fontSize: 13}}>电话：18584878968</Text>
                    <Text style={{padding:2, fontSize: 13}}>卡号：525635</Text>
                    <Text style={{padding:2, fontSize: 13}}>门店：十三小厨测试店铺</Text>
                    <View style={{flexDirection:'row',padding:2}}>
                        <Text style={{fontSize:12}}>总消费次数：1</Text>
                        <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                        <Text style={{fontSize:12}}>月消费次数：1</Text>
                    </View>
                    <View style={{width:100, height:100, position:'absolute', top: 0, right:0, padding:10}}>
                        <Text style={{fontSize: 13}}>余额：<Text style={{color: '#A39104', fontSize: 18}}>960</Text></Text>
                        <Text style={{fontSize: 13}}>积分：<Text style={{color: '#A39104', fontSize: 18}}>960</Text></Text>
                    </View>
                </View>
                <View style={{backgroundColor:'#A39104', flexDirection:'row', justifyContent:'flex-end',height:30}}>
                    <Text style={{color: 'white', width: 80,textAlign:'center',height: 30, lineHeight:30, backgroundColor:'#019D86'}} onPress={()=>{this.setState({zt1:true})}}>送券</Text>
                    <Text style={{color: 'white', width: 80,textAlign:'center',height: 30, lineHeight:30}} onPress={()=>{this.setState({zt:true})}}>充值</Text>
                </View>
            </View>
        )
    }
}