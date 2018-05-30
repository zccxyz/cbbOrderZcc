import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, Picker
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";

export default class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return(
            <View style={{
                height: 60, backgroundColor: Color.tableIndex.topBg, elevation: 2}}>
                {this.props.com}
            </View>
        )
    }
}