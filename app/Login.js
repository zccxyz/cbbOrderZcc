import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, ImageBackground, CheckBox,
} from 'react-native';
import { Container, Content, Item, Input, Button, Text, Icon} from 'native-base';
import Color from "./common/Color";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zt: false,
            zt2: false,
            name: '',
            pw: '',
        }
    }

    _login() {
        fetch(ym+Require.login).then(r=>r.json())
            .then(rs=>{
                console.log(rs)
            }).catch(err=>{
                console.log(err)
        })
    }

    render() {
        const state = this.state;
        return (
            <ImageBackground source={require('./bg/logo.png')} style={{width:WIDTH, height:HEIGHT}}>
                <View style={{height:HEIGHT/2}}/>
                <View style={{height:HEIGHT/2, alignItems:'center'}}>
                    <View style={{height:HEIGHT/2, width: WIDTH/2}}>
                        <Item rounded style={{marginBottom: 10}}>
                            <Icon name='ios-person-outline' type={'Ionicons'} />
                            <Input placeholder='请输入您的账号' onChangeText={e=>this.setState({name: e})}/>
                        </Item>
                        <Item rounded style={{marginBottom: 10}}>
                            <Icon name='ios-unlock-outline' type={'Ionicons'} />
                            <Input placeholder='请输入您的密码' onChangeText={e=>this.setState({pw: e})}/>
                        </Item>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <CheckBox value={state.zt} onValueChange={e=>this.setState({zt: e})}/>
                                <Text>记住密码</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <CheckBox value={state.zt2} onValueChange={e=>this.setState({zt2: e})}/>
                                <Text>自动登录</Text>
                            </View>
                        </View>

                        <Button full rounded style={{backgroundColor: Color.tableIndex.photoBg}} onPress={()=>this._login()}>
                            <Text>登录</Text>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}