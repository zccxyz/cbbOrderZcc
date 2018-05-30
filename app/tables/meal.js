import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, TouchableOpacity,
    View, Switch, FlatList, ScrollView, ImageBackground, Picker,
} from 'react-native';
import {Text, Thumbnail, Icon, Item, Input, Button, Badge, Tab, Tabs, TabHeading} from 'native-base';
import Color from "../common/Color";
import Top from "../common/Top";
import Bg from "../common/Bg";
import Left from "../common/Left";


export default class Index extends Left {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            type: 1,
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
                                <TabHeading style={{backgroundColor: Color.tableIndex.photoBg}}>
                                    <Text style={{color: 'white'}}>菜品列表</Text>
                                    <Badge><Text>1</Text></Badge>
                                </TabHeading>
                            }>

                            </Tab>
                            <Tab heading={
                                <TabHeading style={{backgroundColor: Color.tableIndex.photoBg}}>
                                    <Text style={{color: 'white'}}>操作记录</Text>
                                </TabHeading>
                            }>
                                <Text>tab2</Text>
                            </Tab>
                        </Tabs>
                    </View>
                </View>


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
                </View>
            </TouchableOpacity>
        )
    }
}