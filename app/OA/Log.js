import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground, ScrollView, Picker,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button, H3 } from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['姓名', '角色', '正常出勤次数', '缺勤次数', '状态'],
            tableData: [
                ['二娃', '董事长', '1', '0', '在职'],
                ['二娃', '董事长', '1', '0', '在职'],
                ['二娃', '董事长', '1', '0', '在职'],
                ['二娃', '董事长', '1', '0', '在职'],
                ['二娃', '董事长', '1', '0', '在职'],
            ],
            type: 1,
        };
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Text>在职</Text>
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent><Text>查看大图</Text></Button>
            </View>
        );
        return(
            <View style={{flex:10}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: 'white', flexDirection: 'row', padding:10}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        {/*<Button style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>新增桌位</Text>
                        </Button>*/}
                        <Text style={{marginLeft: 10}}>提成金额合计：¥2783.86    状态：未到账</Text>
                    </View>
                    {/*<View style={{flexDirection:'row'}}>
                        <Button transparent ><Icon name={'chevron-left'} type={'Entypo'}/></Button>
                        <Button transparent ><Icon name={'chevron-right'} type={'Entypo'}/></Button>
                    </View>*/}
                    <Picker style={{width: 100}} mode={'dropdown'}
                            selectedValue={this.state.type}
                            onValueChange={(lang) => this.setState({type: lang})}>
                        <Picker.Item label="按日" value="1" />
                        <Picker.Item label="按月" value="2" />
                        <Picker.Item label="按年" value="3" />
                    </Picker>
                </View>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: '#16B8BE', flexDirection: 'row', marginBottom:10}}>
                    <Button transparent ><Icon style={{color: 'white'}} name={'chevron-left'} type={'Entypo'}/></Button>
                    <H3 style={{color: 'white'}}>2018-05</H3>
                    <Button transparent ><Icon style={{color: 'white'}} name={'chevron-right'} type={'Entypo'}/></Button>
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