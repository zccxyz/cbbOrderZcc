import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    ImageBackground,
    CheckBox,
    Switch,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {Container, Content, Item, Input, Button, Text, Icon} from 'native-base';

import Color from "../common/Color";
import Bottom from "../common/Bottom";

export default class Settle extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.header}>
                    <View style={{height: 69, justifyContent: 'center'}}>
                        <Button iconLeft style={styles.backBtn}>
                            <Icon name='arrow-left' type={'EvilIcons'}></Icon>
                            <Text>#1号</Text>
                        </Button>
                    </View>

                    <View style={{height: 69, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{marginRight: 30,}}>
                            <Text style={{color: Color.tableIndex.pink, textAlign: 'center'}}>共6份/￥284</Text>
                            <Text style={{color: Color.tableIndex.gray9, textAlign: 'center'}}>(赠送￥42)</Text>
                        </View>
                        <Button iconLeft style={styles.pinkBtn}>
                            <Icon name='notification' type={'Entypo'}></Icon>
                            <Text>打印预结单</Text>
                        </Button>
                        <Button iconLeft style={styles.gary}>
                            <Icon name='notification' type={'Entypo'}></Icon>
                            <Text>结账</Text>
                        </Button>
                        <Button iconLeft style={styles.pinkBtn}>
                            <Icon name='notification' type={'Entypo'}></Icon>
                            <Text>扫码枪</Text>
                        </Button>
                        <Button iconLeft style={styles.gary}>
                            <Icon name='notification' type={'Entypo'}></Icon>
                            <Text>清台</Text>
                        </Button>
                    </View>
                </View>
                <View style={styles.contain}>
                    <View style={{
                        width: WIDTH - 372 - 18,
                        height: HEIGHT - 142 - 18,
                        backgroundColor: '#ffffff',
                        marginLeft: 8,
                        marginTop: 8,
                        borderWidth: 1,
                        borderColor: '#d9d9d9'
                    }}>

                        <View style={{height: 56, flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
                            <Text style={{fontWeight: '500', paddingLeft: 47}}>应收金额：</Text>
                            <Text style={{color: 'red', fontSize: 24}}> 266.00 </Text>
                            <Text style={{color: '#888888'}}> (总计 286.00 - 优惠20.00 - 已支付 0.00) </Text>
                        </View>

                        <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontWeight: '500', paddingLeft: 47}}>优惠明细：</Text>
                            <Text style={{color: '#333333'}}> 折扣率（0.5折）：0.00元 </Text>
                            <Text style={{color: '#333333'}}>抹零：20.00元 </Text>
                        </View>

                        <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontWeight: '500', paddingLeft: 47, paddingRight: 32}}>会员价：</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Switch/>
                            </View>
                            <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{paddingLeft: 32}}>会员结账：</Text>
                                <Item regular style={{width: 265, height: 42, borderRadius: 5}}>
                                    <Input style={{fontSize: 14}} placeholder='请输入手机号或会员卡号'/>
                                </Item>
                                <Button style={{
                                    height: 40,
                                    marginTop: 8,
                                    marginLeft: 19,
                                    backgroundColor: '#8dc23c'
                                }}><Text>去开卡</Text></Button>
                            </View>
                        </View>


                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontWeight: '500', paddingLeft: 47, paddingRight: 32}}>会员价：</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Switch/>
                                    <Text style={{color: '#8dc23c', paddingLeft: 10}}>9.5折</Text>
                                </View>
                                <View style={{height: 56, flexDirection: 'row', alignItems: 'center', marginLeft: 50}}>
                                    <Item regular style={{width: 90, height: 42, borderRadius: 5}}>
                                        <Input style={{fontSize: 14, textAlign: 'center'}} value="95"/>
                                        <View style={{
                                            borderLeftWidth: 2,
                                            width: 30,
                                            height: 42,
                                            borderLeftColor: '#dedede'
                                        }}><Text style={{textAlign: 'center', lineHeight: 42}}>%</Text></View>
                                    </Item>
                                    <Item regular style={{width: 250, height: 42, borderRadius: 5, marginLeft: 40}}>
                                        <View style={{
                                            borderRightWidth: 2,
                                            width: 58,
                                            height: 42,
                                            borderRightColor: '#dedede'
                                        }}><Text
                                            style={{textAlign: 'center', lineHeight: 42, fontSize: 14}}>原因</Text></View>
                                        <Input style={{fontSize: 14, paddingLeft: 16}} placeholder="折扣原因"/>
                                    </Item>
                                </View>
                            </View>
                            <Text style={{color: '#a4a4a4', paddingLeft: 290}}>1-100的整数，如：95折扣表示9.5折</Text>
                        </View>

                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontWeight: '500', paddingLeft: 47, paddingRight: 32}}>抹零：</Text>
                                <View style={{flexDirection: 'row',marginLeft:18}}>
                                    <Switch/>
                                    <Text style={{color: '#8dc23c', paddingLeft: 10}}>-20元</Text>
                                </View>
                                <View style={{height: 56, flexDirection: 'row', alignItems: 'center', marginLeft: 50}}>
                                    <Item regular style={{width: 90, height: 42, borderRadius: 5}}>
                                        <Input style={{fontSize: 14, textAlign: 'center'}} value="20"/>
                                        <View style={{
                                            borderLeftWidth: 2,
                                            width: 30,
                                            height: 42,
                                            borderLeftColor: '#dedede'
                                        }}><Text style={{textAlign: 'center', lineHeight: 42}}>元</Text></View>
                                    </Item>
                                    <Item regular style={{width: 250, height: 42, borderRadius: 5, marginLeft: 40}}>
                                        <View style={{
                                            borderRightWidth: 2,
                                            width: 58,
                                            height: 42,
                                            borderRightColor: '#dedede'
                                        }}><Text
                                            style={{textAlign: 'center', lineHeight: 42, fontSize: 14}}>原因</Text></View>
                                        <Input style={{fontSize: 14, paddingLeft: 16}} placeholder="折扣原因"/>
                                    </Item>
                                </View>
                            </View>
                            <Text style={{color: '#a4a4a4', paddingLeft: 290}}>1-100的整数，如：95折扣表示9.5折</Text>
                        </View>

                        <View style={{flexDirection:'row',height:56,alignItems:'center'}}>
                            <Text style={{fontWeight:'500',paddingLeft:47,marginRight:32}}>已选方式</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text>支付宝</Text>
                                <Text style={{fontSize:26,paddingLeft:10}}>2.00</Text>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',marginLeft:30}}>
                                <Text>现金</Text>
                                <Text style={{fontSize:26,paddingLeft:10}}>264.00</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight:'500',paddingLeft:47,marginRight:32,lineHeight:56}}>付款方式：</Text>
                            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                <Button style={{backgroundColor:'#8dc23c',marginRight:30,marginTop:15}}><Text>微信支付</Text></Button>
                                <Button style={{backgroundColor:'#ffffff',marginRight:30,marginTop:15}}><Text style={{color:'#333'}}>支付宝</Text></Button>
                                <Button style={{backgroundColor:'#ffffff',marginRight:30,marginTop:15}}><Text style={{color:'#333'}}>现金</Text></Button>
                                <Button style={{backgroundColor:'#ffffff',marginRight:30,marginTop:15}}><Text style={{color:'#333'}}>银行卡</Text></Button>
                                <Button style={{backgroundColor:'#ffffff',marginRight:30,marginTop:15}}><Text style={{color:'#333'}}>抵用券</Text></Button>
                                <Button style={{backgroundColor:'#ffffff',marginRight:30,marginTop:15}}><Text style={{color:'#333'}}>线下优惠券</Text></Button>
                                <Button style={{backgroundColor:'#ffffff',marginRight:30,marginTop:15}}><Text style={{color:'#333'}}>挂账</Text></Button>
                                <Button style={{backgroundColor:'#ffffff',marginRight:30,marginTop:15}}><Text style={{color:'#333'}}>美团外卖</Text></Button>
                                <Button style={{backgroundColor:'#ffffff',marginRight:30,marginTop:15}}><Text style={{color:'#333'}}>饿了么外卖</Text></Button>
                                <Button style={{backgroundColor:'#ffffff',marginRight:30,marginTop:15}}><Text style={{color:'#333'}}>百度外卖</Text></Button>
                                <Button style={{backgroundColor:'#ffffff',marginRight:30,marginTop:15}}><Text style={{color:'#333'}}>支付宝口碑</Text></Button>
                                <Button style={{backgroundColor:'#ffffff',marginRight:30,marginTop:15}}><Text style={{color:'#333'}}>信用社融合付</Text></Button>
                            </View>
                        </View>

                    </View>

                    <View style={{width: 372, height: HEIGHT - 142, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection:'row',backgroundColor:'#e6e6e6'}}>
                            <View style={{flex:1,height:50,marginBottom:2,borderTopWidth:3,backgroundColor:'#ffffff',borderTopColor:'#b1b0b0',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text>菜品列表</Text>
                                <View style={{width:20,height:20,borderRadius:20,backgroundColor:'red'}}>
                                    <Text style={{textAlign:'center',lineHeight:20,color:'#ffffff',fontSize:14}}>6</Text>
                                </View>
                            </View>
                            <View style={{flex:1,height:50,marginBottom:2,borderTopWidth:3,borderTopColor:'#b1b0b0',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text>操作记录</Text>
                            </View>
                        </View>
                        <ScrollView style={{flex:1,display:'none'}}>
                            <View style={{height:54,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#e6e6e6'}}>
                                <View style={{flex:2}}><Text style={{paddingLeft:20,color:'#333333'}} numberOfLines={1}>小红妹悠乐果杯过呗过不</Text></View>
                                <Text style={{flex:1,textAlign:'center',color:'#888888'}}> x 1</Text>
                                <Text style={{flex:1,textAlign:'center',color:'#888888'}}>￥18</Text>
                            </View>
                            <View style={{height:54,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#e6e6e6'}}>
                                <View style={{flex:2}}><Text style={{paddingLeft:20,color:'#333333'}} numberOfLines={1}>小红妹悠乐果杯过呗过不</Text></View>
                                <Text style={{flex:1,textAlign:'center',color:'#888888'}}> x 1</Text>
                                <Text style={{flex:1,textAlign:'center',color:'#888888'}}>￥18</Text>
                            </View>
                        </ScrollView>
                        <ScrollView style={{flex:1}}>
                            <View style={{height:54,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#e6e6e6'}}>
                                <View style={{flex:2,flexDirection:'row',marginLeft:20}}>
                                    <View style={{width:26,height:26,borderRadius:26,borderWidth:1,borderColor:'#8dc23c'}}>
                                        <Text style={{color:'#8dc23c',textAlign:'center',lineHeight:26}}>加</Text>
                                    </View>
                                    <Text style={{color:'#333333',paddingLeft:5}} numberOfLines={1}>小红妹悠乐果杯过呗过不</Text>
                                </View>
                                <Text style={{flex:2,textAlign:'center',color:'#888888',paddingLeft:20}}>周长城</Text>
                                <Text style={{flex:2,textAlign:'center',color:'#888888'}}>3-20 18:50</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <Bottom/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    header: {
        height: 69,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contain: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ededed'
    },
    backBtn: {
        backgroundColor: Color.tableIndex.btnBg,
        marginLeft: 24
    },
    pinkBtn: {
        backgroundColor: Color.tableIndex.pink,
        marginRight: 30,
        height: 42,
        marginTop: 14
    },
    gary: {
        backgroundColor: Color.tableIndex.gray3,
        marginRight: 30,
        height: 42,
        marginTop: 14
    }

});