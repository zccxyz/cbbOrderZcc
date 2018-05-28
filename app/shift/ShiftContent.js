import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, TouchableOpacity,
    View, Switch, FlatList, ScrollView, ImageBackground, Picker, DatePickerAndroid,
} from 'react-native';
import {Text, Thumbnail, Icon, Item, Input, Button, Badge, Tab, Tabs, TabHeading} from 'native-base';
import Color from "../common/Color";
import Left from "../common/Left";
import Bottom from "../common/Bottom";

export default class ShiftContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            begin: {y: '', m: '', d: ''},
            end: {y: '', m: '', d: ''},
        };
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

    render() {
        return(
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
        )
    }
}