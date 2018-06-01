import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Examine from "./Examine";
import Save from "./Save";
import Top from "../common/Top";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            type: 1,
            nowNav: 6,
            leftClassify: [
                {name: '门店存单', type: 1},
                {name: '待审核存单', type: 2},
            ],
        });
    }

    _init() {
        const state = this.state;
        return(
            <ScrollView>
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>

                    {state.type===1?<Save/>:null}
                    {state.type===2?<Examine/>:null}
                </View>
            </ScrollView>
        )
    }
}