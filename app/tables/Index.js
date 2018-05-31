import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,Modal
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input ,Button} from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
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
            zt:false
        });
    }

    _init() {
        return (
            <View style={{width: WIDTH*14/15, height: HEIGHT-20}}>
                <Top com={
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',flex:1}}>
                        <View style={{height: GAO, width: 320, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>
                            <Text style={{height: GAO, width: 80, backgroundColor: Color.tableIndex.photoBg,
                                textAlign:'center', lineHeight: GAO, color: Color.tableIndex.font}}>全部</Text>
                            <Text style={{height: GAO, width: 80, textAlign:'center', lineHeight: GAO, borderRightWidth: 1, borderColor: Color.tableIndex.photoBg}}>空台</Text>
                            <Text style={{height: GAO, width: 80, textAlign:'center', lineHeight: GAO, borderRightWidth: 1, borderColor: Color.tableIndex.photoBg}}>就餐</Text>
                            <Text style={{height: GAO, width: 80, textAlign:'center', lineHeight: GAO, borderRightWidth: 1, borderColor: Color.tableIndex.photoBg}}>脏台</Text>
                        </View>
                        <View style={{height: GAO, width: 160, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>
                            <Text style={{height: GAO, width: 80, backgroundColor: Color.tableIndex.photoBg,
                                textAlign:'center', lineHeight: GAO, color: Color.tableIndex.font}} onPress={()=>{this.setState({zt:true})}}>桌号↑</Text>
                            <Text style={{height: GAO, width: 80, textAlign:'center', lineHeight: GAO, borderRightWidth: 1, borderColor: Color.tableIndex.photoBg}}>时间↓</Text>
                        </View>
                        <Switch/>
                        <Item rounded style={{width: 200, height: GAO}}>
                            <Icon name={'search'} type={'EvilIcons'}/>
                            <Input placeholder='桌号'/>
                        </Item>
                    </View>
                }/>

                <View style={{flex: 10}}>
                    <FlatList data={this.state.tables} columnWrapperStyle={{justifyContent:'center'}}
                              renderItem={({item})=>this._item(item)} numColumns={10} keyExtractor={({v, k})=>k}/>
                </View>

                <Modal animationType={'fade'} visible={this.state.zt} onRequestClose={()=>this.setState({zt: false})} transparent={true}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{backgroundColor:'#1a1a1a',borderRadius:8,paddingTop:20,paddingBottom:20}}>

                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingLeft:20,paddingRight:20}}>
                                <Text style={{color:'#fff'}}>原桌号：</Text>
                                <View style={{flexDirection:'row',borderWidth:1,borderColor:'#fff',alignItems:'center',borderRadius:5}}>
                                    <Text style={{color:'#fff',borderRightWidth:1,borderColor:'#fff',paddingLeft:20,paddingRight:20}}>B03</Text>
                                    <View style={{marginLeft:5,marginRight:5}}>
                                        <Icon name='triangle-up' type={'Entypo'} style={{color:'#fff',fontSize:16}}></Icon>
                                        <Icon name='triangle-down' type={'Entypo'} style={{color:'#fff',fontSize:16}}></Icon>
                                    </View>
                                </View>
                                <View style={{marginLeft:15,marginRight:15,height:1,width:50,backgroundColor:'#fff'}}></View>
                                <Text style={{color:'#fff'}}>换桌：</Text>
                                <View style={{flexDirection:'row',borderWidth:1,borderColor:'#fff',alignItems:'center',borderRadius:5}}>
                                    <Text style={{color:'#fff',borderRightWidth:1,borderColor:'#fff',paddingLeft:20,paddingRight:20}}>B03</Text>
                                    <View style={{marginLeft:5,marginRight:5}}>
                                        <Icon name='triangle-up' type={'Entypo'} style={{color:'#fff',fontSize:16}}></Icon>
                                        <Icon name='triangle-down' type={'Entypo'} style={{color:'#fff',fontSize:16}}></Icon>
                                    </View>
                                </View>
                            </View>

                            <View style={{height:50,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#fff'}}>原桌号B03</Text>
                                <Text style={{paddingLeft:20,paddingRight:20,color:'#fff'}}>已换至</Text>
                                <Text style={{color:'#fff'}}>B02</Text>
                            </View>

                            <View style={{justifyContent:'center',alignItems:'center',height:60}}>
                                <View>
                                    <Button style={{height:40,width:120,backgroundColor:'#8dc23c',borderRadius:40,justifyContent:'center'}}>
                                        <Text style={{color:'#fff'}}>确定</Text>
                                    </Button>
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
            <View style={{width: 100, height: 100, backgroundColor: 'white', padding:5, margin:10}}>
                <View style={{flex: 1}}>
                    <Text>{item.name}</Text>
                </View>
                <Text>{item.num}人</Text>
                <Text>&yen;{item.price}</Text>
                <ImageBackground style={{width:30,height:30,position:'absolute',right:0,bottom:0}} source={require('../bg/Coder_03.png')}>
                    {/*<Text style={{color:'#fff',textAlign:'right',paddingRight:2,lineHeight:40,fontSize:15}}>5</Text>*/}
                </ImageBackground>
            </View>
        )
    }
}