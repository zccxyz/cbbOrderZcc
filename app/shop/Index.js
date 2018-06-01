import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Info from "./Info";
import Day from "./Day";
import Feedback from "./Feedback";
import Top from "../common/Top";

export default class    Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            type: 1,
            nowNav: 9,
            leftClassify: [
                {name: '门店信息', type: 1},
                {name: '日常管理', type: 2},
                {name: '用户反馈', type: 3},
            ],
        });
    }

    _init() {
        const state = this.state;
        return(
            <ScrollView>
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>

                    {state.type===1?<Info/>:null}
                    {state.type===2?<Day/>:null}
                    {state.type===3?<Feedback/>:null}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#ECEFF4' },
    text: { margin: 6, textAlign:'center' },
    row: { flexDirection: 'row', backgroundColor: 'white'  },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});