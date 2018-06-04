import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,Modal,TouchableOpacity
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button, Card, CardItem, Body,ListItem,Radio,Left,Right,Content } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Bottom from "../common/Bottom";
import Top from "../common/Top";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            tables: [
                {name: 'A01', num: 5, price: 1125,islower:true},
                {name: 'A02', num: 6, price: 1253,islower:false},
                {name: 'A03', num: 3, price: 1215,islower:false},
                {name: 'A04', num: 4, price: 12215,islower:false},
                {name: 'A05', num: 7, price: 1215,islower:false},
                {name: 'A06', num: 12, price: 2125,islower:false},
                {name: 'A06', num: 12, price: 2125,islower:false},
                {name: 'A06', num: 0, price: 2125,islower:false},
                {name: 'A06', num: 12, price: 2125,islower:false},
                {name: 'A06', num: 12, price: 2125,islower:false},
                {name: 'A06', num: 0, price: 2125,islower:false},
                {name: 'A06', num: 12, price: 2125,islower:false},
            ],
            type: 1,
            nowNav: 2,
            zt:false
            /*leftClassify: [
                {name: '全部', type: 1},
                {name: '未沽清', type: 2},
                {name: '即将售罄', type: 3},
                {name: '售罄', type: 4},
                {name: '已下架', type: 5},
            ],*/
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

                <Modal animationType={'fade'} visible={this.state.zt} onRequestClose={()=>this.setState({zt: false})} transparent={true}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{backgroundColor:'#1a1a1a',borderRadius:8,padding:30}}>

                            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                                <Text style={{color:'#fff'}}>名称:</Text>
                                <Text style={{color:'#fff',paddingLeft:20}}>牛油果烟熏三文鱼</Text>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                                <Text style={{color:'#fff'}}>份数:</Text>
                                <Item rounded style={{width:180,borderRadius:5,height:40,marginLeft:20}}>
                                    <Input bordered style={{width:180,fontSize:14}} placeholder='留空则不限量供应'/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                                <Text style={{color:'#fff'}}>类型:</Text>
                                <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                                    <Radio color={"#fff"} selectedColor={"#fff"} selected={false}/>
                                    <Text style={{color:'#fff'}}>按天清零</Text>
                                    <Radio color={"#fff"} style={{marginLeft:20}} selectedColor={"#fff"} selected={true}/>
                                    <Text style={{color:'#fff'}}>按总数量</Text>

                                </View>

                            </View>


                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:60}}>
                                <View style={{marginRight:30}}>
                                    <Button style={{height:40,width:120,backgroundColor:'#999999',borderRadius:40,justifyContent:'center'}}>
                                        <Text style={{color:'#fff'}}>下架商品</Text>
                                    </Button>
                                </View>

                                <View>
                                    <Button style={{height:40,width:120,backgroundColor:'#8dc23c',borderRadius:40,justifyContent:'center'}} onPress={()=>{this.setState({zt:false})}}>
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
        if(item.num == 0){
            return(
                <View style={{width:(WIDTH-150)/8, height: 100, elevation: 2, backgroundColor: 'white', margin:5, padding:5}}>
                    <Text style={{height:70, fontSize:14}}>安居为阿斯蒂阿萨啊</Text>
                    <Text style={{height:20, lineHeight:20}}>&yen;{item.price}</Text>
                    <ImageBackground style={{width:30,height:30,position:'absolute',right:0,bottom:0}} source={require('../bg/redCoder.png')}>
                        <Text style={{color:'#fff',textAlign:'right',paddingRight:2,lineHeight:40,fontSize:15}}>{item.num}</Text>
                    </ImageBackground>
                </View>
            )
        }
        else if(item.islower){
            return(
                <ImageBackground style={{width:(WIDTH-150)/8, height: 100, elevation: 2, backgroundColor: 'white', margin:5, padding:5}} source={require('../bg/Lowerframe.png')}>
                    <Text style={{height:70, fontSize:14}}>安居为阿斯蒂阿萨啊</Text>
                    <Text style={{height:20, lineHeight:20}}>&yen;{item.price}</Text>
                </ImageBackground>
            )
        }
        else{
            return(
                <TouchableOpacity onPress={()=>{this.setState({zt:true})}}>
                    <ImageBackground style={{width:(WIDTH-150)/8, height: 100, elevation: 2, backgroundColor: 'white', margin:5, padding:5}}>
                        <Text style={{height:70, fontSize:14}}>安居为阿斯蒂阿萨啊</Text>
                        <Text style={{height:20, lineHeight:20}}>&yen;{item.price}</Text>
                        <ImageBackground style={{width:30,height:30,position:'absolute',right:0,bottom:0}} source={require('../bg/Coder.png')}>
                            <Text style={{color:'#fff',textAlign:'right',paddingRight:2,lineHeight:40,fontSize:15}}>{item.num}</Text>
                        </ImageBackground>
                    </ImageBackground>
                </TouchableOpacity>
            )
        }
    }
}