import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Job from "./Job";
import Log from "./Log";
import Purchase from "./Purchase";
import Top from "../common/Top";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            type: 1,
            nowNav: 10,
        });
    }

    _init() {
        const state = this.state;
        return(
            <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                <Top com={
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <View style={{height: GAO, width: 240, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>

                            <Text onPress={()=>this.setState({type: 1})} style={{height: GAO, width: 80, backgroundColor: state.type===1?Color.tableIndex.photoBg:null,
                                textAlign:'center', lineHeight: GAO, color: state.type===1?Color.tableIndex.font:'black', fontSize:14}}>工作情况</Text>
                            <Text style={{height: GAO, width: 80, textAlign:'center', lineHeight: GAO, borderRightWidth: 1,color:state.type===2?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===2?Color.tableIndex.photoBg:null, fontSize:14}}
                                  onPress={()=>this.setState({type: 2})}>出勤情况</Text>
                            <Text style={{height: GAO, width: 80, textAlign:'center', lineHeight: GAO, borderRightWidth: 1,color:state.type===3?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===3?Color.tableIndex.photoBg:null, fontSize:14}}
                                  onPress={()=>this.setState({type: 3})}>采购情况</Text>
                        </View>
                    </View>
                }/>

                {state.type===1?<Job/>:null}
                {state.type===2?<Log/>:null}
                {state.type===3?<Purchase/>:null}
            </View>
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