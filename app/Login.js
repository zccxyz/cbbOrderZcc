import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, ImageBackground, CheckBox,
} from 'react-native';
import { Container, Content, Item, Input, Button, Text, Icon} from 'native-base';
import Color from "./common/Color";

export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('./bg/logo.png')} style={{width:WIDTH, height:HEIGHT}}>
                <View style={{height:HEIGHT/2}}/>
                <View style={{height:HEIGHT/2, alignItems:'center'}}>
                    <View style={{height:HEIGHT/2, width: WIDTH/2}}>
                        <Item rounded style={{marginBottom: 10}}>
                            <Icon name='ios-person-outline' type={'Ionicons'} />
                            <Input placeholder='请输入您的账号'/>
                        </Item>
                        <Item rounded style={{marginBottom: 10}}>
                            <Icon name='ios-unlock-outline' type={'Ionicons'} />
                            <Input placeholder='请输入您的密码'/>
                        </Item>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <CheckBox/>
                                <Text>记住密码</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <CheckBox/>
                                <Text>自动登录</Text>
                            </View>
                        </View>

                        <Button full rounded style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>Success</Text>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}