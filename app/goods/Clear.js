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
            type: 1,
        })
    }

    _init() {
        return (
            <View style={{width: WIDTH*14/15, height: HEIGHT-20}}>
                <Top com={
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                        <View style={{flexDirection:'row', padding:10}}>
                            <Button small transparent style={{backgroundColor:this.state.type===1?Color.tableIndex.photoBg:null}} onPress={()=>this.setState({type:1})}>
                                <Text style={{color: this.state.type===1?'white':'black'}}>全部</Text>
                            </Button>
                            <Button small transparent style={{backgroundColor:this.state.type===2?Color.tableIndex.photoBg:null}} onPress={()=>this.setState({type:2})}>
                                <Text style={{color: this.state.type===2?'white':'black'}}>未沽清</Text>
                            </Button>
                            <Button small transparent style={{backgroundColor:this.state.type===3?Color.tableIndex.photoBg:null}} onPress={()=>this.setState({type:3})}>
                                <Text style={{color: this.state.type===3?'white':'black'}}>即将售罄</Text>
                            </Button>
                            <Button small transparent style={{backgroundColor:this.state.type===4?Color.tableIndex.photoBg:null}} onPress={()=>this.setState({type:4})}>
                                <Text style={{color: this.state.type===4?'white':'black'}}>售罄</Text>
                            </Button>
                            <Button small transparent style={{backgroundColor:this.state.type===5?Color.tableIndex.photoBg:null}} onPress={()=>this.setState({type:5})}>
                                <Text style={{color: this.state.type===5?'white':'black'}}>已下架</Text>
                            </Button>
                        </View>
                        <Item rounded style={{width: 200, height:GAO, marginRight:10}}>
                            <Input placeholder='菜品首字母'/>
                            <Icon name={'search'} type={'EvilIcons'} style={{fontSize: 35}}/>
                        </Item>
                    </View>
                }/>

                <View style={{flex: 10}}>

                    <FlatList data={this.state.tables} columnWrapperStyle={{justifyContent:'center', flexWrap:'wrap'}}
                              renderItem={({item})=>this._item(item)} numColumns={8} keyExtractor={({v, k})=>k}/>
                </View>
            </View>
        );
    }

    _item(item) {
        return(
            <View style={{width:(WIDTH-150)/8, height: 100, elevation: 2, backgroundColor: 'white', margin:5, padding:5}}>
                <Text style={{height:70, fontSize:14}}>安居为阿斯蒂阿萨啊</Text>
                <Text style={{height:20, lineHeight:20}}>&yen;128</Text>
            </View>
        )
    }
}