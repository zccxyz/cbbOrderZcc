import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,Modal,Alert,
    ToastAndroid,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button , Radio , Form ,Picker} from 'native-base';
import Color from "../common/Color";
import MyLeft from "../common/Left";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Seat extends MyLeft {
    constructor(props) {
        super(props);
        this.state = {
            // ['001', '餐桌01', '用餐区', '6', '使用中', '', '']
            tableHead: ['编号', '名称', '区域', '可容纳人数', '状态', '桌台二维码', '管理'],
            tableData: [],
            areaData:[],
            tablePageData:[],
            zt:false,
            zt1:false,
            CodeURL:null,
            tableDetail:{}
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
        this._getAreaData();
        // this._getTableData();
    }

    _getAreaData(){
        this._get(request2.shopTable,'&action=list&type=table_area').then(rs=>{
            this._getTableData();
            console.log(rs);
            if(rs.errCode == 0){
                this.setState({areaData:rs.data.list});

            }
        })
    }

    _getTableDetail(id,index){
        console.log(this.state.tablePageData[index]);
        this.setState({tableDetail:this.state.tablePageData[index],zt:true});

    }

    _getTableData(){
        this._get(request2.shopTable,'&action=list&type=shop_table&page=1').then(rs=>{
            console.log(rs);
            if(rs.errCode == 0){
                var emptyArr = [];
                var data = rs.data.list;
                for(var i = 0;i<data.length;i++){
                    var arr = [];
                    arr.push(data[i].name);
                    arr.push(data[i].title);
                    for(let k of this.state.areaData){
                        if(k.id == data[i].area_id){
                            arr.push(k.name);
                            break ;
                        }

                    }
                    arr.push(data[i].people_number);
                    if(data[i].status == 1){
                        arr.push("正常");
                    }else{
                        arr.push("禁用")
                    }
                    arr.push(data[i].code_url);
                    arr.push(data[i].id);
                    emptyArr.push(arr);
                }
                this.setState({tableData:emptyArr,tablePageData:data})

            }
        })
    }

    seekBigPic(data,index){
        console.log(data,index);
        this.setState({CodeURL:data,zt1:true})
    }

    _del(id){
        this._post1(request2.shopTable,{id:id},'&action=del&type=shop_table').then(rs=>{
            console.log(rs);
            if(rs.errCode == 0){
                Alert.alert("提示","删除成功");
                this._getTableData();
            }
        })
    }

    _saveTableInfo(){
        this._post1(request2.shopTable,{data:this.state.tableDetail},'&action=save&type=shop_table').then(rs=>{
            if(rs.errCode == 0){
                Alert.alert("提示","修改成功");
                this.setState({zt:false})
                this._getTableData();
            }
        })
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent onPress={()=>this._getTableDetail(data,index)}><Text>查看</Text></Button>
                <Button transparent onPress={()=>this._del(data)}><Text>删除</Text></Button>
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent onPress={()=>this.seekBigPic(data,index)}><Text>查看大图</Text></Button>
            </View>
        );
        return(
            <View style={{flex:10}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: BgColor, flexDirection: 'row', padding:10}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Button style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>新增桌位</Text>
                        </Button>
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
                                            if(cellIndex===6) {
                                                return <Cell key={cellIndex} data={element(cellData, index)} textStyle={styles.text}/>
                                            }else if(cellIndex===5) {
                                                return <Cell key={cellIndex} data={element2(cellData, index)} textStyle={styles.text}/>
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

                <Modal animationType={'fade'} visible={this.state.zt1} onRequestClose={()=>this.setState({zt1: false})} transparent={true}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <View style={{position:'relative'}}>
                            <Text style={{width:30,height:30,borderRadius:30,borderColor:'#dedede',backgroundColor:'#fff',
                                textAlign:'center',lineHeight:30,position:'absolute',right:-10,top:-10,zIndex:10}} onPress={()=>{this.setState({zt1:false})}}>X</Text>
                            <Thumbnail square source={{uri:this.state.CodeURL}} style={{width:WIDTH/4,height:HEIGHT/2}}></Thumbnail>
                        </View>
                    </View>
                </Modal>

                <Modal animationType={'fade'} visible={this.state.zt} onRequestClose={()=>this.setState({zt: false})} transparent={true}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <View style={{width:WIDTH/2,backgroundColor:'#fff'}}>

                            <View style={{height:50,flexDirection:'row',backgroundColor:'#8DC23C',alignItems:'center'}}>
                                <Text style={{color:'#fff',paddingLeft:30}}>桌号配置</Text>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>桌位名称：</Text>
                                <Item rounded style={{height:40,borderRadius:5,width:300}}>
                                    <Input placeholder="请输入桌位名称" style={{color:'#666',fontSize:14}} value={this.state.tableDetail.title}  onChangeText={e=>{
                                        this.state.tableDetail.title = e;
                                        this.setState({tableDetail:this.state.tableDetail})
                                    }}/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>桌位编号：</Text>
                                <Item rounded style={{height:40,borderRadius:5,width:300}}>
                                    <Input placeholder="请输入桌位编号" style={{color:'#666',fontSize:14}} value={this.state.tableDetail.name}  onChangeText={e=>{
                                        this.state.tableDetail.name = e;
                                        this.setState({tableDetail:this.state.tableDetail})
                                    }}/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>商户区域：</Text>
                                <Form style={{height:40,borderWidth:2,borderColor:'#dedede',borderRadius:5}}>
                                    <Picker
                                        textStyle={{ color: "#666",fontSize:14 }}
                                        itemStyle={{backgroundColor: "#d3d3d3", marginLeft: 0, paddingLeft: 10}}
                                        itemTextStyle={{ color: '#666',fontSize:14 }}
                                        style={{ width:300,height:40 }}
                                        selectedValue={this.state.tableDetail.area_id}
                                        onValueChange={value=>{
                                            this.state.tableDetail.area_id = value;
                                            this.setState({tableDetail:this.state.tableDetail});
                                        }}
                                    >


                                        {this.state.areaData.map((item,index)=>(<Picker.Item key={index}  label={item.name} value={item.id} />))}



                                    </Picker>
                                </Form>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>可供人数：</Text>
                                <Item rounded style={{height:40,borderRadius:5,width:300}}>
                                    <Input style={{color:'#666',fontSize:14}} keyboardType="numeric" value={this.state.tableDetail.people_number}  onChangeText={e=>{
                                        this.state.tableDetail.people_number = e;
                                        this.setState({tableDetail:this.state.tableDetail})
                                    }}/>
                                </Item>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态：</Text>
                                <Radio selected={this.state.tableDetail.status == 0} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                    this.state.tableDetail.status = 0;
                                    this.setState({tableDetail:this.state.tableDetail});
                                }} />
                                <Text style={{color: this.state.tableDetail.status == 0 ? '#1c91d1' : '#666',paddingRight:15,fontSize:14}}>禁用</Text>
                                <Radio selected={this.state.tableDetail.status == 1} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                    this.state.tableDetail.status = 1;
                                    this.setState({tableDetail:this.state.tableDetail});
                                }} />
                                <Text style={{color: this.state.tableDetail.status == 1 ? '#1c91d1' : '#666',fontSize:14}}>正常</Text>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10,height:60}}>
                                <View style={{marginRight:50}}>
                                    <Button style={{backgroundColor:'#fa7159',height:35}} onPress={()=>this._saveTableInfo()}>
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