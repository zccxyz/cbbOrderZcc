import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input ,Form,Picker,Button} from 'native-base';
import MyPicker from 'react-native-picker';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Bottom from "../common/Bottom";

export default class LossOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tables: [
                {order: '071',table:'5', ordertype:'全部',price:'58',person:6,pay:'微信',Card:'122456',payState:'已支付',shopTime:'2018-5-29 14:20:30',staff:'周长城',orderState:'已支付'},
            ],
            tableHead:["结账编号","桌号/牌号","订单类型","消费金额","就餐人数","付款方式","会员卡号","支付状态","消费时间","收银人员","订单状态"],
            selected: "key1",
            type:1

        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    _time() {
        let years = [],
            months = [],
            days = [],
            hours = [],
            minutes = [];

        for(let i=1;i<51;i++){
            years.push(i+1980);
        }
        for(let i=1;i<25;i++){
            months.push(i);
            hours.push(i);
        }
        for(let i=1;i<32;i++){
            days.push(i);
        }
        for(let i=1;i<61;i++){
            minutes.push(i);
        }
        let pickerData = [years, months, days, hours, minutes];
        let date = new Date();
        let selectedValue = [
            date.getFullYear(),
            date.getMonth()+1,
            date.getDate(),
            date.getHours(),
            date.getMinutes()
        ];
        MyPicker.init({
            pickerData,
            selectedValue,
            pickerTitleText: '选择时间',
            pickerConfirmBtnText:'确定',
            pickerCancelBtnText:'取消',
            wheelFlex: [2, 1, 1, 2, 1, 1],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                let targetValue = [...pickedValue];
                if(parseInt(targetValue[1]) === 2){
                    if(targetValue[0]%4 === 0 && targetValue[2] > 29){
                        targetValue[2] = 29;
                    }else if(targetValue[0]%4 !== 0 && targetValue[2] > 28){
                        targetValue[2] = 28;
                    }
                }
                else if(targetValue[1] in {4:1, 6:1, 9:1, 11:1} && targetValue[2] > 30){
                    targetValue[2] = 30;

                }
                if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                    targetValue.map((v, k) => {
                        if(k !== 3){
                            targetValue[k] = parseInt(v);
                        }
                    });
                    MyPicker.select(targetValue);
                    pickedValue = targetValue;
                }
            }
        });
        MyPicker.show();
    }

    render() {
        const state = this.state;
        return (
            <View style={{flex: 1, justifyContent: 'space-between',flexDirection: 'row'}}>

                <View style={{width: WIDTH*14/15, height: HEIGHT-20}}>
                    {/*<View style={{height:60,backgroundColor:Color.tableIndex.topBg,justifyContent:'center',alignItems:'center'}}>
                            <View style={{height: 50, width: 750, borderRadius: 5, flexDirection: 'row', borderWidth: 1,borderColor: Color.tableIndex.photoBg}}>

                                <Text onPress={()=>this.setState({type: 1})} style={{height: 50, width: 150, backgroundColor: state.type===1?Color.tableIndex.photoBg:null,
                                    textAlign:'center', lineHeight: 50,borderRightWidth: 1,borderRightColor:Color.tableIndex.photoBg, color: state.type===1?Color.tableIndex.font:'black', fontSize: 15}}>开始下单</Text>
                                <Text style={{height: 50, width: 150, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===2?Color.tableIndex.font:'black',
                                    borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===2?Color.tableIndex.photoBg:null, fontSize: 15}}
                                      onPress={()=>this.setState({type: 2})}>门店采购单</Text>
                                <Text style={{height: 50, width: 150, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===3?Color.tableIndex.font:'black',
                                    borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===3?Color.tableIndex.photoBg:null, fontSize: 15}}
                                      onPress={()=>this.setState({type: 3})}>异地消费订单</Text>
                                <Text style={{height: 50, width: 150, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===4?Color.tableIndex.font:'black',
                                    borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===4?Color.tableIndex.photoBg:null, fontSize: 15}}
                                      onPress={()=>this.setState({type: 4})}>门店消费订单</Text>
                                <Text style={{height: 50, width: 150, textAlign:'center', lineHeight: 50, borderRightWidth: 1,color:state.type===5?Color.tableIndex.font:'black',
                                    borderColor: Color.tableIndex.photoBg, backgroundColor: state.type===5?Color.tableIndex.photoBg:null, fontSize: 15}}
                                      onPress={()=>this.setState({type: 5})}>门店报损订单</Text>
                        </View>
                    </View>*/}
                    <View style={{height:120, backgroundColor: Color.tableIndex.topBg, flexDirection: 'row', justifyContent:'space-around',flexWrap:'wrap', alignItems: 'center', elevation: 2}}>
                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{fontSize:14}}>桌号：</Text>
                            <Item regular style={{height:35,width:80,borderRadius:5}}>
                                <Input placeholder='输入桌号' style={{fontSize:14}}/>
                            </Item>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{fontSize:14}}>牌号：</Text>
                            <Item regular style={{height:35,width:80,borderRadius:5}}>
                                <Input placeholder='输入牌号' style={{fontSize:14}}/>
                            </Item>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{fontSize:14}}>结账编号：</Text>
                            <Item regular style={{height:35,width:80,borderRadius:5}}>
                                <Input placeholder='输入编号' style={{fontSize:14}}/>
                            </Item>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{fontSize:14}}>收银人员：</Text>
                            <Item regular style={{height:35,width:80,borderRadius:5}}>
                                <Input placeholder='名称/编号' style={{fontSize:14}}/>
                            </Item>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{fontSize:14}}>会员：</Text>
                            <Item regular style={{height:35,width:120,borderRadius:5}}>
                                <Input placeholder='名称/卡号/电话' style={{fontSize:14}}/>
                            </Item>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{fontSize:14}}>订单类型：</Text>
                            <Form style={{height:35,width:100,borderWidth:1,borderColor:'#dedede',borderRadius:5}}>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select your SIM"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{height:30,width:100}}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="全部" value="key0" />
                                    <Picker.Item label="全部" value="key1" />
                                    <Picker.Item label="全部" value="key2" />
                                    <Picker.Item label="全部" value="key3" />
                                    <Picker.Item label="全部" value="key4" />
                                </Picker>
                            </Form>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{fontSize:14}}>付款方式：</Text>
                            <Form style={{height:35,width:100,borderWidth:1,borderColor:'#dedede',borderRadius:5}}>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select your SIM"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{height:30,width:100}}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="全部" value="key0" />
                                    <Picker.Item label="全部" value="key1" />
                                    <Picker.Item label="全部" value="key2" />
                                    <Picker.Item label="全部" value="key3" />
                                    <Picker.Item label="全部" value="key4" />
                                </Picker>
                            </Form>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{fontSize:14}}>订单状态：</Text>
                            <Form style={{height:35,width:100,borderWidth:1,borderColor:'#dedede',borderRadius:5}}>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select your SIM"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{height:35,width:100}}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="全部" value="key0" />
                                    <Picker.Item label="全部" value="key1" />
                                    <Picker.Item label="全部" value="key2" />
                                    <Picker.Item label="全部" value="key3" />
                                    <Picker.Item label="全部" value="key4" />
                                </Picker>
                            </Form>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{fontSize:14}}>消费金额：</Text>
                            <Item regular style={{height:35,width:80,borderRadius:5}}>
                                <Input placeholder='起始金额' style={{fontSize:14}}/>
                            </Item>
                            <Text style={{color:'#dedede',marginLeft:5,marginRight:5}}>—</Text>
                            <Item regular style={{height:35,width:80,borderRadius:5}}>
                                <Input placeholder='上限金额' style={{fontSize:14}}/>
                            </Item>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{fontSize:14}}>消费时间：</Text>
                            <View>
                                <Button iconRight light bordered style={{height:35,borderRadius:5}} onPress={()=>this._time()}>
                                    <Text style={{fontSize:14,color:'#666'}}>起始时间</Text>
                                    <Icon style={{color:'#666'}} name='date-range' type='MaterialIcons' />
                                </Button>
                            </View>
                            <Text style={{color:'#dedede',marginLeft:5,marginRight:5}}>—</Text>
                            <View>
                                <Button iconRight light bordered style={{height:35,borderRadius:5}} onPress={()=>this._time()}>
                                    <Text style={{fontSize:14,color:'#666'}}>结束时间</Text>
                                    <Icon style={{color:'#666'}} name='date-range' type='MaterialIcons' />
                                </Button>
                            </View>

                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <View>
                                <Button style={{width:100,height:35,backgroundColor:'#8dc23c',alignItems:'center',justifyContent:'center'}}>
                                    <Text>搜索</Text>
                                </Button>
                            </View>
                        </View>
                    </View>

                    <View style={{flex: 10,flexDirection:'column', backgroundColor: TableColor}}>
                        <View style={{height:40}}>
                            <FlatList data={this.state.tableHead} columnWrapperStyle={{height:40}}
                                      renderItem={({item})=>this._item(item)} numColumns={10} keyExtractor={({v, k})=>k}/>
                        </View>

                        <FlatList data={this.state.tables} columnWrapperStyle={{}}
                                  renderItem={({item})=>this._item1(item)} numColumns={10} keyExtractor={({v, k})=>k}/>
                    </View>

                    <Bottom/>
                </View>
            </View>
        );
    }

    _item(item) {
        return(
            <View style={{flex:1,height:40}}>
                <Text style={{lineHeight:40,textAlign:'center'}}>{item}</Text>
            </View>
        )
    }

    _item1(item) {
        return(
            <View style={{flex:1,height:40,flexDirection:'row'}}>
                <View style={{flex:1}}><Text style={{textAlign:'center',lineHeight:40,fontSize:14,color:'#666'}}>{item.order}</Text></View>
                <View style={{flex:1}}><Text style={{textAlign:'center',lineHeight:40,fontSize:14,color:'#666'}}>{item.table}</Text></View>
                <View style={{flex:1}}><Text style={{textAlign:'center',lineHeight:40,fontSize:14,color:'#666'}}>{item.ordertype}</Text></View>
                <View style={{flex:1}}><Text style={{textAlign:'center',lineHeight:40,fontSize:14,color:'#666'}}>{item.price}</Text></View>
                <View style={{flex:1}}><Text style={{textAlign:'center',lineHeight:40,fontSize:14,color:'#666'}}>{item.person}</Text></View>
                <View style={{flex:1}}><Text style={{textAlign:'center',lineHeight:40,fontSize:14,color:'#666'}}>{item.pay}</Text></View>
                <View style={{flex:1}}><Text style={{textAlign:'center',lineHeight:40,fontSize:14,color:'#666'}}>{item.Card}</Text></View>
                <View style={{flex:1}}><Text style={{textAlign:'center',lineHeight:40,fontSize:14,color:'#666'}}>{item.payState}</Text></View>
                <View style={{flex:1}}><Text style={{textAlign:'center',lineHeight:40,fontSize:14,color:'#666'}}>{item.shopTime}</Text></View>
                <View style={{flex:1}}><Text style={{textAlign:'center',lineHeight:40,fontSize:14,color:'#666'}}>{item.staff}</Text></View>
            </View>
        )
    }
}