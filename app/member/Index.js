import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button, Card, CardItem, Body } from 'native-base';
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
        });
    }

    _init() {
        return (
            <View style={{width: WIDTH*14/15, height: HEIGHT-20}}>
                <Top com={
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <View style={{height: GAO, width: 320, borderRadius: 5, flexDirection: 'row'}}/>
                        <Item rounded style={{width: 300, height: GAO}}>
                            <Input placeholder='输入会员名称或卡号'/>
                            <Icon name={'search'} type={'EvilIcons'} style={{fontSize: 35}}/>
                        </Item>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}} small>
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
                    <Text style={{color: 'white', width: 80,textAlign:'center',height: 30, lineHeight:30, backgroundColor:'#019D86'}}>送券</Text>
                    <Text style={{color: 'white', width: 80,textAlign:'center',height: 30, lineHeight:30}}>充值</Text>
                </View>
            </View>
        )
    }
}