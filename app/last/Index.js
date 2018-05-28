import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Purchase from "./Purchase";
import Loss from "./Loss";
import Receipt from "./Receipt";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
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
                        <View style={{height: 50, width: 240, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>

                            <Text onPress={()=>this.setState({type: 1})} style={{height: 50, width: 80, backgroundColor: state.type===1?Color.tableIndex.photoBg:null,
                                textAlign:'center', lineHeight: 50, color: state.type===1?Color.tableIndex.font:'black', fontSize: 15}}>采购单审核</Text>
                            <Text style={{height: 50, width: 80, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===2?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===2?Color.tableIndex.photoBg:null, fontSize: 15}}
                            onPress={()=>this.setState({type: 2})}>报损单审核</Text>
                            <Text style={{height: 50, width: 80, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===3?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===3?Color.tableIndex.photoBg:null, fontSize: 15}}
                                  onPress={()=>this.setState({type: 3})}>存单审核</Text>
                        </View>
                    </View>

                    {state.type===1?<Purchase/>:null}
                    {state.type===2?<Loss/>:null}
                    {state.type===3?<Receipt/>:null}
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