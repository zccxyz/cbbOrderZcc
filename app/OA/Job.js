import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['姓名', '角色', '入职时间', '电话', '身份证号码', '工资', '状态', '操作'],
            tableData: [
                ['二娃', '董事长', '2018-04-13', '1232223212', '510221221213123', '6000', '在职', ''],
                ['陈小二', '收银员', '2018-04-13', '1232223212', '510221221213123', '6000', '已离职', ''],
                ['二娃', '董事长', '2018-04-13', '1232223212', '510221221213123', '6000', '在职', ''],
                ['二娃', '董事长', '2018-04-13', '1232223212', '510221221213123', '6000', '在职', ''],
            ]
        };
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent><Text>离职</Text></Button>
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text>在职</Text>
            </View>
        );
        return(
            <View style={{flex:10}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: BgColor, flexDirection: 'row', padding:10}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        {/*<Button style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>员工总数：2783  本月离职：2783</Text>
                        </Button>*/}
                        <Text>员工总数：2783  本月离职：2783</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Button transparent ><Icon name={'chevron-left'} type={'Entypo'}/></Button>
                        <Button transparent ><Icon name={'chevron-right'} type={'Entypo'}/></Button>
                    </View>
                </View>
                <View style={{flex:10, backgroundColor: BgColor}}>
                    <ScrollView>
                        <Table borderStyle={{borderColor: '#CAD3DF'}}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                            {
                                state.tableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={[styles.row, {backgroundColor: TableColor}]}>
                                        {
                                            rowData.map((cellData, cellIndex) => {
                                                if(cellIndex===7) {
                                                    return <Cell key={cellIndex} data={element(cellData, index)} textStyle={styles.text}/>
                                                }else if(cellIndex===6) {
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
                    </ScrollView>
                </View>
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