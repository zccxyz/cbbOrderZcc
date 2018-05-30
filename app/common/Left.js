import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, TouchableOpacity, DeviceEventEmitter, ImageBackground, Picker
} from 'react-native';
import {Text, Thumbnail, Icon, Item, Input, Button} from 'native-base';
import Color from "../common/Color";
import Bottom from "./Bottom";

export default class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: [
                {name: '餐桌', zt: false, id: 1},
                {name: '商品', zt: false, id: 2},
                {name: '场地', zt: false, id: 3},
                {name: '订单', zt: false, id: 4},
                {name: '会员', zt: false, id: 5},
                {name: '存单', zt: false, id: 6},
                {name: '预定', zt: false, id: 7},
                {name: '捐赈', zt: false, id: 8},
                {name: '门店', zt: false, id: 9},
                {name: 'OA', zt: false, id: 10},
                {name: '系统', zt: false, id: 11},
                {name: '审核', zt: false, id: 12},
                {name: '交班', zt: false, id: 13},
                {name: '设置', zt: false, id: 14},
            ],
            nowNav: 1,
        };
    }

    componentWillMount() {
        this.setState({now: this.props.id})
    }
    _init(){
        return null;
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{width: WIDTH / 15, backgroundColor: Color.tableIndex.leftBg, elevation: 4}}>
                    <View style={{
                        width: WIDTH / 15,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: Color.tableIndex.photoBg}}>
                        <Thumbnail small
                            source={{uri: "http://f.hiphotos.baidu.com/zhidao/pic/item/d1a20cf431adcbef63081c28abaf2edda3cc9fdb.jpg"}}/>
                        <Text style={{color: Color.tableIndex.font, fontSize: 13}}>ZCC</Text>
                    </View>
                    {/*<View style={{
                        width: WIDTH / 15,
                        height: HEIGHT * 0.5 / 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#333333'
                    }}>
                        <Text style={{color: Color.tableIndex.font, fontSize: 13}}>展开区域{this.state.zt}</Text>
                        <Icon name={'chevron-small-down'} style={{color: Color.tableIndex.font, fontSize: 13}}
                              type={'Entypo'}/>
                    </View>*/}
                    <FlatList data={this.state.nav} renderItem={({item}) => this._leftItem(item)}
                              keyExtractor={({v, k}) => k + 'x'} extraData={this.state}/>
                </View>
                <View style={{width: WIDTH*14 / 15}}>
                    <ImageBackground style={{height: HEIGHT - 60}} source={require('../bg/bg2.jpg')}>
                        {this._init()}
                    </ImageBackground>
                    <Bottom/>
                </View>
            </View>
        )
    }

    _leftItem(item) {
        return (
            <TouchableOpacity onPress={() => this._tz(item)}>
                <View style={{width: WIDTH / 15, height: (HEIGHT-90)/14, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name={'bowl'} type={'Entypo'} style={{color: item.id===this.state.nowNav ? Color.tableIndex.font : 'gray', fontSize: 15}}/>
                    <Text style={{color: item.id===this.state.now ? Color.tableIndex.font : 'gray', fontSize: 15}}>{item.name}</Text>
                </View>
                <Text style={{backgroundColor: 'black', height: 1}}/>
            </TouchableOpacity>
        )
    }

    _tz(item) {
        //const navigate = this.props.navigation;
        if(this.state.nowNav !== item.id) {
            switch (item.name) {
                case '餐桌':
                    this.props.navigation.navigate('tablesIndex');
                    //DeviceEventEmitter.emit('reload', {id: item.id, tz: 'tablesIndex'});
                    break;
                case '商品':
                    this.props.navigation.navigate('GoodsIndex');
                    break;
                case '场地':
                    this.props.navigation.navigate('AreaIndex');
                    break;
                case '订单':
                    this.props.navigation.navigate('OrderIndex');
                    break;
                case '会员':
                    this.props.navigation.navigate('MemberIndex');
                    break;
                case '存单':
                    this.props.navigation.navigate('SaveIndex');
                    break;
                case '预定':
                    this.props.navigation.navigate('ReserveIndex');
                    break;
                case '捐赈':
                    this.props.navigation.navigate('CharitableIndex');
                    break;
                case '门店':
                    this.props.navigation.navigate('ShopIndex');
                    break;
                case 'OA':
                    this.props.navigation.navigate('OAIndex');
                    break;
                case '系统':
                    this.props.navigation.navigate('SystemIndex');
                    break;
                case '审核':
                    this.props.navigation.navigate('LastIndex');
                    break;
                case '交班':
                    this.props.navigation.navigate('shiftIndex');
                    break;
                case '设置':
                    this.props.navigation.navigate('setIndex');
                    break;
            }
            //this.setState({nowNav: item.id});
        }
    }
}