import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input } from 'native-base';
import Color from "../common/Color";

export default class Bottom extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <View style={{
                height: 40,
                backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={{flexDirection: 'row', marginLeft: 10, alignItems: 'center'}}>
                    <Icon name={'bullhorn'} type={'FontAwesome'} style={{color: 'white'}}/>
                    <Text style={{color: 'white', marginLeft: 10}}>A3桌需要添加茶水</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'white', marginRight: 20}}>就餐：33</Text>
                    <Text style={{color: 'white', marginRight: 20}}>排队：33</Text>
                    <Text style={{color: 'white', marginRight: 20}}>待确认：33</Text>
                    <Text style={{color: 'white', marginRight: 20}}>预约：33</Text>
                    <Text style={{color: 'white', marginRight: 20}}>2018-03-14 10：29</Text>
                </View>
            </View>
        )
    }
}