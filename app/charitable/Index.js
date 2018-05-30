import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
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
        });
    }

    _init() {
        const state = this.state;
        return(
            <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                <Top com={
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <View style={{height: GAO, width: 160, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>

                            <Text onPress={()=>this.setState({type: 1})} style={{height: GAO, width: 80, backgroundColor: state.type===1?Color.tableIndex.photoBg:null,
                                textAlign:'center', lineHeight: GAO, color: state.type===1?Color.tableIndex.font:'black', fontSize: 14}}>捐赠记录</Text>
                            <Text style={{height: GAO, width: 80, textAlign:'center', lineHeight: GAO, borderRightWidth: 1,color:state.type===2?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===2?Color.tableIndex.photoBg:null, fontSize: 14}}
                                  onPress={()=>this.setState({type: 2})}>捐赠提成</Text>
                        </View>
                    </View>
                }/>

                {state.type===1?<Log/>:null}
                {state.type===2?<Extract {...this.props}/>:null}
            </View>
        )
    }
}