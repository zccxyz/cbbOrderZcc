import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, TouchableOpacity,
    View, Switch, FlatList, ScrollView, ImageBackground, Picker,
} from 'react-native';
import {Text, Thumbnail, Icon, Item, Input, Button, Badge, Tab, Tabs, TabHeading} from 'native-base';
import Color from "../common/Color";
import Left from "../common/Left";
import Bottom from "../common/Bottom";

export default class MealContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };
    }

    render() {
        return(
            <View style={{flex: 10, flexDirection: 'row'}}>
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