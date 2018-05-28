import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, DatePickerAndroid, DeviceEventEmitter
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import Left from "../common/Left";
import Bottom from "../common/Bottom";
import Bg from "../common/Bg";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zt: 1,
            id: 1,
        };
    }
    componentDidMount() {
        DeviceEventEmitter.addListener('reload', (data) => {
            this.setState({id: data.id});
            this.props.navigation.navigate(data.tz)
        })
    }
    componentWillUnmount() {
        DeviceEventEmitter.remove();
    }

    render() {
        return(
            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                {this.state.id===1?<Left id={this.state.id}/>:null}
                {this.state.id===2?<Left id={this.state.id}/>:null}
                {this.state.id===3?<Left id={this.state.id}/>:null}
                {this.state.id===4?<Left id={this.state.id}/>:null}
                {this.state.id===5?<Left id={this.state.id}/>:null}
                {this.state.id===6?<Left id={this.state.id}/>:null}
                {this.state.id===7?<Left id={this.state.id}/>:null}
                {this.state.id===8?<Left id={this.state.id}/>:null}
                {this.state.id===9?<Left id={this.state.id}/>:null}
                {this.state.id===10?<Left id={this.state.id}/>:null}
                {this.state.id===11?<Left id={this.state.id}/>:null}
                {this.state.id===12?<Left id={this.state.id}/>:null}
                {this.state.id===13?<Left id={this.state.id}/>:null}
                {this.state.id===14?<Left id={this.state.id}/>:null}
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                    <View style={{
                        flex: 1, backgroundColor: Color.tableIndex.topBg, flexDirection: 'row',
                        justifyContent: 'space-around', alignItems: 'center', elevation: 2}}>
                        <View>
                            <Button iconLeft transparent>
                                <Icon type={'FontAwesome'} name={'exchange'} style={{color: Color.tableIndex.photoBg}}/>
                                <Text style={{color: Color.tableIndex.photoBg}}>更新缓存</Text>
                            </Button>
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Text>交班余额（现金）：4600.00</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Text>目前余额（现金）：4800.00</Text>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: 'red'}}>
                                <Icon type={'Entypo'} name={'log-out'}/>
                                <Text>交班退出</Text>
                            </Button>
                        </View>
                    </View>

                    <Bg name={'Shift'}/>

                    <Bottom/>
                </View>
            </View>
        )
    }
}