import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Classify extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent><Text>采购</Text></Button>
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Thumbnail square source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}}/>
                <Text>阿克苏的飞机喀什地方</Text>
            </View>
        );
        return(
            <View style={{flex:10}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: 'white', flexDirection: 'row', padding:5}}>
                    <View style={{width:WIDTH/4}}>
                        <Text>一级分类</Text>
                    </View>
                    <View style={{width:WIDTH/4}}>
                        <Text>二级分类</Text>
                    </View>
                    <View style={{width:WIDTH/4}}>
                        <Text>操作</Text>
                    </View>
                </View>
                <Text style={{backgroundColor: 'gray', height: 0.5}}/>
                <View style={{flex:10, backgroundColor: 'white', padding:5}}>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width:WIDTH/4}}>
                                <Text>日常用品</Text>
                            </View>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4}}/>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4, alignItems:'center', justifyContent:'center'}}>
                                <Text>茶</Text>
                            </View>
                            <View style={{width:WIDTH/4,justifyContent:'center', alignItems:'center'}}>
                                <View style={{flexDirection: 'row',alignItems:'center', justifyContent:'center'}}>
                                    <Button transparent><Text>查看</Text></Button>
                                    <Button transparent><Text>下架</Text></Button>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4, alignItems:'center', justifyContent:'center'}}>
                                <Text>茶</Text>
                            </View>
                            <View style={{width:WIDTH/4,justifyContent:'center', alignItems:'center'}}>
                                <View style={{flexDirection: 'row',alignItems:'center', justifyContent:'center'}}>
                                    <Button transparent><Text>查看</Text></Button>
                                    <Button transparent><Text>下架</Text></Button>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4}}>
                                <Button transparent>
                                    <Text>增加二级分类</Text>
                                </Button>
                            </View>
                            <View style={{width:WIDTH/4}}/>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width:WIDTH/4}}>
                                <Text>日常用品</Text>
                            </View>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4}}/>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4, alignItems:'center', justifyContent:'center'}}>
                                <Text>茶</Text>
                            </View>
                            <View style={{width:WIDTH/4,justifyContent:'center', alignItems:'center'}}>
                                <View style={{flexDirection: 'row',alignItems:'center', justifyContent:'center'}}>
                                    <Button transparent><Text>查看</Text></Button>
                                    <Button transparent><Text>下架</Text></Button>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4, alignItems:'center', justifyContent:'center'}}>
                                <Text>茶</Text>
                            </View>
                            <View style={{width:WIDTH/4,justifyContent:'center', alignItems:'center'}}>
                                <View style={{flexDirection: 'row',alignItems:'center', justifyContent:'center'}}>
                                    <Button transparent><Text>查看</Text></Button>
                                    <Button transparent><Text>下架</Text></Button>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View style={{width:WIDTH/4}}/>
                            <View style={{width:WIDTH/4}}>
                                <Button transparent>
                                    <Text>增加二级分类</Text>
                                </Button>
                            </View>
                            <View style={{width:WIDTH/4}}/>
                        </View>
                    </View>
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