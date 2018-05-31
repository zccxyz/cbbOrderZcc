import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
    Modal
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell,Rows} from 'react-native-table-component';

export default class Purchase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zt: false,
            tableData: [
                {
                    name: '法国进口AOC级红酒，尚娜德西拉干葡萄酒',
                    photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg',
                    stuts: '加入采购'
                },
                {
                    name: '法国进口AOC级红酒，尚娜德西拉干葡萄酒',
                    photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg',
                    stuts: '加入采购'
                },
                {
                    name: '法国进口AOC级红酒，尚娜德西拉干葡萄酒',
                    photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg',
                    stuts: '加入采购'
                },
                {
                    name: '法国进口AOC级红酒，尚娜德西拉干葡萄酒',
                    photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg',
                    stuts: '加入采购'
                },
                {
                    name: '法国进口AOC级红酒，尚娜德西拉干葡萄酒',
                    photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg',
                    stuts: '加入采购'
                }
            ]
        };
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent><Text>{data.stuts}</Text></Button>
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Thumbnail square source={{uri: data.photo}} style={{height:80,width:80,marginLeft:20}}/>
                <Text style={{flex:1,textAlign:'center'}} numberOfLines={1}>{data.name}</Text>
            </View>
        );
        return(
            <View style={{flex:10,backgroundColor:'#ffffff'}}>
                <View style={{height:50,flexDirection:'row',marginLeft:100,marginTop:20,alignItems:'center'}}>
                    <Text>订单编号：</Text>
                    <Text>20180521bs001</Text>
                </View>
                <View style={{height:50,flexDirection:'row',marginLeft:100,alignItems:'center'}}>
                    <Text>采购人：</Text>
                    <Text>李二各</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:100,flex:1}}>
                    <Text style={{marginTop:15}}>商品列表：</Text>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
                            <View style={{width:400,marginRight:10}}>
                                <Text style={{color:'#999'}} numberOfLines={1}>法国进口AOC级红酒，尚娜德西拉干葡萄酒</Text>
                            </View>
                            <View style={{backgroundColor:'#fff',height:24,width:24,borderRadius:24,borderWidth:1,borderColor:'#999',}}>
                                <Text style={{color:'#999',textAlign:'center',lineHeight:22,fontSize:14}}>+</Text>
                            </View>
                            <Text style={{paddingLeft:5,paddingRight:5,color:'#999'}}>1</Text>
                            <View style={{backgroundColor:'#fff',height:24,width:24,borderRadius:24,borderWidth:1,borderColor:'#999',}}>
                                <Text style={{color:'#999',textAlign:'center',lineHeight:22,fontSize:14}}>-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
                            <View style={{width:400,marginRight:10}}>
                                <Text style={{color:'#999'}} numberOfLines={1}>法国进口AOC级红酒，尚娜德西拉干葡萄酒</Text>
                            </View>
                            <View style={{backgroundColor:'#fff',height:24,width:24,borderRadius:24,borderWidth:1,borderColor:'#999',}}>
                                <Text style={{color:'#999',textAlign:'center',lineHeight:22,fontSize:14}}>+</Text>
                            </View>
                            <Text style={{paddingLeft:5,paddingRight:5,color:'#999'}}>1</Text>
                            <View style={{backgroundColor:'#fff',height:24,width:24,borderRadius:24,borderWidth:1,borderColor:'#999',}}>
                                <Text style={{color:'#999',textAlign:'center',lineHeight:22,fontSize:14}}>-</Text>
                            </View>
                        </View>
                        <Button style={{height:36}} bordered light><Text style={{color:'#999'}} onPress={()=>this.setState({zt: true})}>选择商品</Text></Button>
                    </View>
                </View>
                <View style={{height:50,flexDirection:'row',marginLeft:100,alignItems:'center'}}>
                    <Text>采购金额：</Text>
                    <Text>998.47</Text>
                </View>
                <View style={{height:100,flexDirection:'row',alignItems:'center',marginLeft:100}}>
                    <Button style={{width:150,justifyContent:'center',backgroundColor:'#4badd0',marginRight:20}}><Text>保存</Text></Button>
                    <Button style={{width:150,justifyContent:'center',backgroundColor:'#cccccc',marginRight:20}}><Text style={{color:'#666'}}>取消</Text></Button>
                    <Button style={{width:150,justifyContent:'center',backgroundColor:'#4badd0',marginRight:20}}><Text>确认并审核</Text></Button>
                </View>
                <Modal animationType={'slide'} visible={state.zt} onRequestClose={()=>this.setState({zt: false})} transparent={false}>
                    <View style={{flex:1,flexDirection:'row',backgroundColor:'#f2f2f2'}}>
                        <View style={{width:150,backgroundColor:'#cccccc'}}>
                            <View style={{marginTop:100}}>
                                <View>
                                    <Text style={{textAlign:'center'}}>   全部商品</Text>
                                </View>
                                <View>
                                    <View style={{alignItems:'center',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                        <Icon name='triangle-down' type='Entypo' style={{fontSize:14}}></Icon>
                                        <Text style={{textAlign:'center'}}>日常商品</Text>
                                    </View>
                                    <View>
                                        <Text style={{textAlign:'center',fontSize:14,color:'#666'}}>水</Text>
                                        <Text style={{textAlign:'center',fontSize:14,color:'#666'}}>饮料茶</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{alignItems:'center',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                        <Icon name='triangle-down' type='Entypo' style={{fontSize:14}}></Icon>
                                        <Text style={{textAlign:'center'}}>高端商品</Text>
                                    </View>
                                    <View>
                                        <Text style={{textAlign:'center',fontSize:14,color:'#666'}}>雪茄</Text>
                                        <Text style={{textAlign:'center',fontSize:14,color:'#666'}}>定制商品</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{height:100,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text></Text>
                                <Button style={{backgroundColor:'#fff',marginRight:10,marginTop:10,borderColor:'#999'
                                    ,borderRadius:5}} bordered><Text style={{color:'#666'}} onPress={()=>this.setState({zt: false})}>关闭</Text></Button>
                            </View>
                            <View style={{flex:1, marginLeft:20, marginRight:20}}>
                                <Table borderStyle={{borderColor: '#CAD3DF'}}>
                                    {
                                        state.tableData.map((rowData, index) => (
                                            <TableWrapper key={index} style={styles.row}>
                                                <Cell key={index}  style={{flex:4}} data={element2(rowData, index)} textStyle={styles.text}/>
                                                <Cell key={index} style={{flex:1}} data={element(rowData, index)} textStyle={styles.text}/>
                                            </TableWrapper>
                                        ))
                                    }
                                </Table>
                            </View>
                            <View style={{height:60,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text></Text>
                                <View style={{flexDirection:'row'}}>
                                    <Button transparent ><Icon name={'chevron-left'} type={'Entypo'}/></Button>
                                    <Button transparent ><Icon name={'chevron-right'} type={'Entypo'}/></Button>
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
    text: { textAlign:'center' },
    row: { flexDirection: 'row', backgroundColor: 'white' ,height:100 },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});