import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,Modal
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button,Form,Picker } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Bg from "../common/Bg";
import Top from "../common/Top";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            nowNav: 14,
            zt:false,
            selected2: undefined
        });
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    _init() {
        return(
            <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                <Top com={
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}} small>
                                <Text>更新缓存</Text>
                            </Button>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}} small>
                                <Text>帮助信息</Text>
                            </Button>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}} small>
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
                }/>

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
                            <Text onPress={()=>{this.setState({zt:true})}}>未设置</Text>
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

                    <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#D9D9D9', height: 40, position:'absolute', bottom: 40, width: WIDTH}}>
                        <Text>重庆餐宝宝有限公司</Text>
                    </View>
                </View>

                <Modal animationType={'fade'} visible={this.state.zt} onRequestClose={()=>this.setState({zt: false})} transparent={true}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{backgroundColor:'#fff'}}>
                            <View style={{backgroundColor:'#8dc23c',height:50,justifyContent:'center',paddingLeft:100,paddingRight:100}}>
                                <Text style={{color:'#fff'}}>设置收银台打印机</Text>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',paddingBottom:40,paddingTop:40}}>
                                <Form style={{height:40,borderWidth:1,borderColor:'#b3b3b3',borderRadius:5}}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        style={{ width:200,height:40 }}
                                        selectedValue={this.state.selected2}
                                        onValueChange={this.onValueChange2.bind(this)}
                                    >
                                        <Picker.Item label="Wallet" value="key0" />
                                        <Picker.Item label="ATM Card" value="key1" />
                                        <Picker.Item label="Debit Card" value="key2" />
                                        <Picker.Item label="Credit Card" value="key3" />
                                        <Picker.Item label="Net Banking" value="key4" />
                                    </Picker>
                                </Form>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}