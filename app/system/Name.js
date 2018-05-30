import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['姓名', '角色', '电话', '上次登录', '状态', '操作 '],
            tableData: [
                ['二娃', '董事长', '1232223212', '2018-04-13', '启用', ''],
                ['二娃', '董事长', '1232223212', '2018-04-13', '启用', ''],
                ['二娃', '董事长', '1232223212', '2018-04-13', '启用', ''],
                ['二娃', '董事长', '1232223212', '2018-04-13', '启用', ''],
                ['二娃', '董事长', '1232223212', '2018-04-13', '启用', ''],
                ['二娃', '董事长', '1232223212', '2018-04-13', '启用', ''],
            ]
        };
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent><Text>查看</Text></Button>
                <Button transparent><Text>冻结</Text></Button>
                <Button transparent><Text>删除</Text></Button>
            </View>
        );
        const element2 = (data, index) => (
            data.map((v, k)=> <Text>{v}</Text>)
        );
        return(
            <View style={{flex:10}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: BgColor, flexDirection: 'row', padding:10}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Button style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>新增账号</Text>
                        </Button>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Button transparent ><Icon name={'chevron-left'} type={'Entypo'}/></Button>
                        <Button transparent ><Icon name={'chevron-right'} type={'Entypo'}/></Button>
                    </View>
                </View>
                <View style={{flex:10, backgroundColor: BgColor}}>
                    <ScrollView>
                        <Table borderStyle={{borderColor: '#CAD3DF'}}>
                            <Row data={state.tableHead} style={[styles.head, {backgroundColor: TableColor}]} textStyle={styles.text}/>
                            {
                                state.tableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={[styles.row, {backgroundColor: TableColor}]}>
                                        {
                                            rowData.map((cellData, cellIndex) => {
                                                if(cellIndex===5) {
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

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#ECEFF4' },
    text: { margin: 6, textAlign:'center' },
    row: { flexDirection: 'row', backgroundColor: 'white'  },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});