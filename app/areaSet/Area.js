import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,Modal,Alert,
    ToastAndroid
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button,Radio } from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Area extends MyLeft {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['名称', '简介', '空闲/总数', '管理'],
            tableData: [
            ],
            zt:false,
            areaData:[],
            areaDetail:{}
        };
    }

    _post1(method, params, url_param = '') {
        var url = `${ym+method}?token=${userInfo.app_token}`;
        if(url_param) {
            url += url_param;
        }
        return fetch(url, {
            method: "POST", body: JSON.stringify(params)
        }).then(r=>r.json())
            .then(rs=>{
                return rs;
            }).catch(e=>{
                return e;
            })
    }

    componentDidMount(){
        this._getArea();
    }

    _getArea(){
        this._get(request2.shopTable,'action=list&type=table_area').then(rs=>{
            console.log(rs);
            if(rs.errCode == 0){
                var emptyArr = [];
                for(let i of rs.data.list){
                    var tableAra = [];
                    tableAra.push(i.name);
                    tableAra.push('法国进口AOC级红酒 尚娜德西拉干红葡萄酒');
                    tableAra.push( '324/675');
                    tableAra.push(i.id);
                    emptyArr.push(tableAra);
                }
                this.setState({tableData:emptyArr,areaData:rs.data.list});
                console.log(this.state.tableData);
            }
        })
    }

    _getclassDetail(data,index){

        this.state.areaDetail = this.state.areaData[index];
        this.setState({areaDetail:this.state.areaDetail,zt:true})
        console.log(this.state.areaDetail);
    }

    _areaSet() {
        console.log(this.state.areaDetail);
        this._post1(request2.shopTable, {data: this.state.areaDetail}, '&action=save&type=table_area_edit').then(rs => {
            console.log(rs);
            if(rs.errCode == 0){
                Alert.alert("提示","修改成功");
                this.setState({zt:false})
                this._getArea();
            }
        })
    }

    _del(data,index) {
        var id = this.state.areaData[index].id;
        this._post1(request2.shopTable, {id: id}, '&action=del&type=table_area').then(rs => {
            if(rs.errCode == 0){
                Alert.alert("提示","删除成功");
                this._getArea();
            }
        })
    }




    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent onPress={()=>this. _getclassDetail(data,index)}><Text>查看</Text></Button>
                <Button transparent onPress={()=>this._del(data,index)}><Text>删除</Text></Button>
            </View>
        );
        return(
            <View style={{flex:10}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: BgColor, flexDirection: 'row', padding:10}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Button style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>新增区域</Text>
                        </Button>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Button transparent ><Icon name={'chevron-left'} type={'Entypo'}/></Button>
                        <Button transparent ><Icon name={'chevron-right'} type={'Entypo'}/></Button>
                    </View>
                </View>
                <View style={{flex:10, backgroundColor: BgColor}}>
                    <Table borderStyle={{borderColor: '#CAD3DF'}}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                        {
                            state.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={styles.row}>
                                    {
                                        rowData.map((cellData, cellIndex) => {
                                            if(cellIndex===3) {
                                                return <Cell key={cellIndex} data={element(cellData, index)} textStyle={styles.text}/>
                                            }else{
                                                return <Cell key={cellIndex} data={cellData} textStyle={styles.text}/>
                                            }
                                        })
                                    }
                                </TableWrapper>
                            ))
                        }
                    </Table>
                </View>

                <Modal animationType={'fade'} visible={this.state.zt} onRequestClose={()=>this.setState({zt: false})} transparent={true}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <View style={{width:WIDTH/2,backgroundColor:'#fff'}}>

                            <View style={{height:50,flexDirection:'row',backgroundColor:'#8DC23C',alignItems:'center'}}>
                                <Text style={{color:'#fff',paddingLeft:30}}>区域设置</Text>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>区域名称：</Text>
                                <Item rounded style={{height:40,borderRadius:5,width:300}}>
                                    <Input placeholder="请输入区域名称" style={{color:'#666',fontSize:14}} value={this.state.areaDetail.name}  onChangeText={e=>{
                                        this.state.areaDetail.name = e;
                                        this.setState({areaDetail:this.state.areaDetail})
                                    }}/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>最低消费：</Text>
                                <Item rounded style={{height:40,borderRadius:5,width:300}}>
                                    <Input style={{color:'#666',fontSize:14}} keyboardType="numeric" value={this.state.areaDetail.low_amount}  onChangeText={e=>{
                                        this.state.areaDetail.low_amount = e;
                                        this.setState({areaDetail:this.state.areaDetail})
                                    }}/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态：</Text>
                                <Radio selected={this.state.areaDetail.status == 0} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                    this.state.areaDetail.status = 0;
                                    this.setState({goodDetail:this.state.goodDetail});
                                }} />
                                <Text style={{color: this.state.areaDetail.status == 0 ? '#1c91d1' : '#666',paddingRight:15,fontSize:14}}>禁用</Text>
                                <Radio selected={this.state.areaDetail.status == 1} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                    this.state.areaDetail.status = 1;
                                    this.setState({areaDetail:this.state.areaDetail});
                                }} />
                                <Text style={{color: this.state.areaDetail.status == 1 ? '#1c91d1' : '#666',fontSize:14}}>正常</Text>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10,height:60}}>
                                <View style={{marginRight:50}}>
                                    <Button style={{backgroundColor:'#fa7159',height:35}} onPress={()=>this._areaSet()}>
                                        <Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}}>确定</Text>
                                    </Button>
                                </View>
                                <View>
                                    <Button style={{backgroundColor:'#b3b3b3',height:35}}>
                                        <Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}} onPress={()=>{this.setState({zt:false})}}>取消</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#ECEFF4' },
    text: { margin: 6, textAlign:'center' },
    row: { flexDirection: 'row', backgroundColor: 'white'  },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});