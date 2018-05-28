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
import Bg from "../common/Bg";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                <Left/>

                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                    <View style={{
                        flex: 1, backgroundColor: Color.tableIndex.topBg, flexDirection: 'row',
                        justifyContent: 'space-around', alignItems: 'center', elevation: 2
                    }}>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Icon name='ios-arrow-dropleft' type={'Ionicons'} />
                                <Text>桌台B02</Text>
                            </Button>
                        </View>
                        <Picker style={{width: 100}} mode={'dropdown'}
                                selectedValue={this.state.waiter}
                            onValueChange={(lang) => this.setState({waiter: lang})}>
                            <Picker.Item label="zcc" value="1" />
                            <Picker.Item label="xyz" value="2" />
                        </Picker>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <Text>就餐人数：</Text>
                            <Item style={{width:50}}>
                                <Input placeholder='人数'/>
                            </Item>
                            <Text>人</Text>
                        </View>
                        <Item rounded style={{width: 200}}>
                            <Icon name={'search'} type={'EvilIcons'}/>
                            <Input placeholder='菜品首字母'/>
                        </Item>
                        <View style={{flexDirection: 'column', alignItems:'center'}}>
                            <Text>共6份/&yen;286</Text>
                            <Text>(赠送&yen;42)</Text>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Icon name='ios-arrow-dropleft' type={'Ionicons'} />
                                <Text>下单</Text>
                            </Button>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}}>
                                <Icon name='ios-arrow-dropleft' type={'Ionicons'} />
                                <Text>结账</Text>
                            </Button>
                        </View>
                    </View>

                    <Bg name={'meal'}/>

                    <Bottom/>
                </View>
            </View>
        )
    }


}