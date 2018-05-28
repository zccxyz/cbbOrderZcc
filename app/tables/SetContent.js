import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, TouchableOpacity,
    View, Switch, FlatList, ScrollView, ImageBackground, Picker,
} from 'react-native';
import {Text, Thumbnail, Icon, Item, Input, Button, Badge, Tab, Tabs, TabHeading} from 'native-base';
import Color from "../common/Color";
import Left from "../common/Left";
import Bottom from "../common/Bottom";

export default class SetContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'rgba(255,255,255,.8)'}}>
                <View style={{flexDirection: 'row', height: 50}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>打印场景</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>设备名称</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>规格</Text>
                    </View>
                    <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>操作</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', height: 50}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>收银台</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:2, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row'}}>
                        <View>
                            <Button small style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Text>设置</Text>
                            </Button>
                        </View>
                        <Text>一菜一单</Text>
                        <Switch/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', height: 50}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>厨房</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:2, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row'}}>
                        <View>
                            <Button small style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Text>设置</Text>
                            </Button>
                        </View>
                        <Text>一菜一单</Text>
                        <Switch/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', height: 50}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>标签</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>--</Text>
                    </View>
                    <View style={{flex:2, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row'}}>
                        <View>
                            <Button small style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Text>设置</Text>
                            </Button>
                        </View>
                        <Text>一菜一单</Text>
                        <Switch/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', height: 50}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>凉菜档口</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:2, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row'}}>
                        <View>
                            <Button small style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Text>设置</Text>
                            </Button>
                        </View>
                        <Text>一菜一单</Text>
                        <Switch/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', height: 50}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>热菜档口</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:2, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row'}}>
                        <View>
                            <Button small style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Text>设置</Text>
                            </Button>
                        </View>
                        <Text>一菜一单</Text>
                        <Switch/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', height: 50}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>收银档口</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:2, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row'}}>
                        <View>
                            <Button small style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Text>设置</Text>
                            </Button>
                        </View>
                        <Text>一菜一单</Text>
                        <Switch/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', height: 50}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>外卖档口</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>未设置</Text>
                    </View>
                    <View style={{flex:2, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row'}}>
                        <View>
                            <Button small style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Text>设置</Text>
                            </Button>
                        </View>
                        <Text>一菜一单</Text>
                        <Switch/>
                    </View>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#D9D9D9', height: 40, position:'absolute', bottom: 0, width: WIDTH}}>
                    <Text>重庆餐宝宝有限公司</Text>
                </View>
            </View>
        )
    }
}