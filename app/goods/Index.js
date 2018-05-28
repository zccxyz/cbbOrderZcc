import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import GoodsManage from "./GoodsManage";
import StockManage from "./StockManage";
import Classify from "./Classify";
import Purchase from "./Purchase";

export default class Bg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 4,
        };
    }

    render() {
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
            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                <MyLeft/>
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                    <View style={{
                        flex: 1, backgroundColor: Color.tableIndex.topBg, flexDirection: 'row',
                        justifyContent: 'space-around', alignItems: 'center', elevation: 2}}>
                        <View style={{height: 50, width: 320, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>

                            <Text onPress={()=>this.setState({type: 1})} style={{height: 50, width: 80, backgroundColor: state.type===1?Color.tableIndex.photoBg:null,
                                textAlign:'center', lineHeight: 50, color: state.type===1?Color.tableIndex.font:'black'}}>商品管理</Text>
                            <Text style={{height: 50, width: 80, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===2?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===2?Color.tableIndex.photoBg:null}}
                            onPress={()=>this.setState({type: 2})}>库存管理</Text>
                            <Text onPress={()=>this.setState({type: 3})} style={{height: 50, width: 80, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===3?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===3?Color.tableIndex.photoBg:null}}>商品类别</Text>
                            <Text onPress={()=>this.setState({type: 4})} style={{height: 50, width: 80, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===4?Color.tableIndex.font:'black',
                                borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===4?Color.tableIndex.photoBg:null}}>商品采购</Text>
                        </View>
                    </View>

                    {state.type===1?<GoodsManage/>:null}
                    {state.type===2?<StockManage/>:null}
                    {state.type===3?<Classify/>:null}
                    {state.type===4?<Purchase/>:null}
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