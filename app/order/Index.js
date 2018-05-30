import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import ForeignSeal from "./Order";



export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 3,
        };
    }

    render() {
        const state = this.state;
        return(
            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                <MyLeft/>
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                    <View style={{
                        flex: 1, backgroundColor: Color.tableIndex.topBg, flexDirection: 'row',
                        justifyContent: 'space-around', alignItems: 'center', elevation: 2}}>
                        <View style={{height: 50, width: 750, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>

                            <Text onPress={()=>this.setState({type: 1})} style={{height: 50, width: 150, backgroundColor: state.type===1?Color.tableIndex.photoBg:null,
                                textAlign:'center', lineHeight: 50, color: state.type===1?Color.tableIndex.font:'black', fontSize: 15}}>开始下单</Text>
                            <Text style={{height: 50, width: 150, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===2?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===2?Color.tableIndex.photoBg:null, fontSize: 15}}
                                  onPress={()=>this.setState({type: 2})}>门店采购单</Text>
                            <Text style={{height: 50, width: 150, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===3?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===3?Color.tableIndex.photoBg:null, fontSize: 15}}
                                  onPress={()=>this.setState({type: 3})}>异地消费订单</Text>
                            <Text style={{height: 50, width: 150, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===4?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===4?Color.tableIndex.photoBg:null, fontSize: 15}}
                                  onPress={()=>this.setState({type: 4})}>门店消费订单</Text>
                            <Text style={{height: 50, width: 150, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===5?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===5?Color.tableIndex.photoBg:null, fontSize: 15}}
                                  onPress={()=>this.setState({type: 5})}>门店报损订单</Text>
                        </View>
                    </View>

                    {state.type===1?<ForeignSeal/>:null}
                    {state.type===2?<Loss/>:null}
                    {state.type===3?<ForeignSeal/>:null}

                </View>
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