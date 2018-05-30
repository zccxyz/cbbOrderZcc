import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, Picker, DatePickerAndroid, DeviceEventEmitter
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Bottom from "../common/Bottom";
import Bg from "../common/Bg";
import Top from "../common/Top";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            zt: 1,
            id: 1,
            begin: {y: '', m: '', d: ''},
            end: {y: '', m: '', d: ''},
            nowNav: 13,
        })
    }
    componentDidMount() {
        /*DeviceEventEmitter.addListener('reload', (data) => {
            this.setState({id: data.id});
            this.props.navigation.navigate(data.tz)
        })*/
    }
    componentWillUnmount() {
        //DeviceEventEmitter.remove();
    }

    _init() {
        return(
            <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                <Top com={
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <View>
                            <Button iconLeft transparent>
                                <Icon type={'FontAwesome'} name={'exchange'} style={{color: Color.tableIndex.photoBg}}/>
                                <Text style={{color: Color.tableIndex.photoBg}}>更新缓存</Text>
                            </Button>
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Text>交班余额（现金）：4600.00</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Text>目前余额（现金）：4800.00</Text>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: 'red'}} small>
                                <Icon type={'Entypo'} name={'log-out'}/>
                                <Text>交班退出</Text>
                            </Button>
                        </View>
                    </View>
                }/>

                <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'rgba(255,255,255,.8)', justifyContent: 'space-between'}}>
                    <View style={{height: 50, backgroundColor: '#CCCCCC',flexDirection: 'row', alignItems:"center", justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <Item regular style={{width: 100, backgroundColor: 'white', height: 40}} onPress={()=>this._time(1)}>
                                <Input disabled value={this.state.begin.y==''?'开始时间':this.state.begin.y+'-'+this.state.begin.m+'-'+this.state.begin.d} />
                            </Item>
                            <Text>--</Text>
                            <Item regular style={{width: 100, backgroundColor: 'white', height: 40, marginRight:10}} onPress={()=>this._time(2)}>
                                <Input disabled value={this.state.begin.y==''?'结束时间':this.state.end.y+'-'+this.state.end.m+'-'+this.state.end.d} />
                            </Item>
                            <Picker style={{width: 100, backgroundColor: 'white', height: 40, marginRight:10}}
                                    selectedValue={this.state.waiter}
                                    onValueChange={(lang) => this.setState({waiter: lang})}>
                                <Picker.Item label="zcc" value="1" />
                                <Picker.Item label="xyz" value="2" />
                            </Picker>
                            <View>
                                <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40}}><Text>查询</Text></Button>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View>
                                <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40, marginRight: 10}}><Text>清机记录</Text></Button>
                            </View>
                            <View>
                                <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40, marginRight: 10}}><Text>打印报表</Text></Button>
                            </View>
                            <View>
                                <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40, marginRight: 10}}><Text>确认完成清机</Text></Button>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        )
    }

    async _time(type) {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: new Date(2020, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                if(type===1) {
                    this.state.begin.y = year.toString();
                    this.state.begin.m = month.toString();
                    this.state.begin.d = day.toString();
                    this.setState({begin: this.state.begin})
                }else{
                    this.state.end.y = year.toString();
                    this.state.end.m = month.toString();
                    this.state.end.d = day.toString();
                    this.setState({end: this.state.end})
                }
            }
        } catch ({code, message}) {
            alert('无法打开日期选择器')
        }
    }
}