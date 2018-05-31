import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Order from "./Order";
import NonlocalOder from "./NonlocalOder";
import StoreOrder from "./StoreOrder";
import LossOrder from "./LossOrder";
import Top from "../common/Top";
import StockManage from "../goods/StockManage";
import Loss from "../last/Loss";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            type: 1,
            nowNav: 4,
        });
    }

    _init() {
        const state = this.state;
        return(
            <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                <Top com={
                    <View style={{flex: 1,  flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <View style={{height: GAO, width: 320, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>

                            <Text onPress={()=>this.setState({type: 1})} style={{height: GAO, width: 80, textAlign:'center',
                                lineHeight: GAO, borderRightWidth: 1,color:state.type===1?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===1?Color.tableIndex.photoBg:null, fontSize: 12}}>门店采购单</Text>
                            <Text onPress={()=>this.setState({type: 2})} style={{height: GAO, width: 80, textAlign:'center',
                                lineHeight: GAO, borderRightWidth: 1,color:state.type===2?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===2?Color.tableIndex.photoBg:null, fontSize: 12}}>异地消费订单</Text>
                            <Text onPress={()=>this.setState({type: 3})} style={{height: GAO, width: 80, textAlign:'center',
                                lineHeight: GAO, borderRightWidth: 1,color:state.type===3?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===3?Color.tableIndex.photoBg:null, fontSize: 12}}>门店消费订单</Text>
                            <Text onPress={()=>this.setState({type: 4})} style={{height: GAO, width: 80, textAlign:'center',
                                lineHeight: GAO, borderRightWidth: 1,color:state.type===4?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===4?Color.tableIndex.photoBg:null, fontSize: 12}}>门店报损订单</Text>
                        </View>
                    </View>
                }/>

                {state.type===1?<Order/>:null}
                {state.type===2?<NonlocalOder/>:null}
                {state.type===3?<StoreOrder/>:null}
                {state.type===4?<LossOrder/>:null}
            </View>
        )
    }
}