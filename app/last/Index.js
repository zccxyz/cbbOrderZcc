import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Purchase from "./Purchase";
import Loss from "./Loss";
import Receipt from "./Receipt";
import Top from "../common/Top";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            type: 1,
            nowNav: 12,
            leftClassify: [
                {name: '采购单审核', type: 1},
                {name: '报损单审核', type: 2},
                {name: '存单审核', type: 3},
            ],
        });
    }

    _init() {
        const state = this.state;
        return(
            <ScrollView>
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>

                    {state.type===1?<Purchase/>:null}
                    {state.type===2?<Loss/>:null}
                    {state.type===3?<Receipt/>:null}
                </View>
            </ScrollView>
        )
    }
}