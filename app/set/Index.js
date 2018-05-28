import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import Left from "../common/Left";
import Bottom from "../common/Bottom";
import Bg from "../common/Bg";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                <Left/>
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                    <View style={{
                        flex: 1, backgroundColor: Color.tableIndex.topBg, flexDirection: 'row',
                        justifyContent: 'space-around', alignItems: 'center', elevation: 2}}>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Text>更新缓存</Text>
                            </Button>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Text>帮助信息</Text>
                            </Button>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Text>使用反馈</Text>
                            </Button>
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Text>厨房转菜单</Text>
                            <Switch/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Text>软键盘开关</Text>
                            <Switch/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Text>客显屏开关</Text>
                            <Switch/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Text>钱箱开关</Text>
                            <Switch/>
                        </View>
                    </View>

                    <Bg name={'Set'}/>

                    <Bottom/>
                </View>
            </View>
        )
    }
}