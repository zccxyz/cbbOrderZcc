import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Reserve from "./Reserve";
import Top from "../common/Top";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            type: 1,
            nowNav: 7,
            leftClassify: [
                {name: '预定订单', type: 1},
            ],
        });
    }

    _init() {
        const state = this.state;
        return(
            <ScrollView>
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>

                    {state.type===1?<Reserve/>:null}
                </View>
            </ScrollView>
        )
    }
}