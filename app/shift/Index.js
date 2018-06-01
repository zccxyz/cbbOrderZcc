import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, Picker, DatePickerAndroid, DeviceEventEmitter,
    ScrollView
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import Bottom from "../common/Bottom";
import Bg from "../common/Bg";
import Top from "../common/Top";

export default class Index extends MyLeft {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            zt: 1,
            id: 1,
            begin: {y: '', m: '', d: ''},
            end: {y: '', m: '', d: ''},
            nowNav: 13,
            tableHead: ['菜品名称', '数量', '金额（元）'],
            tableData: [
                ['鱼香肉丝', 2, 70],
                ['暴炒鱿鱼', 1, 80]
            ],
            page:1
        })
    }
    componentDidMount() {
        /*DeviceEventEmitter.addListener('reload', (data) => {
            this.setState({id: data.id});
            this.props.navigation.navigate(data.tz)
        })*/
    }
    componentWillUnmount() {
        //DeviceEventEmitter.remove();
    }


    _init() {
            return this.state.page == 1 ? (
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                    <Top com={
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <View>
                                <Button iconLeft transparent>
                                    <Icon type={'FontAwesome'} name={'exchange'} style={{color: Color.tableIndex.photoBg}}/>
                                    <Text style={{color: Color.tableIndex.photoBg}} onPress={()=>{this.setState({page:2})}}>切换至菜品报表</Text>
                                </Button>
                            </View>
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                <Text>交班余额（现金）：4600.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                <Text>目前余额（现金）：4800.00</Text>
                            </View>
                            <View>
                                <Button iconLeft style={{backgroundColor: 'red'}} small>
                                    <Icon type={'Entypo'} name={'log-out'}/>
                                    <Text>交班退出</Text>
                                </Button>
                            </View>
                        </View>
                    }/>

                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'rgba(255,255,255,.8)', justifyContent: 'space-between'}}>
                        <View style={{height: 50, backgroundColor: '#CCCCCC',flexDirection: 'row', alignItems:"center", justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                                <Item regular style={{width: 100, backgroundColor: 'white', height: 40}} onPress={()=>this._time(1)}>
                                    <Input disabled value={this.state.begin.y==''?'开始时间':this.state.begin.y+'-'+this.state.begin.m+'-'+this.state.begin.d} />
                                </Item>
                                <Text>--</Text>
                                <Item regular style={{width: 100, backgroundColor: 'white', height: 40, marginRight:10}} onPress={()=>this._time(2)}>
                                    <Input disabled value={this.state.begin.y==''?'结束时间':this.state.end.y+'-'+this.state.end.m+'-'+this.state.end.d} />
                                </Item>
                                <Picker style={{width: 100, backgroundColor: 'white', height: 40, marginRight:10}}
                                        selectedValue={this.state.waiter}
                                        onValueChange={(lang) => this.setState({waiter: lang})}>
                                    <Picker.Item label="zcc" value="1" />
                                    <Picker.Item label="xyz" value="2" />
                                </Picker>
                                <View>
                                    <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40}}><Text>查询</Text></Button>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
                                <View>
                                    <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40, marginRight: 10}}><Text>清机记录</Text></Button>
                                </View>
                                <View>
                                    <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40, marginRight: 10}}><Text>打印报表</Text></Button>
                                </View>
                                <View>
                                    <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40, marginRight: 10}}><Text>确认完成清机</Text></Button>
                                </View>
                            </View>
                        </View>
                        <ScrollView style={{flex:1,marginBottom:40}}>

                            <View>
                                <View style={{height:40,backgroundColor:'#fff'}}>
                                    <Text style={{lineHeight:40,paddingLeft:50,fontWeight:'500'}}>账单详情</Text>
                                </View>
                                <View style={{marginLeft:50,justifyContent:'center'}}>
                                    <View style={{flexDirection:'row',marginTop:10}}>
                                        <Text style={{fontSize:14,marginRight:100}}>结账时间：03-23 16:28</Text>
                                        <Text style={{fontSize:14}}>结账单号：086</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>时间</Text>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>单数</Text>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>人数</Text>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>金额</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>上午</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>1</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>5</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>0.00</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>上午</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>1</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>5</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>0.00</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>上午</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>1</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>5</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>0.00</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>上午</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>1</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>5</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>0.00</Text>
                                    </View>
                                </View>
                                <View style={{height:80,borderTopWidth:2,borderColor:'#888',flexDirection:'row',alignItems:'center',marginLeft:20,marginRight:20}}>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:12}}>合计反结账次数</Text>
                                        <Text style={{fontSize:24}}>5</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:12}}>合计人数</Text>
                                        <Text style={{fontSize:24}}>79</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:12}}>合计反结账次数</Text>
                                        <Text style={{fontSize:24}}>5</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:12}}>人均消费</Text>
                                        <Text style={{fontSize:24}}>58.67</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:12}}>合计桌数</Text>
                                        <Text style={{fontSize:24}}>74</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:12}}>桌均消费</Text>
                                        <Text style={{fontSize:24}}>74</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{height:40,backgroundColor:'#fff'}}>
                                    <Text style={{lineHeight:40,paddingLeft:50,fontWeight:'500'}}>会员数据</Text>
                                </View>
                                <View style={{marginLeft:50,justifyContent:'center'}}>
                                    <View style={{flexDirection:'row',marginTop:10}}>
                                        <Text style={{fontSize:14,marginRight:100}}>增加会员：2</Text>
                                        <Text style={{fontSize:14,marginRight:100}}>会员消费总金额：4.00</Text>
                                        <Text style={{fontSize:14}}>会员储值总金额：100.00</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>付款方式</Text>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>次数</Text>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>金额</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>现金</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>1</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>100.00</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>合计</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>1</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>100.00</Text>
                                    </View>

                                </View>

                            </View>
                            <View>
                                <View style={{height:40,backgroundColor:'#fff'}}>
                                    <Text style={{lineHeight:40,paddingLeft:50,fontWeight:'500'}}>收入情况</Text>
                                </View>
                                <View style={{marginLeft:50,justifyContent:'center'}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>付款方式</Text>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>次数</Text>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>金额</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>饿了么外卖</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>1</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>5</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>抵用券</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>19</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>21</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>合计</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>114</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>4641.72</Text>
                                    </View>
                                </View>
                                <View style={{height:80,borderTopWidth:2,borderColor:'#888',flexDirection:'row',alignItems:'center',marginLeft:20,marginRight:20}}>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:12}}>应收</Text>
                                        <Text style={{fontSize:24}}>4649.22</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:12}}>折扣</Text>
                                        <Text style={{fontSize:24}}>13.52</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:12}}>折扣率</Text>
                                        <Text style={{fontSize:24}}>-8.80</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:12}}>抹零</Text>
                                        <Text style={{fontSize:24}}>-6.72</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{height:40,backgroundColor:'#fff'}}>
                                    <Text style={{lineHeight:40,paddingLeft:50,fontWeight:'500'}}>菜品大类</Text>
                                </View>
                                <View style={{marginLeft:50,justifyContent:'center'}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>类别</Text>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>应收</Text>
                                        <Text style={{fontSize:15,width:120,height:40,lineHeight:40}}>实收</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>酒水</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>1907.00</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>1907.00</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>奶茶</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>1704.05</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>1698.70</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>热菜</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>483.28</Text>
                                        <Text style={{fontSize:14,width:120,height:30,color:'#333'}}>481.00</Text>
                                    </View>

                                </View>

                            </View>

                        </ScrollView>

                    </View>
                </View>
            ) : (
                <View style={{width: WIDTH * 14 / 15, height: HEIGHT - 20}}>
                    <Top com={
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <View>
                                <Button iconLeft transparent>
                                    <Icon type={'FontAwesome'} name={'exchange'} style={{color: Color.tableIndex.photoBg}}/>
                                    <Text style={{color: Color.tableIndex.photoBg}} onPress={()=>{this.setState({page:1})}}>切换至收银报表</Text>
                                </Button>
                            </View>
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                <Text>总数：3</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                <Text>总金额：150.00</Text>
                            </View>
                            <View>
                                <Button iconLeft style={{backgroundColor: 'red'}} small>
                                    <Icon type={'Entypo'} name={'log-out'}/>
                                    <Text>交班退出</Text>
                                </Button>
                            </View>
                        </View>
                    }/>

                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'rgba(255,255,255,.8)', justifyContent: 'space-between'}}>
                        <View style={{height: 50, backgroundColor: '#CCCCCC',flexDirection: 'row', alignItems:"center", justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                                <Picker style={{width: 130, backgroundColor: 'white', height: 40, marginRight:10}}
                                        selectedValue={this.state.waiter}
                                        onValueChange={(lang) => this.setState({waiter: lang})}>
                                    <Picker.Item label="选择分类" value="1" />
                                    <Picker.Item label="xyz" value="2" />
                                </Picker>
                                <Picker style={{width: 130, backgroundColor: 'white', height: 40, marginRight:10}}
                                        selectedValue={this.state.waiter}
                                        onValueChange={(lang) => this.setState({waiter: lang})}>
                                    <Picker.Item label="选择标签" value="1" />
                                    <Picker.Item label="xyz" value="2" />
                                </Picker>
                                <Picker style={{width: 100, backgroundColor: 'white', height: 40, marginRight:10}}
                                        selectedValue={this.state.waiter}
                                        onValueChange={(lang) => this.setState({waiter: lang})}>
                                    <Picker.Item label="zcc" value="1" />
                                    <Picker.Item label="xyz" value="2" />
                                </Picker>
                                <View>
                                    <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40}}><Text>查询</Text></Button>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
                                <View>
                                    <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40, marginRight: 10}}><Text>打印商品报表</Text></Button>
                                </View>
                                <View>
                                    <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40, marginRight: 10}}><Text>打印分类报表</Text></Button>
                                </View>
                                <View>
                                    <Button style={{backgroundColor: Color.tableIndex.photoBg, height: 40, marginRight: 10}}><Text>查看退菜报表</Text></Button>
                                </View>
                            </View>
                        </View>
                        <ScrollView style={{flex:1,marginBottom:40}}>

                            <Table borderStyle={{borderWidth: 2, borderWidth:0}}>
                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                                <Rows data={this.state.tableData} textStyle={styles.Rowstext}/>
                            </Table>
                        </ScrollView>

                    </View>
                </View>
            )


    }

    async _time(type) {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: new Date(2020, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                if(type===1) {
                    this.state.begin.y = year.toString();
                    this.state.begin.m = month.toString();
                    this.state.begin.d = day.toString();
                    this.setState({begin: this.state.begin})
                }else{
                    this.state.end.y = year.toString();
                    this.state.end.m = month.toString();
                    this.state.end.d = day.toString();
                    this.setState({end: this.state.end})
                }
            }
        } catch ({code, message}) {
            alert('无法打开日期选择器')
        }
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#fff' },
    text: { margin: 6 ,color:'#333',fontWeight:'500',textAlign:'center'},
    Rowstext: { margin: 6 ,color:'#666',textAlign:'center'}
});