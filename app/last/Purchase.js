import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Purchase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['日期', '订单内容', '金额', '采购人', '管理'],
            tableData: [
                ['2018-04-13', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n', '998.25', '孙先生', ''],
                ['2018-04-13', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n', '998.25', '孙先生', ''],
                ['2018-04-13', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n', '998.25', '孙先生', ''],
                ['2018-04-13', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n', '998.25', '孙先生', ''],
                ['2018-04-13', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n法国进口AOC级红酒 尚娜德西拉干红葡萄酒  ×1\n', '998.25', '孙先生', ''],
            ]
        };
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent small><Text>开台</Text></Button>
                <Button transparent small><Text>取消</Text></Button>
                <Button transparent small><Text>拒绝</Text></Button>
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent small><Text>查看</Text></Button>
            </View>
        );
        return(
            <View style={{flex:10}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: BgColor, flexDirection: 'row', padding:10}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        {/*<Button style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>新增区域</Text>
                        </Button>*/}
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

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#ECEFF4' },
    text: { margin: 6, textAlign:'center' },
    row: { flexDirection: 'row', backgroundColor: 'white'  },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});