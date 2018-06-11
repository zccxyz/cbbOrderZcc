import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
    AsyncStorage,Modal,ScrollView,TouchableOpacity,Alert,
    ToastAndroid,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button,Form,Picker,Radio,Textarea} from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import MyLeft from "../common/Left";
import ImagePicker from "react-native-image-picker";

export default class GoodsManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //[{name: 'qiwrueeiwqiew', photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}, '日常用品', '13213', '上架', ''],
            tableHead: ['名称', '类别', '数量', '状态', '管理'],
            tableData: [],
            user:null,
            shopOntall:0,
            zt:false,
            goodDetail:{},
            selected:null,
            goodType:[],
            goodSpec:[],
            goodPrinter:[],
            status:false, //上下架状态
            discount:false, //是否打折
            print:false, //是否打印退菜报表



        };
    }

    _get(method, params) {
        return fetch(`${ym+method}?token=${userInfo.app_token}&${params}`).then(r=>r.json())
            .then(rs=>{
                return rs;
            }).catch(e=>{
                return e;
            })

    }

    _post(method, params, url_param = '') {
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
        storage.load({
            key:'user'
        }).then(ret => {

            this.setState({user:ret})

        }).catch(err => {
            console.warn(err);

        })
        this._getGoodType();
        this._getPrinters();
        this._getGoodSpec();
        this._getGoodList();


    }

    _getGoodType(){
        this._get(request2.goodsSpec,'action=list&type=goods_type').then(rs=>{
            console.log(rs);
            if(rs.errCode==0){
                this.setState({goodType:rs.data.list});

            }
        })
    }

    _getGoodSpec(){
        this._get(request2.goodsSpec,'action=list&type=spec').then(rs=>{
            console.log(rs);
            if(rs.errCode==0){
                this.setState({goodSpec:rs.data.list})
            }
        })
    }


    _getGoodList(token){
        this._get(request2.goodsList,'action=list').then(rs=>{
            console.log(rs);
            if(rs.errCode == 0){
                var  tableArr = [];
                var  data = rs.data.list;
                console.log(data);
                for(let i= 0; i<data.length; i++){
                    let arr = [];
                    let obj = {};
                    obj.name = data[i].name;
                    obj.photo = data[i].preview_cover_original;
                    arr.push(obj);

                    for(let item of this.state.goodType){
                        if(data[i].type == item.id){
                            arr.push(item.name);
                            break;
                        }
                    }
                    arr.push(2);
                    if(parseInt(data[i].status) == 1){
                        arr.push('上架');
                    }else{
                        arr.push('下架');
                    }
                    arr.push([data[i].id,data[i].status]);
                    tableArr.push(arr);
                }
                this.setState({
                    tableData:tableArr,
                    shopOntall:data.length
                })


            }else{
                console.log(11111);
            }
        })
    }

    _getPrinters(){
        this._get(request2.goodsPrinter).then(rs=>{
            console.log(rs);
            if(rs.errCode == 0){
                this.setState({goodPrinter:rs.data})
            }
        })
    }


    _goodEdit(data,token){

        this._get(request2.goodsEdit,'id='+data).then(rs=>{
            console.log(rs);
            if(rs.errCode == 0){
                this.setState({
                    goodDetail:rs.data,
                    zt:true
                });

            }
        })
    }

    _addSpec(){
        if(this.state.goodDetail.spec){
            var obj = {};
            obj.spec_id = '';
            obj.price = '';
            obj.real_price = '';
            obj.vip_price = '';
            obj.stock = '';
            obj.status = this.state.goodDetail.status;
            this.state.goodDetail.spec.push(obj);
            this.setState({goodDetail:this.state.goodDetail})
        }
    }

    _delectSpecItem(index){
        this.state.goodDetail.spec[index].status = -1;
        this.setState({goodDetail:this.state.goodDetail});
        console.log(this.state.goodDetail);
    }

    _editGoods(){ //保存商品信息
        console.log(this.state.goodDetail);
        this._post(request2.goodsList,{data:this.state.goodDetail}, '&action=save').then(rs=>{
            console.log(rs);
           if(rs.errCode == 0){
               Alert.alert("提示",rs.data);
               this.setState({zt:false});
               this._getGoodList();

           }
        })
    }

    lowerFrame(data,state){ //上下架
        this._post(request2.goodsList,{id:data,type:state}, '&action=unshelve').then(rs=>{
            console.log(rs);
            if(rs.errCode == 0){
                Alert.alert("提示",state == 1 ? "商品上架成功" : "商品下架成功");
                this._getGoodList();
            }
        })
    }

    getImg() {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                //alert(response.error);
            }
            else if (response.customButton) {
                //console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let formData = new FormData();
                formData.append("file", {uri: response.uri, type: response.type, name: response.fileName});
                fetch(`${URL.upload}?mch_id=${mchId}&shop_id=${shopId}`, {
                    method: 'POST', body: formData
                }).then((response) => response.json())
                    .then(rs => {
                        if (rs.errCode == 0) {
                            this.setState({preview_cover: rs.data.object_url, member_img: rs.data.file});
                        } else {
                            alert(rs.data.message);
                        }
                    });
            }
        });
    }


    render() {

        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent onPress={()=>{this._goodEdit(data[0],userInfo.app_token)}}><Text>查看</Text></Button>
                {data[1] == 1 ? <Button transparent onPress={()=>{this.lowerFrame(data[0],0)}}><Text>下架</Text></Button> : <Button transparent onPress={()=>{this.lowerFrame(data[0],1)}}><Text>上架</Text></Button>}
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row',justifyContent:'space-around'}}>
                {data.photo ? <Thumbnail square source={{uri:data.photo}} style={{width:60,height:60,margin:10}}/>:<View  style={{width:60,height:60,margin:10}}></View>}
                <Text>{data.name}</Text>
            </View>
        );

        return(
            <View style={{flex:10}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: 'white', flexDirection: 'row'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Button style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>导入总部商品</Text>
                        </Button>
                        <Text style={{marginLeft: 10}}>商品总数：{this.state.shopOntall}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Button transparent ><Icon name={'chevron-left'} type={'Entypo'}/></Button>
                        <Button transparent ><Icon name={'chevron-right'} type={'Entypo'}/></Button>
                    </View>
                </View>
                <View style={{flex:10, backgroundColor: 'white'}}>
                    <ScrollView style={{flex:1}}>
                        <Table borderStyle={{borderColor: '#CAD3DF'}}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                            {
                                state.tableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={styles.row}>
                                        {
                                            rowData.map((cellData, cellIndex) => {
                                                if(cellIndex===0) {
                                                    return <Cell key={cellIndex} data={element2(cellData, index)} textStyle={styles.text}/>
                                                }else if(cellIndex===4) {
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
                    </ScrollView>
                </View>

                {/*商品详情*/}
                <Modal animationType={'fade'} visible={this.state.zt} onRequestClose={()=>this.setState({zt: false})} transparent={true}>
                    <ScrollView style={{flex:1,backgroundColor:'#fff',position:'relative'}}>

                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{color:'#666',fontSize:14,marginLeft:30}}>商品名称：</Text>
                            <Item rounded style={{height:40,borderRadius:5,width:300}}>
                                <Input placeholder="请输入商品名称" style={{color:'#666',fontSize:14}} value={this.state.goodDetail.name} onChangeText={e=>{
                                    this.state.goodDetail.name = e;
                                    this.setState({goodDetail:this.state.goodDetail})
                                }}/>
                            </Item>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{color:'#666',fontSize:14,marginLeft:30}}>商品编号：</Text>
                            <Item rounded style={{height:40,borderRadius:5,width:300}}>
                                <Input placeholder="请输入商品编号" style={{color:'#666',fontSize:14}} value={this.state.goodDetail.code} onChangeText={e=>{
                                    this.state.goodDetail.code = e;
                                    this.setState({goodDetail:this.state.goodDetail})
                                }}/>
                            </Item>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{color:'#666',fontSize:14,marginLeft:30}}>商品种类：</Text>
                            <Form style={{height:40,borderWidth:2,borderColor:'#dedede',borderRadius:5}}>
                                <Picker
                                    textStyle={{ color: "#666" }}
                                    itemStyle={{backgroundColor: "#d3d3d3", marginLeft: 0, paddingLeft: 10}}
                                    itemTextStyle={{ color: '#666' }}
                                    style={{ width:300,height:40 }}
                                    selectedValue={this.state.goodDetail.type}
                                    onValueChange={value=>{
                                        this.state.goodDetail.type = value;
                                        this.setState({goodDetail:this.state.goodDetail});
                                    }}
                                >

                                    {
                                        this.state.goodType.map((item,index)=>(<Picker.Item key={index} label={item.name} value={item.id} />))
                                    }


                                </Picker>
                            </Form>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{color:'#666',fontSize:14,marginLeft:30}}>打印档口：</Text>
                            <Form style={{height:40,borderWidth:2,borderColor:'#dedede',borderRadius:5}}>
                                <Picker
                                    textStyle={{ color: "#666" }}
                                    itemStyle={{backgroundColor: "#d3d3d3", marginLeft: 0, paddingLeft: 10}}
                                    itemTextStyle={{ color: '#666' }}
                                    style={{ width:300,height:40 }}
                                    selectedValue={this.state.goodDetail.printer}
                                    onValueChange={value=>{
                                        this.state.goodDetail.printer = value;
                                        this.setState({goodDetail:this.state.goodDetail})
                                    }}>
                                    {
                                        this.state.goodPrinter.map((item,index)=>(<Picker.Item key={index} label={item.name} value={item.id} />))
                                    }
                                </Picker>
                            </Form>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                            <Text style={{color:'#666',fontSize:14,marginLeft:30}}>封面图：</Text>
                            <Text onPress={()=>this.getImg()}><Thumbnail square source={{uri:this.state.goodDetail.preview_cover}} style={{width:40,height:40}} /></Text>
                        </View>

                        <View>
                            <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                                <Text style={{color:'#666',fontSize:14,marginLeft:30}}>规格/价格：</Text>
                                <View><Button bordered light style={{height:40,borderColor:'#dedede',borderRadius:5}} onPress={()=>this._addSpec()}>
                                    <Text style={{color:'#666'}}>添加规格</Text></Button>
                                </View>
                            </View>
                            <View style={{flexWrap:'wrap',marginLeft:60,backgroundColor:'#f5f5f5',borderWidth:1,borderColor:'#ccc',padding:10,marginRight:60,paddingBottom:0}}>
                                {this.state.goodDetail.spec ? this.state.goodDetail.spec.map((specItem,index)=>(

                                    specItem.status == 1 ?  <View key={index} style={{flex:1,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#ccc',padding:10,flexWrap:'wrap',marginBottom:10}}>
                                        <View style={{flexDirection:'row',alignItems:'center',marginRight:15,marginBottom:10}}>
                                            <Text style={{color:'#666',fontSize:14}}>规格：</Text>
                                            <Form style={{height:40,borderWidth:2,borderColor:'#dedede',borderRadius:5}}>
                                                <Picker
                                                    textStyle={{ color: "#666" }}
                                                    itemStyle={{backgroundColor: "#d3d3d3", marginLeft: 0, paddingLeft: 10}}
                                                    itemTextStyle={{ color: '#666' }}
                                                    style={{ width:130,height:40 }}
                                                    selectedValue={specItem.spec_id}
                                                    onValueChange={value=>{
                                                        this.state.goodDetail.spec[index].spec_id = value;
                                                        this.setState({goodDetail:this.state.goodDetail})
                                                    }}
                                                >
                                                    {
                                                        this.state.goodSpec.map((item,index)=>(<Picker.Item key={index} label={item.name} value={item.id} />))
                                                    }
                                                </Picker>
                                            </Form>
                                        </View>
                                        <View style={{flexDirection:'row',alignItems:'center',marginRight:15,marginBottom:10}}>
                                            <Text style={{color:'#666',fontSize:14}}>原价：</Text>
                                            <Item rounded style={{height:40,borderRadius:5,width:80}}>
                                                <Input style={{color:'#666',fontSize:14}} keyboardType="numeric" value={specItem.price} onChangeText={value=>{
                                                    this.state.goodDetail.spec[index].price = value;
                                                    this.setState({goodDetail:this.state.goodDetail})}}/>
                                            </Item>
                                        </View>
                                        <View style={{flexDirection:'row',alignItems:'center',marginRight:15,marginBottom:10}}>
                                            <Text style={{color:'#666',fontSize:14}}>现价：</Text>
                                            <Item rounded style={{height:40,borderRadius:5,width:80}}>
                                                <Input style={{color:'#666',fontSize:14}} keyboardType="numeric" value={specItem.real_price} onChangeText={value=>{
                                                    this.state.goodDetail.spec[index].real_price = value;
                                                    this.setState({goodDetail:this.state.goodDetail})}}/>
                                            </Item>
                                        </View>
                                        <View style={{flexDirection:'row',alignItems:'center',marginRight:15,marginBottom:10}}>
                                            <Text style={{color:'#666',fontSize:14}}>会员价：</Text>
                                            <Item rounded style={{height:40,borderRadius:5,width:80}}>
                                                <Input style={{color:'#666',fontSize:14}} keyboardType="numeric" value={specItem.vip_price} onChangeText={value=>{
                                                    this.state.goodDetail.spec[index].vip_price = value;
                                                    this.setState({goodDetail:this.state.goodDetail})}}/>
                                            </Item>
                                        </View>
                                        <View style={{position:'absolute',right:0,bottom:0}}>
                                            <Button bordered  style={{backgroundColor:'#f5f5f5',borderColor:'#f5f5f5'}} onPress={()=>{this._delectSpecItem(index)}}>
                                                <Icon type="MaterialCommunityIcons" name="delete"></Icon>
                                            </Button>
                                        </View>
                                    </View> : null

                                )) : null}

                            </View>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',height:50,marginTop:10}}>
                            <Text style={{color:'#666',fontSize:14,marginLeft:30}}>状态：</Text>
                            <Radio selected={this.state.goodDetail.status == 0} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                this.state.goodDetail.status = 0;
                                this.setState({goodDetail:this.state.goodDetail});
                            }}/>
                            <Text style={{color:this.state.goodDetail.status == 0 ? '#1c91d1' :'#666',paddingRight:15,fontSize:14}}>下架</Text>
                            <Radio selected={this.state.goodDetail.status == 1 } color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                this.state.goodDetail.status = 1;
                                this.setState({goodDetail:this.state.goodDetail});
                            }} />
                            <Text style={{color:this.state.goodDetail.status == 1 ? '#1c91d1' :'#666',fontSize:14}}>上架</Text>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{color:'#666',fontSize:14,marginLeft:30}}>是否参与优惠：</Text>
                            <Radio selected={this.state.goodDetail.activity == 0} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                this.state.goodDetail.activity = 0;
                                this.setState({goodDetail:this.state.goodDetail})
                            }} />
                            <Text style={{color:this.state.goodDetail.activity == 0 ? '#1c91d1' : '#666',paddingRight:15,fontSize:14}}>不参与</Text>
                            <Radio selected={this.state.goodDetail.activity == 1} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                this.state.goodDetail.activity = 1;
                                this.setState({goodDetail:this.state.goodDetail})
                            }} />
                            <Text style={{color:this.state.goodDetail.activity == 1 ? '#1c91d1' : '#666',fontSize:14}}>参与</Text>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{color:'#666',fontSize:14,marginLeft:30}}>是否参与积分：</Text>
                            <Radio selected={this.state.goodDetail.integral == 0} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                this.state.goodDetail.integral = 0;
                                this.setState({goodDetail:this.state.goodDetail});
                            }}/>
                            <Text style={{color:this.state.goodDetail.integral == 0 ? '#1c91d1' : '#666',paddingRight:15,fontSize:14}}>不参与</Text>
                            <Radio selected={this.state.goodDetail.integral == 1} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                this.state.goodDetail.integral = 1;
                                this.setState({goodDetail:this.state.goodDetail});
                            }} />
                            <Text style={{color:this.state.goodDetail.integral == 1 ? '#1c91d1' : '#666',fontSize:14}}>参与</Text>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{color:'#666',fontSize:14,marginLeft:30}}>是否参与积分抵现：</Text>
                            <Radio selected={this.state.goodDetail.integral_cash == 0} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                this.state.goodDetail.integral_cash = 0;
                                this.setState({goodDetail:this.state.goodDetail});
                            }} />
                            <Text style={{color:this.state.goodDetail.integral_cash == 0 ? '#1c91d1' : '#666',paddingRight:15,fontSize:14}}>不参与</Text>
                            <Radio selected={this.state.goodDetail.integral_cash == 1} color="#666666" selectedColor="#1c91d1" onPress={()=>{
                                this.state.goodDetail.integral_cash = 1;
                                this.setState({goodDetail:this.state.goodDetail});
                            }} />
                            <Text style={{color:this.state.goodDetail.integral_cash == 1 ? '#1c91d1' : '#666',fontSize:14}}>参与</Text>
                        </View>

                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10,height:60}}>
                            <View style={{marginRight:50}}>
                                <Button style={{backgroundColor:'#fa7159',height:35}} onPress={()=>this._editGoods()}>
                                    <Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}}>确定</Text>
                                </Button>
                            </View>
                            <View>
                                <Button style={{backgroundColor:'#b3b3b3',height:35}}>
                                    <Text style={{color:'#fff',paddingLeft:30,paddingRight:30,fontSize:14}} onPress={()=>{this.setState({zt:false})}}>取消</Text>
                                </Button>
                            </View>
                        </View>

                    </ScrollView>
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