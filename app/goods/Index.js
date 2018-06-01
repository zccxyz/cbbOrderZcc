import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import GoodsManage from "./GoodsManage";
import StockManage from "./StockManage";
import Classify from "./Classify";
import Purchase from "./Purchase";
import Top from "../common/Top";

export default class Bg extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            type: 4,
            nowNav: 2,
            leftClassify: [
                {name:'商品管理', type: 1},
                {name:'库存管理', type: 2},
                {name:'商品类别', type: 3},
                {name:'商品采购', type: 4},
            ],
        });
    }

    _init() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent><Text>查看</Text></Button>
                <Button transparent><Text>下架</Text></Button>
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Thumbnail square source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}}/>
                <Text>阿克苏的飞机喀什地方</Text>
            </View>
        );
        return(
            <ScrollView>
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                    {state.type===1?<GoodsManage/>:null}
                    {state.type===2?<StockManage/>:null}
                    {state.type===3?<Classify/>:null}
                    {state.type===4?<Purchase/>:null}
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