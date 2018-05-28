import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Switch, FlatList, ImageBackground,
} from 'react-native';
import { Text, Thumbnail, Icon, Item, Input, Button } from 'native-base';
import Color from "../common/Color";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class StockManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['名称', '类别', '数量', '状态', '管理'],
            tableData: [
                [{name: 'qiwrueeiwqiew', photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}, '日常用品', '13213', '上架', ''],
                [{name: 'qiwrueeiwqiew', photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}, '日常用品', '13213', '上架', ''],
                [{name: 'qiwrueeiwqiew', photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}, '日常用品', '13213', '上架', ''],
                [{name: 'qiwrueeiwqiew', photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}, '日常用品', '13213', '上架', ''],
                [{name: 'qiwrueeiwqiew', photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}, '日常用品', '13213', '上架', ''],
                [{name: 'qiwrueeiwqiew', photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}, '日常用品', '13213', '上架', ''],
                [{name: 'qiwrueeiwqiew', photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}, '日常用品', '13213', '上架', ''],
                [{name: 'qiwrueeiwqiew', photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}, '日常用品', '13213', '上架', ''],
            ]
        };
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Button transparent><Text>采购</Text></Button>
            </View>
        );
        const element2 = (data, index) => (
            <View style={{justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                <Thumbnail square source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg'}}/>
                <Text>阿克苏的飞机喀什地方</Text>
            </View>
        );
        return(
            <View style={{flex:10, padding:5}}>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center', backgroundColor: 'white', flexDirection: 'row'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Button style={{backgroundColor: Color.tableIndex.photoBg}}>
                            <Text>导入总部商品</Text>
                        </Button>
                        <Text style={{marginLeft: 10}}>库存总数：2789</Text>
                        <Text style={{marginLeft: 10}}>缺货商品：2789</Text>
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