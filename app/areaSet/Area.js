import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Area extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['名称', '简介', '空闲/总数', '管理'],
            tableData: [
                ['用餐区', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒', '324/675', ''],
                ['红酒区', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒', '324/675', ''],
                ['烟酒区', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒', '324/675', ''],
                ['茶房', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒', '324/675', ''],
                ['包房', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒', '324/675', ''],
                ['用餐区', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒', '324/675', ''],
                ['用餐区', '法国进口AOC级红酒 尚娜德西拉干红葡萄酒', '324/675', ''],
            ]
        };
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent><Text>查看</Text></Button>
                <Button transparent><Text>删除</Text></Button>
            </View>
        );
        return(
            <View style={{flex:10, padding:5}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: 'white', flexDirection: 'row'}}>
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
                <View style={{flex:10, backgroundColor: 'white'}}>
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