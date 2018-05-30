import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, TouchableOpacity,
    View, Switch, FlatList, ScrollView, ImageBackground, Picker,
    Image,Modal
} from 'react-native';
import {Text, Thumbnail, Icon, Item, Input, Button, Badge, Tab, Tabs, TabHeading,Textarea} from 'native-base';
import Color from "../common/Color";
import Top from "../common/Top";
import Bg from "../common/Bg";
import Left from "../common/Left";


export default class Index extends Left {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            type: 1,
            zt:true,
            goods: [
                {name: '小炒肉', num: 5, price: 10},
                {name: '白菜', num: 6, price: 111},
                {name: '可乐', num: 3, price: 222},
                {name: '凉菜', num: 4, price: 33},
                {name: '豆干', num: 7, price: 3123},
                {name: '黄豆', num: 12, price: 111},
                {name: '黄豆', num: 12, price: 1},
                {name: '黄豆', num: 12, price: 1123},
                {name: '豆干', num: 12, price: 2},
                {name: '豆干', num: 12, price: 33},
                {name: '牛肉', num: 12, price: 223},
            ],
            waiter: 1,
            belong: [
                {name: '套餐', num: 0},
                {name: '蔬菜', num: 2},
                {name: '饮料', num: 3},
                {name: '火锅', num: 0},
                {name: '套饭', num: 0},
            ],
            remarkShow:false
        });
    }

    _init() {
        return (
            <View style={{width: WIDTH * 14 / 15, flex: 1}}>
                <Top com={
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex:1}}>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}} small>
                                <Icon name='ios-arrow-dropleft' type={'Ionicons'} />
                                <Text>桌台B02</Text>
                            </Button>
                        </View>
                        <Picker style={{width: 100}} mode={'dropdown'}
                                selectedValue={this.state.waiter}
                                onValueChange={(lang) => this.setState({waiter: lang})}>
                            <Picker.Item label="zcc" value="1" />
                            <Picker.Item label="xyz" value="2" />
                        </Picker>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <Text style={{fontSize:14}}>就餐人数：</Text>
                            <Item style={{width:50}}>
                                <Input style={{fontSize:14, height:GAO}} placeholder='人数'/>
                            </Item>
                            <Text style={{fontSize:14}}>人</Text>
                        </View>
                        <Item rounded style={{width: 200, height:GAO}}>
                            <Icon name={'search'} type={'EvilIcons'}/>
                            <Input placeholder='菜品首字母'/>
                        </Item>
                        <View style={{flexDirection: 'column', alignItems:'center'}}>
                            <Text style={{fontSize:14}}>共6份/&yen;286</Text>
                            <Text style={{fontSize:14}}>(赠送&yen;42)</Text>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}} small>
                                <Icon name='ios-arrow-dropleft' type={'Ionicons'} />
                                <Text>下单</Text>
                            </Button>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}} small>
                                <Icon name='ios-arrow-dropleft' type={'Ionicons'} />
                                <Text>结账</Text>
                            </Button>
                        </View>
                    </View>}/>

                {/*中间内容*/}
                <View style={{flexDirection: 'row', flex:10}}>
                    <View style={{flex: 1}}>
                        <FlatList data={this.state.belong}
                                  renderItem={({item}) => this._item(item)} numColumns={1}
                                  keyExtractor={({v, k}) => k+'z'}/>
                    </View>
                    <View style={{flex: 5}}>
                        <FlatList data={this.state.goods} columnWrapperStyle={{flexWrap:'wrap', justifyContent: 'center'}}
                                  renderItem={({item}) => this._item2(item)} numColumns={10}
                                  keyExtractor={({v, k}) => k+'y'}/>
                    </View>
                    <View style={{flex: 2}}>

                        <Tabs initialPage={0}>
                            <Tab heading={
                                <TabHeading style={{backgroundColor: Color.tableIndex.photoBg,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color: 'white'}}>菜品列表</Text>
                                    <Text style={{borderRadius:24,height:24,width:24,backgroundColor:'red',textAlign:'center',lineHeight:24}}>1</Text>
                                </TabHeading>
                            }>
                                <ScrollView style={{flex:1,position:'relative'}}>
                                    <View style={{height:50,borderBottomWidth:2,borderColor:'#dedede',flexDirection:'row',alignItems:'center'}}>
                                        <View style={{flex:2}}>
                                            <Text numberOfLines={1} style={{fontSize:14,marginLeft:10,marginRight:10,color:'#666'}}>小红莓优格果杯小红莓优格果杯</Text>
                                        </View>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <Text style={{width:40,height:20,borderWidth:1,borderColor:'#fa7159',color:'#999',textAlign:'center',lineHeight:20,borderRadius:3}}>x 1</Text>
                                            <Text style={{fontSize:12,color:'#999'}}>￥48</Text>
                                        </View>
                                        <View style={{flex:2,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                            <Text style={{width:28,height:28,lineHeight:28,borderRadius:28,marginRight:5,fontSize:14,
                                                    borderColor:Color.tableIndex.photoBg,borderWidth:2,textAlign:'center',color:Color.tableIndex.photoBg}}>起</Text>
                                            <Text style={{width:28,height:28,lineHeight:28,borderRadius:28,marginRight:5,fontSize:14,
                                                borderColor:'#fa745d',borderWidth:2,textAlign:'center',color:'#fa745d'}}>备</Text>
                                            <Text style={{width:28,height:28,lineHeight:28,borderRadius:28,marginRight:5,fontSize:14,
                                                borderColor:'#888',borderWidth:2,textAlign:'center',color:'#888'}}>x</Text>
                                        </View>
                                    </View>

                                    <View style={{height:50,backgroundColor:'#333',flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{height:24,backgroundColor:'#333',borderWidth:1,borderColor:'#fff',color:'#fff',
                                            fontSize:12,lineHeight:24,paddingLeft:10,paddingRight:10,marginLeft:10,borderRadius:3}}>赠送</Text>
                                        <Text style={{height:24,backgroundColor:'#333',borderWidth:1,borderColor:'#fff',color:'#fff',
                                            fontSize:12,lineHeight:24,paddingLeft:10,paddingRight:10,marginLeft:10,borderRadius:3}}>x1</Text>
                                        <Text style={{height:24,backgroundColor:'#333',borderWidth:1,borderColor:'#fff',color:'#fff',
                                            fontSize:12,lineHeight:24,paddingLeft:10,paddingRight:10,marginLeft:10,borderRadius:3}}>x2</Text>
                                        <Text style={{height:24,backgroundColor:'#333',borderWidth:1,borderColor:'#fff',color:'#fff',
                                            fontSize:12,lineHeight:24,paddingLeft:10,paddingRight:10,marginLeft:10,borderRadius:3}}>x3</Text>
                                    </View>

                                </ScrollView>
                                <View style={{height:200,borderTopWidth:1,borderColor:'#dedede',backgroundColor:'#f2f2f2'}}>
                                    <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap',marginTop:5}}>
                                        <View style={{marginLeft:8,marginRight:8,marginTop:5}}>
                                            <Button light style={{height:30,borderRadius:30,borderWidth:1,paddingLeft:3,paddingRight:3,borderColor:'#8dc23c'}}>
                                                <Text style={{fontSize:12,color:'#666'}}>微辣</Text>
                                            </Button>
                                        </View>
                                        <View style={{marginLeft:8,marginRight:8,marginTop:5}}>
                                            <Button light style={{height:30,borderRadius:30,borderWidth:1,paddingLeft:3,paddingRight:3,borderColor:'#8dc23c'}}>
                                                <Text style={{fontSize:12,color:'#666'}}>不要花椒</Text>
                                            </Button>
                                        </View>
                                        <View style={{marginLeft:8,marginRight:8,marginTop:5}}>
                                            <Button light style={{height:30,borderRadius:30,borderWidth:1,paddingLeft:3,paddingRight:3,borderColor:'#8dc23c'}}>
                                                <Text style={{fontSize:12,color:'#666'}}>不要味精</Text>
                                            </Button>
                                        </View>
                                        <View style={{marginLeft:8,marginRight:8,marginTop:5}}>
                                            <Button light style={{height:30,borderRadius:30,borderWidth:1,paddingLeft:3,paddingRight:3,borderColor:'#8dc23c'}}>
                                                <Text style={{fontSize:12,color:'#666'}}>少油</Text>
                                            </Button>
                                        </View>
                                    </View>
                                    <Textarea style={{ flex:1,marginTop:5,marginLeft:10,marginRight:10,marginBottom:5,borderRadius:5,fontSize:12}} bordered placeholder="整单备注" />

                                </View>
                            </Tab>
                            <Tab heading={
                                <TabHeading style={{backgroundColor: Color.tableIndex.photoBg}}>
                                    <Text style={{color: 'white'}}>操作记录</Text>
                                </TabHeading>
                            }>
                                <ScrollView style={{flex:1}}>
                                    <View style={{height:50,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#e6e6e6'}}>
                                        <View style={{flex:2,flexDirection:'row',marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                                            <View style={{width:28,height:28,borderRadius:28,borderWidth:2,borderColor:'#8dc23c'}}>
                                                <Text style={{color:'#8dc23c',textAlign:'center',lineHeight:24,fontSize:14}}>加</Text>
                                            </View>
                                            <Text style={{color:'#333333',paddingLeft:5,fontSize:14}} numberOfLines={1}>小红妹悠乐果杯过呗过不</Text>
                                        </View>
                                        <Text style={{flex:2,textAlign:'center',color:'#888888',paddingLeft:20,fontSize:14}}>周长城</Text>
                                        <Text style={{flex:2,textAlign:'center',color:'#888888',fontSize:14}}>3-20 18:50</Text>
                                    </View>
                                </ScrollView>
                            </Tab>
                        </Tabs>

                        <ImageBackground style={{width:30,height:30,position:'absolute',right:0,top:(HEIGHT - 150) /2}} source={require('../bg/rightBtn.png')}></ImageBackground>
                        <View style={{position:'absolute',top:(HEIGHT - 150) /3,right:0,borderWidth:1,borderColor:'#dedede',backgroundColor:'#f2f2f2'}}>
                            <Button style={{height:40,backgroundColor:'#f2f2f2',width:100,justifyContent:'center',borderBottomWidth:1,borderColor:'#dedede'}}>
                                <Text style={{color:'#8dc23c',lineHeight:40,fontSize:14}}>全叫</Text>
                            </Button>
                            <Button style={{height:40,backgroundColor:'#f2f2f2',width:100,justifyContent:'center',borderBottomWidth:1,borderColor:'#dedede'}}>
                                <Text style={{color:'#8dc23c',lineHeight:40,fontSize:14,borderBottomWidth:1,borderColor:'#dedede'}}>传菜</Text>
                            </Button>
                            <Button style={{height:40,backgroundColor:'#f2f2f2',width:100,justifyContent:'center',borderBottomWidth:1,borderColor:'#dedede'}}>
                                <Text style={{color:'#8dc23c',lineHeight:40,fontSize:14,borderBottomWidth:1,borderColor:'#dedede'}}>整单退菜</Text>
                            </Button>
                            <Button style={{height:40,backgroundColor:'#f2f2f2',width:100,justifyContent:'center',borderBottomWidth:1,borderColor:'#dedede'}}>
                                <Text style={{color:'#8dc23c',lineHeight:40,fontSize:14,borderBottomWidth:1,borderColor:'#dedede'}}>整单备注</Text>
                            </Button>
                            <Button style={{height:40,backgroundColor:'#f2f2f2',width:100,justifyContent:'center'}}>
                                <Text style={{color:'#8dc23c',lineHeight:40,fontSize:14,borderBottomWidth:1,borderColor:'#dedede'}}>打印菜单</Text>
                            </Button>
                        </View>
                    </View>
                </View>

                <Modal animationType={'fade'} visible={this.state.zt} onRequestClose={()=>this.setState({zt: false})} transparent={true}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                        <View style={{width:WIDTH/3,backgroundColor:'#1a1a1a',borderRadius:8,paddingTop:20,paddingBottom:20}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:40}}>
                                <Text style={{color:'#fff',marginLeft:40}}>牛油果烟熏三文鱼</Text>
                                <Text style={{color:'#fff',marginRight:40}}>48/份</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <Button bordered style={{height:30,backgroundColor:'#8dc23c',borderColor:'#8dc23c',borderRadius:5}}><Text style={{fontSize:14,paddingRight:25,paddingLeft:25,color:'#fff'}}>小份</Text></Button>
                                <Button bordered style={{height:30,backgroundColor:'#1a1a1a',borderColor:'#fff',borderRadius:5}}><Text style={{fontSize:14,paddingRight:25,paddingLeft:25,color:'#fff'}}>大份</Text></Button>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',height:60}}>
                                <View>
                                    <Button style={{height:40,width:120,backgroundColor:'#8dc23c',borderRadius:40,justifyContent:'center'}}>
                                        <Text style={{color:'#fff'}}>加入菜品</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>


            </View>
        )
    }

    _item(item) {
        return (
            <TouchableOpacity>
                <View style={{backgroundColor: 'white', height: 40, justifyContent: 'space-between', alignItems:'center',
                    borderBottomWidth:1, borderColor: Color.tableIndex.photoBg, flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>{item.name}</Text>
                    {item.num>0?(
                        <View>
                            <Badge>
                                <Text>{item.num}</Text>
                            </Badge>
                        </View>
                    ):null}

                </View>
            </TouchableOpacity>
        )
    }

    _item2(item) {
        return (
            <TouchableOpacity>
                <View style={{width: 100, height: 100, backgroundColor: 'white', padding:5, margin: 5}}>
                    <View style={{flex:2}}>
                        <Text>{item.name}</Text>
                    </View>
                    <View style={{flex:1, justifyContent:'center'}}>
                        <Text>&yen;{item.price}/份</Text>
                    </View>
                    <ImageBackground style={{width:32,height:32,position:'absolute',right:0,bottom:0}} source={require('../bg/Coder.png')}>
                        <Text style={{color:'#fff',textAlign:'right',paddingRight:2,lineHeight:40,fontSize:15}}>5</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }
}