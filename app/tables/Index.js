import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, Modal, ScrollView, TouchableOpacity,
} from 'react-native';
import {Text, Thumbnail, Icon, Item, Input, Button, Picker} from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Top from "../common/Top";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            tables: [],
            bfTables: [],
            selected: "key1",
            zt: false,
            zt1: false,
            zt2: false,
            zt3: false,
            zt4: false,
            now: 0,
            zt5: 1,
            xyz: [],
            num: '',
        });
    }

    componentDidMount() {
        this._getTables();
        this._getAreas();
        this._getWaiters();
    }

    _getAreas() {
        this._get(request.areas)
            .then(rs=>{
            if (rs.errCode == 0) {
                this.setState({navArea: rs.data.area});
            }
            console.log(rs, '区域')
        })
    }

    _getTables() {
        this.setState({username: userInfo.name});
        this._get(request.tables).then(rs=>{
            if (rs.errCode == 0) {
                this.setState({tables: rs.data, bfTables: rs.data})
            }
            console.log(rs, '桌子');
        });
    }

    _setType(type) {
        let t = [];
        if (type == 1) {
            if(this.state.now==0) {
                t = this.state.bfTables;
            }else{
                for(let v of this.state.bfTables) {
                    if(v.area_id == this.state.now) {
                        t.push(v);
                    }
                }
            }
        } else {
            for (let v of this.state.bfTables) {
                if(this.state.now==0){
                    if (type == 2 && v.order_id == 0) {
                        t.push(v);
                    } else if (type == 3 && v.order_id > 0 && v.order.pay_status == 0) {
                        t.push(v)
                    } else if (type == 4 && v.order_id > 0 && v.order.pay_status == 1) {
                        t.push(v)
                    }
                }else{
                    if (this.state.zt5 == 2 && v.order_id == 0 && v.area_id == this.state.now) {
                        t.push(v);
                    } else if (this.state.zt5 == 3 && v.order_id > 0 && v.order.pay_status == 0 && v.area_id == this.state.now) {
                        t.push(v)
                    } else if (this.state.zt5 == 4 && v.order_id > 0 && v.order.pay_status == 1 && v.area_id == this.state.now) {
                        t.push(v)
                    }
                }
            }
        }
        this.setState({zt5: type, tables: t});
    }

    _change(item) {
        let t = [];
        if (this.state.zt5 == 1) {
            for(let v of this.state.bfTables) {
                if(v.area_id == item.id) {
                    t.push(v);
                }
            }
        } else {
            for (let v of this.state.bfTables) {
                if (this.state.zt5 == 2 && v.order_id == 0 && v.area_id == item.id) {
                    t.push(v);
                } else if (this.state.zt5 == 3 && v.order_id > 0 && v.order.pay_status == 0 && v.area_id == item.id) {
                    t.push(v)
                } else if (this.state.zt5 == 4 && v.order_id > 0 && v.order.pay_status == 1 && v.area_id == item.id) {
                    t.push(v)
                }
            }
        }
        this.setState({tables: t, now: item.id});
    }

    _search(e) {
        let t = [];
        for(let v of this.state.bfTables) {
            if(v.name.includes(e)) {
                t.push(v);
            }
        }
        this.setState({tables: t, now: 0, zt5: 1});
    }

    _init() {
        return (
            <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 110}}>
                <Top com={
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 1}}>
                        <View style={{
                            height: GAO,
                            width: 320,
                            borderRadius: 5,
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: Color.tableIndex.photoBg
                        }}>
                            <Text style={{
                                height: GAO,
                                width: 80,
                                backgroundColor: this.state.zt5 == 1 ? Color.tableIndex.photoBg : null,
                                textAlign: 'center',
                                lineHeight: GAO,
                                color: this.state.zt5 == 1 ? 'white' : 'black'
                            }} onPress={() => this._setType(1)}>全部</Text>
                            <Text style={{
                                height: GAO,
                                width: 80,
                                textAlign: 'center',
                                lineHeight: GAO,
                                backgroundColor: this.state.zt5 == 2 ? Color.tableIndex.photoBg : null,
                                borderRightWidth: 1,
                                borderColor: Color.tableIndex.photoBg,
                                color: this.state.zt5 == 2 ? 'white' : 'black'
                            }} onPress={() => this._setType(2)}>空台</Text>
                            <Text style={{
                                height: GAO,
                                width: 80,
                                textAlign: 'center',
                                lineHeight: GAO,
                                borderRightWidth: 1,
                                color: this.state.zt5 == 3 ? 'white' : 'black',
                                borderColor: Color.tableIndex.photoBg,
                                backgroundColor: this.state.zt5 == 3 ? Color.tableIndex.photoBg : null
                            }} onPress={() => this._setType(3)}>就餐</Text>
                            <Text style={{
                                height: GAO,
                                width: 80,
                                textAlign: 'center',
                                lineHeight: GAO,
                                borderRightWidth: 1,
                                color: this.state.zt5 == 4 ? 'white' : 'black',
                                borderColor: Color.tableIndex.photoBg,
                                backgroundColor: this.state.zt5 == 4 ? Color.tableIndex.photoBg : null
                            }} onPress={() => this._setType(4)}>脏台</Text>
                        </View>
                        {/*<View style={{height: GAO, width: 160, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>
                            <Text style={{height: GAO, width: 80, backgroundColor: Color.tableIndex.photoBg,
                                textAlign:'center', lineHeight: GAO, color: Color.tableIndex.font}} onPress={()=>{this.setState({zt4:true})}}>桌号↑</Text>
                            <Text style={{height: GAO, width: 80, textAlign:'center', lineHeight: GAO, borderRightWidth: 1, borderColor: Color.tableIndex.photoBg}}>时间↓</Text>
                        </View>
                        <Switch/>*/}
                        <Item rounded style={{width: 200, height: GAO}}>
                            <Icon name={'search'} type={'EvilIcons'}/>
                            <Input placeholder='桌号' onChangeText={e=>this._search(e)}/>
                        </Item>
                    </View>
                }/>
                {/*<Top com={
                    <View style={{flex:1,borderBottomWidth:2,borderColor:'#8dc23c'}}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Text style={{color:'#fa7159',fontSize:14,paddingLeft:20,paddingRight:20}}>今日</Text>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                                <Text style={{fontSize:14}}>营业额 98.79</Text>
                                <Text style={{fontSize:14}}>已结金额 98.79</Text>
                                <Text style={{fontSize:14}}>已结桌数 3</Text>
                                <Text style={{fontSize:14}}>未结金额 1</Text>
                                <Text style={{fontSize:14}}>未结桌数 </Text>
                                <Text style={{fontSize:14}}>开台数 4</Text>
                                <Text style={{fontSize:14}}>桌单价 24.47</Text>
                                <Text style={{fontSize:14}}>就餐人数 4</Text>
                                <Text style={{fontSize:14}}>客单价： 24.47</Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Text style={{color:'#fa7159',fontSize:14,paddingLeft:20,paddingRight:20}}>今日</Text>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                                <Text style={{fontSize:14}}>营业额 98.79</Text>
                                <Text style={{fontSize:14}}>已结金额 98.79</Text>
                                <Text style={{fontSize:14}}>已结桌数 3</Text>
                                <Text style={{fontSize:14}}>未结金额 1</Text>
                                <Text style={{fontSize:14}}>未结桌数 </Text>
                                <Text style={{fontSize:14}}>开台数 4</Text>
                                <Text style={{fontSize:14}}>桌单价 24.47</Text>
                                <Text style={{fontSize:14}}>就餐人数 4</Text>
                                <Text style={{fontSize:14}}>客单价： 24.47</Text>
                            </View>
                        </View>
                    </View> }/>
                <Top com={
                    <View style={{flex:1,justifyContent:'center'}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <Text>筛选</Text>
                            <Icon name='chevron-down' type='Feather'></Icon>
                        </View>
                    </View>
                }/>*/}

                <View style={{flex: 10, flexDirection:'row', flexWrap: 'wrap', justifyContent:'center'}}>
                    {this.state.tables.map((v, k)=>this._item(v))}
                    {/*<FlatList data={this.state.tables}
                              renderItem={({item}) => this._item(item)} numColumns={8}
                              keyExtractor={({v, index}) => index} extraData={this.state}/>*/}
                </View>

                {/*换桌*/}
                <Modal animationType={'fade'} visible={this.state.zt} onRequestClose={() => this.setState({zt: false})}
                       transparent={true}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{backgroundColor: '#1a1a1a', borderRadius: 8, paddingTop: 20, paddingBottom: 20}}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: 20,
                                paddingRight: 20
                            }}>
                                <Text style={{color: '#fff'}}>原桌号：</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    alignItems: 'center',
                                    borderRadius: 5
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        borderRightWidth: 1,
                                        borderColor: '#fff',
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>B03</Text>
                                    <View style={{marginLeft: 5, marginRight: 5}}>
                                        <Icon name='triangle-up' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                        <Icon name='triangle-down' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                    </View>
                                </View>
                                <View style={{
                                    marginLeft: 15,
                                    marginRight: 15,
                                    height: 1,
                                    width: 50,
                                    backgroundColor: '#fff'
                                }}></View>
                                <Text style={{color: '#fff'}}>换桌：</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    alignItems: 'center',
                                    borderRadius: 5
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        borderRightWidth: 1,
                                        borderColor: '#fff',
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>B03</Text>
                                    <View style={{marginLeft: 5, marginRight: 5}}>
                                        <Icon name='triangle-up' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                        <Icon name='triangle-down' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                    </View>
                                </View>
                            </View>

                            <View style={{
                                height: 50,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{color: '#fff'}}>原桌号B03</Text>
                                <Text style={{paddingLeft: 20, paddingRight: 20, color: '#fff'}}>已换至</Text>
                                <Text style={{color: '#fff'}}>B02</Text>
                            </View>

                            <View style={{justifyContent: 'center', alignItems: 'center', height: 60}}>
                                <View>
                                    <Button style={{
                                        height: 40,
                                        width: 120,
                                        backgroundColor: '#8dc23c',
                                        borderRadius: 40,
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{color: '#fff'}}>确定</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/*询问*/}
                <Modal animationType={'fade'} visible={this.state.zt1}
                       onRequestClose={() => this.setState({zt1: false})} transparent={true}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            borderRadius: 20,
                            paddingTop: 40,
                            paddingBottom: 40,
                            paddingLeft: 40,
                            paddingRight: 40
                        }}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{marginRight: 90}}>
                                    <Button style={{
                                        backgroundColor: Color.tableIndex.photoBg,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 80,
                                        height: 80,
                                        borderRadius: 20
                                    }}>
                                        <Icon name='format-horizontal-align-center'
                                              type='MaterialCommunityIcons'></Icon>
                                        <Text style={{fontSize: 12}}>拼台</Text>
                                    </Button>
                                </View>
                                <View>
                                    <Button style={{
                                        backgroundColor: Color.tableIndex.photoBg,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 80,
                                        height: 80,
                                        borderRadius: 20
                                    }}>
                                        <Icon name='repeat' type='Feather'></Icon>
                                        <Text style={{fontSize: 12}}>换桌</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <View>
                                    <Button style={{
                                        backgroundColor: Color.tableIndex.photoBg,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 100,
                                        borderRadius: 20
                                    }}>
                                        <Icon name='file-text' type='Feather' style={{fontSize: 32}}></Icon>
                                        <Text>打印结账单</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <View style={{marginRight: 90}}>
                                    <Button style={{
                                        backgroundColor: Color.tableIndex.photoBg,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 80,
                                        height: 80,
                                        borderRadius: 20
                                    }}>
                                        <Icon name='coin' type='MaterialCommunityIcons'></Icon>
                                        <Text style={{fontSize: 12}}>合并结账</Text>
                                    </Button>
                                </View>
                                <View>
                                    <Button style={{
                                        backgroundColor: Color.tableIndex.photoBg,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 80,
                                        height: 80,
                                        borderRadius: 20
                                    }}>
                                        <Icon name='list' type='Feather'></Icon>
                                        <Text style={{fontSize: 12}}>打印菜单</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/*合并结账*/}
                <Modal animationType={'fade'} visible={this.state.zt2}
                       onRequestClose={() => this.setState({zt2: false})} transparent={true}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{backgroundColor: '#1a1a1a', borderRadius: 8, paddingTop: 20, paddingBottom: 20}}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: 20,
                                paddingRight: 20
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    marginRight: 20,
                                    marginLeft: 20
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        borderRightWidth: 1,
                                        borderColor: '#fff',
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>B03</Text>
                                    <View style={{marginLeft: 5, marginRight: 5}}>
                                        <Icon name='triangle-up' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                        <Icon name='triangle-down' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    marginRight: 20,
                                    marginLeft: 20
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        borderRightWidth: 1,
                                        borderColor: '#fff',
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>B03</Text>
                                    <View style={{marginLeft: 5, marginRight: 5}}>
                                        <Icon name='triangle-up' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                        <Icon name='triangle-down' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    marginRight: 20,
                                    marginLeft: 20
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        borderRightWidth: 1,
                                        borderColor: '#fff',
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>B03</Text>
                                    <View style={{marginLeft: 5, marginRight: 5}}>
                                        <Icon name='triangle-up' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                        <Icon name='triangle-down' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                    </View>
                                </View>

                            </View>

                            <View style={{
                                height: 50,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{color: '#fff'}}>进行合并结账</Text>
                            </View>


                            <View style={{justifyContent: 'center', alignItems: 'center', height: 60}}>
                                <View>
                                    <Button style={{
                                        height: 40,
                                        width: 120,
                                        backgroundColor: '#8dc23c',
                                        borderRadius: 40,
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{color: '#fff'}}>确定</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/*拼台*/}
                <Modal animationType={'fade'} visible={this.state.zt3}
                       onRequestClose={() => this.setState({zt3: false})} transparent={true}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{backgroundColor: '#1a1a1a', borderRadius: 8, paddingTop: 20, paddingBottom: 20}}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: 20,
                                paddingRight: 20
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    marginRight: 20,
                                    marginLeft: 20
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        borderRightWidth: 1,
                                        borderColor: '#fff',
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>B03</Text>
                                    <View style={{marginLeft: 5, marginRight: 5}}>
                                        <Icon name='triangle-up' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                        <Icon name='triangle-down' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    marginRight: 20,
                                    marginLeft: 20
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        borderRightWidth: 1,
                                        borderColor: '#fff',
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>B03</Text>
                                    <View style={{marginLeft: 5, marginRight: 5}}>
                                        <Icon name='triangle-up' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                        <Icon name='triangle-down' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    marginRight: 20,
                                    marginLeft: 20
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        borderRightWidth: 1,
                                        borderColor: '#fff',
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>B03</Text>
                                    <View style={{marginLeft: 5, marginRight: 5}}>
                                        <Icon name='triangle-up' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                        <Icon name='triangle-down' type={'Entypo'}
                                              style={{color: '#fff', fontSize: 16}}></Icon>
                                    </View>
                                </View>

                            </View>

                            <View style={{
                                height: 50,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{color: '#fff'}}>进行拼台</Text>
                            </View>


                            <View style={{justifyContent: 'center', alignItems: 'center', height: 60}}>
                                <View>
                                    <Button style={{
                                        height: 40,
                                        width: 120,
                                        backgroundColor: '#8dc23c',
                                        borderRadius: 40,
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{color: '#fff'}}>确定</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/*开台选择人数*/}
                <Modal animationType={'fade'} visible={this.state.zt4}
                       onRequestClose={() => this.setState({zt4: false})} transparent={true}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{
                            backgroundColor: '#1a1a1a',
                            borderRadius: 8,
                            paddingTop: 20,
                            paddingBottom: 20,
                            paddingLeft: 50,
                            paddingRight: 50
                        }}>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: '#fff'}}>请选择就餐人数：</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    alignItems: 'center',
                                    borderRadius: 5}}>
                                    <Item style={{width: 100, height:40,borderRadius:5}}>
                                        <Input placeholder='桌号' onChangeText={e=>this.setState({num: e})}
                                               style={{color: 'white'}} keyboardType={'numeric'}/>
                                    </Item>
                                </View>
                                <Text style={{color: '#fff', paddingLeft: 10}}>人</Text>
                            </View>

                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                                <Text style={{color: '#fff'}}>请选择服务员：</Text>
                                <View style={{
                                    width: 130,
                                    height: 40,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Picker
                                        style={{height: 40, color: '#ffffff'}}
                                        selectedValue={this.state.selected}
                                        onValueChange={() => {
                                            this.setState({selected: this.state.selected});
                                        }}
                                    >
                                        <Picker.Item label="周长城" value="key0"/>
                                        <Picker.Item label="周长城" value="key1"/>
                                        <Picker.Item label="周长城" value="key2"/>
                                        <Picker.Item label="周长城" value="key3"/>
                                        <Picker.Item label="周长城" value="key4"/>
                                    </Picker>
                                    <Icon name='md-arrow-dropdown' type='Ionicons'
                                          style={{color: '#fff', marginRight: 10, fontSize: 20}}></Icon>
                                </View>
                            </View>

                            <View style={{justifyContent: 'center', alignItems: 'center', height: 60}}>
                                <View>
                                    <Button style={{
                                        height: 40,
                                        width: 120,
                                        backgroundColor: '#8dc23c',
                                        borderRadius: 40,
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{color: '#fff'}}>开台</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>

                    </View>
                </Modal>

            </View>

        );
    }

    _item(item) {
        return (
            <TouchableOpacity onPress={()=>this._event(item)}>
                <View style={{width: 100, height: 100, backgroundColor: 'white', padding: 5, margin: 5}}>
                    <View style={{flex: 1}}>
                        <Text>{item.name}</Text>
                    </View>
                    {item.order_id>0?<Text>{item.people_number}人</Text>:null}
                    {item.order_id > 0 ? <Text style={{fontSize: 13}}>&yen;{item.order.original_amount}</Text> : null}
                    {item.order_id>0?<ImageBackground style={{width: 30, height: 30, position: 'absolute', right: 0, bottom: 0}} source={require('../bg/Coder_03.png')}/>:null}
                </View>
            </TouchableOpacity>
        )
    }

    _event(item) {
        if(item.order_id>0) {
            //其他操作
        }else{
            //开台
            this.setState({zt4: true});
        }
    }
//开台
    _begin() {
        this._post(request.Save, {waiter: this.state.waiterId, table: tableId, source: 'ipad'})
            .then(rs=>{
                console.log(rs, '开台');
            });
        /*fetch(ym+request.Save, {
            method: "POST", body: JSON.stringify({waiter: this.state.waiterId, table: tableId, source: 'ipad'})
        }).then(r=>r.json()).then(rs=>{
            console.log(rs)
        }).catch(e=>{
            console.log(e)
        })*/
    }
    //服务员列表
    _getWaiters() {
        this._get(request.WaiterList)
            .then(rs=>{
                console.log(rs, '服务员列表');
            });
        /*fetch(ym+request.WaiterList+'?token='+userInfo.app_token).then(rs=>{
            console.log(rs)
        }).catch(e=>{
            console.log(e)
        })*/
    }
}