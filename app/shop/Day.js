import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['日期', '类型', '内容', '管理'],
            tableData: [
                ['2018-04-22', '【公告】', '李克强访日有何“特别”:安倍全程陪同,日媒全程跟踪报道', ''],
                ['2018-04-22', '【通知】', '李克强访日有何“特别”:安倍全程陪同,日媒全程跟踪报道', ''],
                ['2018-04-22', '【提醒】', '李克强访日有何“特别”:安倍全程陪同,日媒全程跟踪报道', ''],
                ['2018-04-22', '【广告】', '李克强访日有何“特别”:安倍全程陪同,日媒全程跟踪报道', ''],
                ['2018-04-22', '【活动】', '李克强访日有何“特别”:安倍全程陪同,日媒全程跟踪报道', ''],
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
        const element2 = (data, index) => (
            data.map((v, k)=> <Text>{v}</Text>)
        );
        return(
            <View style={{flex:10, padding:5}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: 'white', flexDirection: 'row'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Button style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>新增消息</Text>
                        </Button>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Button transparent ><Icon name={'chevron-left'} type={'Entypo'}/></Button>
                        <Button transparent ><Icon name={'chevron-right'} type={'Entypo'}/></Button>
                    </View>
                </View>
                <View style={{flex:10, backgroundColor: 'white'}}>
                    <ScrollView>
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