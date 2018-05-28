import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input } from 'native-base';
import Color from "../common/Color";
import MealContent from "../tables/MealContent";
import SetContent from "../tables/SetContent";
import ShiftContent from "../shift/ShiftContent";

export default class Bg extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <ImageBackground style={{flex: 10, flexDirection: 'row'}} source={require('../bg/bg2.jpg')} >
                {this.props.name==='meal'?<MealContent/>:null}
                {this.props.name==='Set'?<SetContent/>:null}
                {this.props.name==='Shift'?<ShiftContent/>:null}
            </ImageBackground>
        )
    }
}