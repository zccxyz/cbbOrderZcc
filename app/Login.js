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
            role:0

        }
    }

    _login() {
        fetch(ym+request.login).then(r=>r.json())
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
                    <View style={{height:HEIGHT/2, width: WIDTH/3}}>
                        <View style={{height:70,flexDirection:'row',justifyContent:'center'}}>
                           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                               <Text style={{paddingRight:30,paddingLeft:30,paddingBottom:10,borderBottomWidth:2,
                                   borderColor:this.state.role == 0 ? '#8dc23c' : '#fff',
                                   color:this.state.role == 0 ? '#8dc23c' : '#666'}} onPress={()=>{this.setState({role:0})}}>管理员登录</Text>
                           </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{paddingRight:30,paddingLeft:30,paddingBottom:10,borderBottomWidth:2,
                                    borderColor:this.state.role == 1 ? '#8dc23c' : '#fff',
                                    color:this.state.role == 1 ? '#8dc23c' : '#666'}} onPress={()=>{this.setState({role:1})}}>服务员登录</Text>
                            </View>
                        </View>
                        <Item rounded style={{marginBottom: 10,borderRadius:8}}>
                            <Icon name='ios-person-outline' type={'Ionicons'} style={{color:'#666666'}}/>
                            <Input placeholder='请输入您的账号' style={{color:'#666666'}} placeholderTextColor='#999' onChangeText={e=>this.setState({name: e})}/>
                        </Item>
                        <Item rounded style={{marginBottom: 10,borderRadius:8}} >
                            <Icon name='ios-unlock-outline' type={'Ionicons'} style={{color:'#666666'}} />
                            <Input placeholder='请输入您的密码' style={{color:'#666666'}} placeholderTextColor='#999' onChangeText={e=>this.setState({pw: e})}/>
                        </Item>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <CheckBox value={state.zt} onValueChange={e=>this.setState({zt: e})}/>
                                <Text style={{color:'#666666'}}>记住密码</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <CheckBox value={state.zt2} onValueChange={e=>this.setState({zt2: e})}/>
                                <Text style={{color:'#666666'}}>自动登录</Text>
                            </View>
                        </View>

                        <Button full rounded style={{backgroundColor: Color.tableIndex.photoBg,borderRadius:8}} onPress={()=>this._login()}>
                            <Text>登录</Text>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}