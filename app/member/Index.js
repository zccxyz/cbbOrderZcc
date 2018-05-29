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

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'space-between',flexDirection: 'row'}}>
                <MyLeft/>

                <View style={{width: WIDTH*14/15, height: HEIGHT-20}}>
                    <View style={{flex: 1, backgroundColor: Color.tableIndex.topBg, flexDirection: 'row',
                        justifyContent: 'space-around', alignItems: 'center', elevation: 2}}>
                        <View style={{height: 50, width: 320, borderRadius: 5, flexDirection: 'row'}}/>
                        <Item rounded style={{width: 300}}>
                            <Input placeholder='输入会员名称或卡号'/>
                            <Icon name={'search'} type={'EvilIcons'} style={{fontSize: 35}}/>
                        </Item>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Text>开卡</Text>
                            </Button>
                        </View>
                    </View>

                    <View style={{flex: 10}}>

                        <FlatList data={this.state.tables} columnWrapperStyle={{justifyContent:'center', flexWrap:'wrap'}}
                                  renderItem={({item})=>this._item(item)} numColumns={3} keyExtractor={({v, k})=>k}/>
                    </View>

                    <Bottom/>
                </View>
            </View>
        );
    }

    _item(item) {
        return(
            <View style={{width:300, height: 200, elevation: 2, backgroundColor: 'white', margin:5}}>
                <View style={{height:160, padding:5}}>
                    <Text style={{padding:5}}>姓名：zcc</Text>
                    <Text style={{padding:5}}>电话：18584878968</Text>
                    <Text style={{padding:5}}>卡号：525635</Text>
                    <Text style={{padding:5}}>门店：十三小厨测试店铺</Text>
                    <View style={{flexDirection:'row',padding:5}}>
                        <Text style={{fontSize:13}}>总消费次数：1</Text>
                        <Text style={{fontSize:13}}>月消费次数：1</Text>
                    </View>
                    <View style={{width:120, height:100, position:'absolute', top: 0, right:0, padding:10}}>
                        <Text>余额：<Text style={{color: '#A39104', fontSize: 20}}>960</Text></Text>
                        <Text>积分：<Text style={{color: '#A39104', fontSize: 20}}>960</Text></Text>
                    </View>
                </View>
                <View style={{backgroundColor:'#A39104', flexDirection:'row', justifyContent:'flex-end',height:40}}>
                    <Text style={{color: 'white', width: 80,textAlign:'center',height: 40, lineHeight:40, backgroundColor:'#019D86'}}>送券</Text>
                    <Text style={{color: 'white', width: 80,textAlign:'center',height: 40, lineHeight:40}}>充值</Text>
                </View>
            </View>
        )
    }
}