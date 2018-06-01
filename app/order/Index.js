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
            leftClassify: [
                {name: '门店采购单', type: 1},
                {name: '异地消费订单', type: 2},
                {name: '门店消费订单', type: 3},
                {name: '门店报损订单', type: 4},
            ],
        });
    }

    _init() {
        const state = this.state;
        return(
            <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                {state.type===1?<Order/>:null}
                {state.type===2?<NonlocalOder/>:null}
                {state.type===3?<StoreOrder/>:null}
                {state.type===4?<LossOrder/>:null}
            </View>
        )
    }
}