import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input } from 'native-base';
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
                        <View style={{height: 50, width: 320, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>
                            <Text style={{height: 50, width: 80, backgroundColor: Color.tableIndex.photoBg,
                                textAlign:'center', lineHeight: 50, color: Color.tableIndex.font}}>全部</Text>
                            <Text style={{height: 50, width: 80, textAlign:'center', lineHeight: 50, borderRightWidth: 1, borderColor: Color.tableIndex.photoBg}}>空台</Text>
                            <Text style={{height: 50, width: 80, textAlign:'center', lineHeight: 50, borderRightWidth: 1, borderColor: Color.tableIndex.photoBg}}>就餐</Text>
                            <Text style={{height: 50, width: 80, textAlign:'center', lineHeight: 50, borderRightWidth: 1, borderColor: Color.tableIndex.photoBg}}>脏台</Text>
                        </View>
                        <View style={{height: 50, width: 160, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>
                            <Text style={{height: 50, width: 80, backgroundColor: Color.tableIndex.photoBg,
                                textAlign:'center', lineHeight: 50, color: Color.tableIndex.font}}>桌号↑</Text>
                            <Text style={{height: 50, width: 80, textAlign:'center', lineHeight: 50, borderRightWidth: 1, borderColor: Color.tableIndex.photoBg}}>时间↓</Text>
                        </View>
                        <Switch/>
                        <Item rounded style={{width: 200}}>
                            <Icon name={'search'} type={'EvilIcons'}/>
                            <Input placeholder='桌号'/>
                        </Item>
                    </View>

                    <ImageBackground style={{flex: 10}} source={require('../bg/bg2.jpg')}>
                        {/*<Image style={{flex:1, width: WIDTH*14/15}} source={require('../bg/bg2.jpg')}/>*/}
                        <FlatList data={this.state.tables} columnWrapperStyle={{justifyContent:'center'}}
                                  renderItem={({item})=>this._item(item)} numColumns={10} keyExtractor={({v, k})=>k}/>
                    </ImageBackground>

                    <Bottom/>
                </View>
            </View>
        );
    }

    _item(item) {
        return(
            <View style={{width: 100, height: 100, backgroundColor: 'white', padding:5, margin:10}}>
                <View style={{flex: 1}}>
                    <Text>{item.name}</Text>
                </View>
                <Text>{item.num}人</Text>
                <Text>&yen;{item.price}</Text>
            </View>
        )
    }
}