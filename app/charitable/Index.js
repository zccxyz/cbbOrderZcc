import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Log from "./Log";
import Extract from "./Extract";
import Top from "../common/Top";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            type: 1,
            nowNav: 8,
            leftClassify: [
                {name: '捐赠记录', type: 1},
                {name: '捐赠记录', type: 2},
            ],
        });
    }

    _init() {
        const state = this.state;
        return(
            <ScrollView>
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>

                    {state.type===1?<Log/>:null}
                    {state.type===2?<Extract {...this.props}/>:null}
                </View>
            </ScrollView>
        )
    }
}