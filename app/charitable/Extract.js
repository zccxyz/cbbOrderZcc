import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ScrollView, Modal,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button, H3 } from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Extract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['月份', '捐款金额', '提成金额', '状态', '月捐款明细'],
            tableData: [
                ['2018-04', '张先生', '53322.34', '已到账', ''],
                ['2018-04', '张先生', '53322.34', '已到账', ''],
                ['2018-04', '张先生', '53322.34', '已到账', ''],
                ['2018-04', '张先生', '53322.34', '已到账', ''],
                ['2018-04', '张先生', '53322.34', '已到账', ''],
                ['2018-04', '张先生', '53322.34', '已到账', ''],
                ['2018-04', '张先生', '53322.34', '未到账', ''],
            ],
            type: 1,
            tableHead2: ['日期', '捐赠人', '捐款金额', '提成金额'],
            tableData2: [
                ['2018-04-13', '张先生', '53322.34', '53322.34'],
                ['2018-04-13', '张先生', '53322.34', '53322.34'],
                ['2018-04-13', '张先生', '53322.34', '53322.34'],
                ['2018-04-13', '张先生', '53322.34', '53322.34'],
                ['2018-04-13', '张先生', '53322.34', '53322.34'],
                ['2018-04-13', '张先生', '53322.34', '53322.34'],
            ]
        };
    }

    render() {
        const state = this.state;
        const {navigate} = this.props.navigation;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent onPress={()=>this.setState({type: 2})}><Text>查看明细</Text></Button>
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent><Text>查看大图</Text></Button>
            </View>
        );
        if(this.state.type===1) {
            return(
                <View style={{flex:10}}>
                    <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: BgColor, flexDirection: 'row', padding:10}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            {/*<Button style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>新增桌位</Text>
                        </Button>*/}
                            <Text style={{marginLeft: 10}}>提成金额合计：¥2783.86    未到账金额：¥283 </Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Button transparent ><Icon name={'chevron-left'} type={'Entypo'}/></Button>
                            <Button transparent ><Icon name={'chevron-right'} type={'Entypo'}/></Button>
                        </View>
                    </View>
                    <View style={{flex:10, backgroundColor: BgColor}}>
                        <Table borderStyle={{borderColor: '#CAD3DF'}}>
                            <Row data={state.tableHead} style={[styles.head, {backgroundColor: TableColor}]} textStyle={styles.text}/>
                            {
                                state.tableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={[styles.row, {backgroundColor: TableColor}]}>
                                        {
                                            rowData.map((cellData, cellIndex) => {
                                                if(cellIndex===4) {
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
                </View>
            )
        }else{
            return(
                <View style={{flex:10}}>
                    <View style={{backgroundColor: BgColor}}>
                        <Button transparent onPress={()=>this.setState({type: 1})}><Icon name={'chevron-left'} type={'Entypo'}/><Text>返回</Text></Button>
                    </View>
                    <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: '#16B8BE', flexDirection: 'row', padding:10}}>
                        <Button transparent ><Icon name={'chevron-left'} type={'Entypo'}/></Button>
                        <H3>2018-05</H3>
                        <Button transparent ><Icon name={'chevron-right'} type={'Entypo'}/></Button>
                    </View>
                    <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: 'white', flexDirection: 'row'}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            {/*<Button style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>新增桌位</Text>
                        </Button>*/}
                            <Text style={{marginLeft: 10}}>提成金额合计：¥2783.86    状态：未到账</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Button transparent ><Icon name={'chevron-left'} type={'Entypo'}/></Button>
                            <Button transparent ><Icon name={'chevron-right'} type={'Entypo'}/></Button>
                        </View>
                    </View>
                    <View style={{flex:10, backgroundColor: BgColor}}>
                        <ScrollView>
                            <Table borderStyle={{borderColor: '#CAD3DF'}}>
                                <Row data={state.tableHead2} style={[styles.head, {backgroundColor: TableColor}]} textStyle={styles.text}/>
                                {
                                    state.tableData2.map((rowData, index) => (
                                        <TableWrapper key={index} style={[styles.row, {backgroundColor: TableColor}]}>
                                            {
                                                rowData.map((cellData, cellIndex) => {
                                                    if(cellIndex===4) {
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
                </View>
            )
        }
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