import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, Modal,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
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
            ]
        };
    }

    render() {
        const state = this.state;
        const {navigate} = this.props.navigation;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent onPress={()=>navigate('CharitableInfo')}><Text>查看明细</Text></Button>
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent><Text>查看大图</Text></Button>
            </View>
        );
        return(
            <View style={{flex:10, padding:5}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: 'white', flexDirection: 'row'}}>
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
                <View style={{flex:10, backgroundColor: 'white'}}>
                    <Table borderStyle={{borderColor: '#CAD3DF'}}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                        {
                            state.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={styles.row}>
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