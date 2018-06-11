import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, TouchableOpacity,
    View, Switch, FlatList, ScrollView, ImageBackground, Picker,
    Image,Modal
} from 'react-native';
import {Text, Thumbnail, Icon, Item, Input, Button, Badge, Tab, Tabs, TabHeading,Textarea} from 'native-base';
import Color from "../common/Color";
import Top from "../common/Top";
import Bg from "../common/Bg";
import Left from "../common/Left";


export default class Index extends Left {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            type: 1,
            zt:false,
            goods: [
                {name: '小炒肉', num: 5, price: 10},
                {name: '白菜', num: 6, price: 111},
                {name: '可乐', num: 3, price: 222},
                {name: '凉菜', num: 4, price: 33},
                {name: '豆干', num: 7, price: 3123},
                {name: '黄豆', num: 12, price: 111},
                {name: '黄豆', num: 12, price: 1},
                {name: '黄豆', num: 12, price: 1123},
                {name: '豆干', num: 12, price: 2},
                {name: '豆干', num: 12, price: 33},
                {name: '牛肉', num: 12, price: 223},
            ],
            waiter: 1,
            belong: [
                {name: '套餐', num: 0},
                {name: '蔬菜', num: 2},
                {name: '饮料', num: 3},
                {name: '火锅', num: 0},
                {name: '套饭', num: 0},
            ],
            remarkShow:false,
            waiters: [],
            packages: [],
            types: [],
            zt2: 1,
            zt3: false,
            zt4: true,
            zt5: false,
            zt6: false,
            cart: [],
            nowGoods: null,
            nowSpec: 0,
            total: 0,
            totalPrice: 0,
            allRemark: [], //整单备注
            remark: [], //单个备注
            record: [], //点菜记录
            myRemark: '',
            myRemark2: '',
        });
    }
    componentDidMount() {
        this.setState({waiters: Waiters, waiter: table.order.waiter_id});
        console.log(table, '当前餐台数据');
        console.log(Waiters, '服务员数据');
        this._first();
    }
    _first() {
        this._getRemark(3);
        this._getRemark(2);
        this._detail();
        storage.load({
            key: 'types',
        }).then(rs=>{
            this.setState({types: rs});
            console.log(rs, '商品种类');
        }).catch(e=>{
            this._getType();
        });
        storage.load({
            key: 'goods',
        }).then(rs=>{
            this.setState({goods: rs});
            console.log(rs, '商品');
        }).catch(e=>{
            this._getGoods();
        });
        storage.load({
            key: 'packages',
        }).then(rs=>{
            this.setState({packages: rs});
            console.log(rs, '套餐');
        }).catch(e=>{
            this._getPackage();
        });
    }
    _getType() {
        this._get(request.GoodsType)
            .then(rs=>{
                if(rs.errCode==0) {
                    for(let v of rs.data) {
                        v.num = 0;
                        v.zt = false;
                    }
                    rs.data.unshift({id: -1, name: '套餐', num: 0, zt: true});
                    this.setState({types: rs.data});
                    storage.save({
                        key: 'types',
                        data: rs.data
                    })
                }else{
                    this._error(rs);
                }
                console.log(rs, '商品种类');
            })
    }
    _getGoods() {
        this._get(request.GoodsList)
            .then(rs=>{
                if(rs.errCode==0) {
                    for(let v of rs.data) {
                        v.zt = true; //true显示
                        v.num = 0;
                    }
                    this.setState({goods: rs.data});
                    storage.save({
                        key: 'goods',
                        data: rs.data
                    })
                }else{
                    this._error(rs);
                }
                console.log(rs, '商品列表');
            })
    }
    _getPackage() {
        this._get(request.PackageList)
            .then(rs=>{
                if(rs.errCode==0) {
                    for (let v of rs.data) {
                        v.zt = true;
                        v.num = 0;
                    }
                    this.setState({packages: rs.data});
                    storage.save({
                        key: 'packages',
                        data: rs.data
                    })
                }else{
                    this._error(rs);
                }
                console.log(rs, '套餐列表');
            })
    }
    _search(e) {
        for(let v of this.state.goods) {
            v.zt = false;
            if(v.py.includes(e)) {
                v.zt = true;
            }
        }
        this.setState({goods: this.state.goods, zt2: 2});
    }
    //-----单品----------
    //添加
    _add(v, k, type=1) {
        let food = '';
        if(type==1) {
            food = this.state.goods[k];
        }else{
            food = this.state.goods[this.state.nowGoods];
        }
        if(food.spec.length==1 || type==2) {
            //无规格
            let foodSpec = '';
            if(type==1) {
                foodSpec = food.spec[0];
            }else {
                foodSpec = food.spec[this.state.nowSpec];
            }
            let zt = true;
            for(let v of this.state.cart) {
                if(v.goods_id == food.id && v.spec_id==foodSpec.id) {
                    v.number++;
                    zt = false;
                    break;
                }
            }
            if(zt) {
                let addFoodData = {
                    id: 0,
                    goods_id: food.id,
                    goods_name: food.name,
                    number: 1,
                    price: foodSpec.real_price,
                    order_id: table.order_id,
                    spec_id: foodSpec.id,
                    spec_name: foodSpec.spec_name || '',
                    giving_number: false ? 1 : 0,
                    remark: '',
                    print_status:2,
                    package_number: 0,
                    package_goods: 0,
                    add_number: 1,
                    type_id:food.type,
                    temp_package_sn:0,
                    status:1,
                    retreat_reason:'',
                };
                this.state.cart.unshift(addFoodData);
            }
            if(type==1) {
                this.state.goods[k].num++;
            }else{
                this.state.goods[this.state.nowGoods].num++;
            }
            this.setState({cart: this.state.cart, goods: this.state.goods, zt4: false, nowGoods: null});
        }else{
            this.state.nowGoods = k;
            this.setState({nowGoods: k, zt4: true, nowSpec: 0})
        }
        this._compute();
    }
    //减少
    _del(k, type=1) {
        let p = this.state.cart[k];
        if(type==1) {
            this.state.cart.splice(k, 1);
            for(let v of this.state.goods) {
                if(v.id==p.goods_id) {
                    v.num=0;
                    break;
                }
            }
            this.setState({goods: this.state.goods, cart: this.state.cart});
        }else{
            let arr = [];
            for(let v of this.state.cart) {
                if(v.temp_package_sn!==p.temp_package_sn) {
                    arr.push(v);
                }
            }
            for(let v of this.state.packages) {
                if(v.pk_id==p.spec_id) {
                    v.num=v.num-p.package_number;
                    break;
                }
            }
            this.setState({packages: this.state.packages, cart: arr});
        }
        setTimeout(()=>this._compute(), 100)
    }
    //-----单品end----------

    //-----套餐----------
    _addPackage(k) {
        let data = this.state.packages[k];
        let temp_package_sn=Date.parse( new Date() ).toString();
        temp_package_sn=temp_package_sn.substr(0,10)+userInfo.id;

        let addFoodData = {
            id: 0,
            order_id: table.order_id,
            goods_id: 0,
            goods_name: data.name,
            original_price:data.old_price,
            price: data.price,
            vip_price:data.vip_price,
            spec_id: data.pk_id,
            spec_name: '',
            number: 0,
            add_number: 0,
            giving_number: 0,
            package_number: 1,
            return_number:0,
            remark: '',
            print_stauts:2,
            type_id:0,
            status:1,
            retreat_reason:'',
            zk:0,
            temp_package_sn:temp_package_sn,
            modify_package:1
        };
        this.state.cart.unshift(addFoodData);
        let foods = data.goods_content;
        for(let food of foods) {
            let g = {
                id: 0,
                order_id: table.order_id,
                goods_id: food.goods_id,
                goods_name: food.goods_name,
                price: food.price,
                vip_price:food.vip_price,
                spec_id: food.spec_id,
                spec_name: food.spec_name,
                number: food.num,
                add_number: food.num,
                giving_number: 0,
                package_number: food.num,
                return_number:0,
                remark: '',
                print_stauts:2,
                temp_package_sn:temp_package_sn,
                type_id:food.type,
                status:1,
                retreat_reason:'',
            };
            this.state.cart.unshift(g);
        }
        this.state.packages[k].num++;
        this.setState({cart: this.state.cart, packages: this.state.packages});
        this._compute();
    }
    _compute() {
        let t = 0;
        let p = 0;
        for(let v of this.state.cart) {
            if(v.temp_package_sn==0 && v.goods_id>0) {
                t += v.number;
                p += v.price * v.number;
            }else if(v.temp_package_sn>0 && v.goods_id==0) {
                t += v.package_number;
                p += v.price * v.package_number;
            }
        }
        this.setState({total: t,totalPrice: p});
    }
    //-----套餐end----------
    _jiao(k, type=1) {
        let s = this.state.cart[k];
        if(type==1) {
            if(s.print_status==1) {
                s.print_status = 2;
            }else {
                s.print_status =1;
            }
        }else{
            for(let v of this.state.cart) {
                if(v.temp_package_sn == s.temp_package_sn) {
                    if(v.print_status==1) {
                        v.print_status = 2
                    }else{
                        v.print_status = 1
                    }
                }
            }
        }
        this.setState({cart: this.state.cart});
    }
    _changNum(k, e, type=1) {
        let num = parseInt(e);
        let data = this.state.cart[k];
        if(num>=0) {
            if(type==1) {

            }else{

            }
        }
    }
    //下单
    _order() {
        if(this.state.cart.length==0) {
            alert('请添加商品');return;
        }
        this._post(request.Save, {source: 'ipad', order_id: table.order_id, people_number: userInfo.people_number,
            remark: this.state.myRemark, goods: this.state.cart, waiter: this.state.waiter})
            .then(rs=>{
                if(rs.errCode==0) {
                    this._success('下单成功');
                }else{
                    this._error(rs);
                }
                console.log(rs, '下单');
            });
    }
    //结账
    _jz() {
        this.props.navigation.navigate('settle');
    }
    _init() {
        const {navigate, goBack, state} = this.props.navigation;
        return (
            <View style={{width: WIDTH * 14 / 15, flex: 1}}>
                <Top com={
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex:1}}>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}} small onPress={()=>goBack()}>
                                <Icon name='ios-arrow-dropleft' type={'Ionicons'} />
                                <Text>桌台{table.name}</Text>
                            </Button>
                        </View>
                        <Picker style={{width: 100}} mode={'dropdown'}
                                selectedValue={this.state.waiter}
                                onValueChange={(e) => {this._modifyWaiter(e);this.setState({waiter: e})}}>
                            {this.state.waiters?(
                                this.state.waiters.map((v, k)=>{
                                    return <Picker.Item label={v.name} value={v.id} />
                                })
                            ):null}
                        </Picker>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <Text style={{fontSize:14}}>就餐人数：</Text>
                            <Item style={{width:50}}>
                                <Input style={{fontSize:14, height:GAO}} placeholder='人数' onChangeText={e=>this._modifyNum(e)} defaultValue={table.people_number}/>
                            </Item>
                            <Text style={{fontSize:14}}>人</Text>
                        </View>
                        <Item rounded style={{width: 200, height:GAO}}>
                            <Icon name={'search'} type={'EvilIcons'}/>
                            <Input placeholder='菜品首字母' onChangeText={e=>this._search(e)}/>
                        </Item>
                        <View style={{flexDirection: 'column', alignItems:'center'}}>
                            <Text style={{fontSize:14}}>共{this.state.total}份/&yen;{this.state.totalPrice}</Text>
                            <Text style={{fontSize:14}}>(赠送&yen;42)</Text>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}} small onPress={()=>this._order()}>
                                <Icon name='ios-arrow-dropleft' type={'Ionicons'} />
                                <Text>下单</Text>
                            </Button>
                        </View>
                        <View>
                            <Button iconLeft style={{backgroundColor: Color.tableIndex.photoBg}} small onPress={()=>this._jz()}>
                                <Icon name='ios-arrow-dropleft' type={'Ionicons'} />
                                <Text>结账</Text>
                            </Button>
                        </View>
                    </View>}/>

                {/*中间内容*/}
                <View style={{flexDirection: 'row', flex:10}}>
                    <View style={{flex: 1}}>
                        <FlatList data={this.state.types}
                                  renderItem={({item}) => this._item(item)} numColumns={1}
                                  keyExtractor={({v, k}) => k+'z'} extraData={this.state}/>
                    </View>

                    <View style={{flex: 8, flexDirection:'row',justifyContent:'center', flexWrap: 'wrap'}}>
                        <ScrollView>
                            <View style={{flex: 8, flexDirection:'row',justifyContent:'center', flexWrap: 'wrap'}}>
                                {this.state.zt2==1?this.state.packages.map((v, k)=>this._item3(v, k)):this.state.goods.map((v, k)=>this._item2(v, k))}
                            </View>
                            {/*{this.state.zt2==1?
                            <FlatList data={this.state.packages} columnWrapperStyle={{flexWrap:'wrap', justifyContent: 'center'}}
                                      renderItem={({item}) => this._item2(item)} numColumns={10} extraData={this.state}
                                      keyExtractor={({v, k}) => k+'y'}/>:
                            <FlatList data={this.state.goods} columnWrapperStyle={{flexWrap:'wrap', justifyContent: 'center'}}
                                      renderItem={({item}) => this._item2(item)} numColumns={10} extraData={this.state}
                                      keyExtractor={({v, k}) => k+'y'}/>}*/}
                        </ScrollView>
                    </View>

                    <View style={{flex: 4}}>

                        <Tabs initialPage={0}>
                            <Tab heading={
                                <TabHeading style={{backgroundColor: Color.tableIndex.photoBg,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color: 'white'}}>菜品列表</Text>
                                    <Text style={{borderRadius:24,height:24,width:24,backgroundColor:'red',textAlign:'center',lineHeight:24}}>{this.state.total}</Text>
                                </TabHeading>}>
                                <ScrollView style={{flex:1,position:'relative'}}>
                                    {this.state.cart.map((v, k)=>this._item4(v, k))}
                                    {/*<FlatList data={this.state.cart}
                                              renderItem={({item, index}) => this._item4(item, index)} keyExtractor={({v, k}) => k + 'vv'} extraData={this.state}/>*/}
                                </ScrollView>
                                {/*<ScrollView style={{flex:1,position:'relative'}}>
                                    <View style={{height:50,borderBottomWidth:2,borderColor:'#dedede',flexDirection:'row',alignItems:'center'}}>
                                        <View style={{flex:2}}>
                                            <Text numberOfLines={1} style={{fontSize:12,marginLeft:10,marginRight:10,color:'#666'}}>小红莓优格果杯小红莓优格果杯</Text>
                                        </View>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <Text style={{width:40,height:20,borderWidth:1,borderColor:'#fa7159',color:'#999',textAlign:'center',lineHeight:20,borderRadius:3}}>x 1</Text>
                                            <Text style={{fontSize:12,color:'#999'}}>￥48</Text>
                                        </View>
                                        <View style={{flex:2,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                            <Text style={{width:28,height:28,lineHeight:28,borderRadius:28,marginRight:5,fontSize:14,
                                                borderColor:Color.tableIndex.photoBg,borderWidth:2,textAlign:'center',color:Color.tableIndex.photoBg}}>起</Text>
                                            <Text style={{width:28,height:28,lineHeight:28,borderRadius:28,marginRight:5,fontSize:14,
                                                borderColor:'#fa745d',borderWidth:2,textAlign:'center',color:'#fa745d'}}>备</Text>
                                            <Text style={{width:28,height:28,lineHeight:28,borderRadius:28,marginRight:5,fontSize:14,
                                                borderColor:'#888',borderWidth:2,textAlign:'center',color:'#888'}}>x</Text>
                                        </View>
                                    </View>

                                    <View style={{height:50,backgroundColor:'#333',flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{height:24,backgroundColor:'#333',borderWidth:1,borderColor:'#fff',color:'#fff',
                                            fontSize:12,lineHeight:24,paddingLeft:10,paddingRight:10,marginLeft:10,borderRadius:3}}>赠送</Text>
                                        <Text style={{height:24,backgroundColor:'#333',borderWidth:1,borderColor:'#fff',color:'#fff',
                                            fontSize:12,lineHeight:24,paddingLeft:10,paddingRight:10,marginLeft:10,borderRadius:3}}>x1</Text>
                                        <Text style={{height:24,backgroundColor:'#333',borderWidth:1,borderColor:'#fff',color:'#fff',
                                            fontSize:12,lineHeight:24,paddingLeft:10,paddingRight:10,marginLeft:10,borderRadius:3}}>x2</Text>
                                        <Text style={{height:24,backgroundColor:'#333',borderWidth:1,borderColor:'#fff',color:'#fff',
                                            fontSize:12,lineHeight:24,paddingLeft:10,paddingRight:10,marginLeft:10,borderRadius:3}}>x3</Text>
                                    </View>

                                </ScrollView>*/}
                                {this.state.zt5?(
                                    <View style={{height:200,borderTopWidth:1,borderColor:'#dedede',backgroundColor:'#f2f2f2'}}>
                                        <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap',marginTop:5}}>
                                            <View style={{marginLeft:8,marginRight:8,marginTop:5}}>
                                                <FlatList data={this.state.allRemark} numColumns={3} renderItem={({item}) => (
                                                    <Button light style={{height:30,borderRadius:30,borderWidth:1,paddingLeft:3,paddingRight:3,borderColor:'#'}}
                                                    onPress={()=>this.setState({myRemark: this.state.myRemark+item.content+';'})}>
                                                        <Text style={{fontSize:12,color:'#666'}}>{item.content}</Text>
                                                    </Button>
                                                )} keyExtractor={({v, k}) => k + 'x'} extraData={this.state}/>
                                            </View>
                                        </View>
                                        <Textarea style={{ flex:1,marginTop:5,marginLeft:10,marginRight:10,
                                            marginBottom:5,borderRadius:5,fontSize:12}} bordered placeholder="整单备注"
                                                  onChangeText={e=>this.setState({myRemark: e})} defaultValue={this.state.myRemark}/>
                                        <Button full small onPress={()=>this.setState({zt5: false})}><Text>确定</Text></Button>
                                    </View>
                                ):null}
                                {this.state.zt6?(
                                    <View style={{height:200,borderTopWidth:1,borderColor:'#dedede',backgroundColor:'#f2f2f2'}}>
                                        <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap',marginTop:5}}>
                                            <View style={{marginLeft:8,marginRight:8,marginTop:5}}>
                                                <FlatList data={this.state.remark} numColumns={3} renderItem={({item}) => (
                                                    <Button light style={{height:30,borderRadius:30,borderWidth:1,paddingLeft:3,paddingRight:3,borderColor:'#'}}
                                                            onPress={()=>this.setState({myRemark: this.state.myRemark2+item.content+';'})}>
                                                        <Text style={{fontSize:12,color:'#666'}}>{item.content}</Text>
                                                    </Button>
                                                )} keyExtractor={({v, k}) => k + 'x'} extraData={this.state}/>
                                            </View>
                                        </View>
                                        <Textarea style={{ flex:1,marginTop:5,marginLeft:10, marginRight:10,
                                            marginBottom:5,borderRadius:5,fontSize:12}} bordered placeholder="备注"
                                                  onChangeText={e=>this.setState({myRemark2: e})} defaultValue={this.state.myRemark}/>
                                        <Button full small onPress={()=>this.setState({zt6: false})}><Text>确定</Text></Button>
                                    </View>
                                ):null}
                            </Tab>
                            <Tab heading={
                                <TabHeading style={{backgroundColor: Color.tableIndex.photoBg}}>
                                    <Text style={{color: 'white'}}>操作记录</Text>
                                </TabHeading>
                            }>
                                <ScrollView style={{flex:1}}>
                                    {this.state.record.map((v, k)=>{
                                        return (
                                            <View style={{height:50,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#e6e6e6'}}>
                                                <View style={{flex:2,flexDirection:'row',marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                                                    <View style={{width:28,height:28,borderRadius:28,borderWidth:2,borderColor:'#8dc23c'}}>
                                                        <Text style={{color:'#8dc23c',textAlign:'center',lineHeight:24,fontSize:14}}>{v.type==1?'加':'减'}</Text>
                                                    </View>
                                                    <Text style={{color:'#333333',paddingLeft:5,fontSize:14}} numberOfLines={1}>{v.goods_name}</Text>
                                                </View>
                                                <Text style={{flex:2,textAlign:'center',color:'#888888',paddingLeft:20,fontSize:14}}>
                                                    {v.waiter_id>0?Waiters.map((x, k)=>{
                                                        if(x.id==v.waiter_id) {
                                                            return x.name;
                                                        }
                                                    }):'无'}
                                                </Text>
                                                <Text style={{flex:2,textAlign:'center',color:'#888888',fontSize:14}}>
                                                    {/*3-20 18:50*/}
                                                    {v.create_time}
                                                </Text>
                                            </View>
                                        )
                                    })}
                                </ScrollView>
                            </Tab>
                        </Tabs>


                        <View style={{width:30,height:30,position:'absolute',right:0,top:(HEIGHT - 150) /2}}>
                            <TouchableOpacity onPress={()=>this.setState({zt3: true})}>
                                <Thumbnail style={{width:30,height:30}} source={require('../bg/rightBtn.png')}/>
                            </TouchableOpacity>
                        </View>
                            {/*<ImageBackground style={{width:30,height:30,position:'absolute',right:0,top:(HEIGHT - 150) /2}} source={require('../bg/rightBtn.png')}>
                                <TouchableOpacity onPress={()=>this.setState({zt3: true})}></TouchableOpacity>
                            </ImageBackground>*/}

                        {this.state.zt3?(
                            <View style={{position:'absolute',top:(HEIGHT - 150) /3,right:0,borderWidth:1,borderColor:'#dedede',backgroundColor:'#f2f2f2'}}>
                                <Button style={{height:40,backgroundColor:'#f2f2f2',width:100,justifyContent:'center',borderBottomWidth:1,borderColor:'#dedede'}}
                                onPress={()=>this._allJiao()}>
                                    <Text style={{color:'#8dc23c',lineHeight:40,fontSize:14}}>全叫</Text>
                                </Button>
                                <Button style={{height:40,backgroundColor:'#f2f2f2',width:100,justifyContent:'center',borderBottomWidth:1,borderColor:'#dedede'}}>
                                    <Text style={{color:'#8dc23c',lineHeight:40,fontSize:14,borderBottomWidth:1,borderColor:'#dedede'}}>传菜</Text>
                                </Button>
                                <Button style={{height:40,backgroundColor:'#f2f2f2',width:100,justifyContent:'center',borderBottomWidth:1,borderColor:'#dedede'}}>
                                    <Text style={{color:'#8dc23c',lineHeight:40,fontSize:14,borderBottomWidth:1,borderColor:'#dedede'}}>整单退菜</Text>
                                </Button>
                                <Button style={{height:40,backgroundColor:'#f2f2f2',width:100,justifyContent:'center',borderBottomWidth:1,borderColor:'#dedede'}}
                                onPress={()=>this.setState({zt5: true})}>
                                    <Text style={{color:'#8dc23c',lineHeight:40,fontSize:14,borderBottomWidth:1,borderColor:'#dedede'}}>整单备注</Text>
                                </Button>
                                <Button style={{height:40,backgroundColor:'#f2f2f2',width:100,justifyContent:'center'}}>
                                    <Text style={{color:'#8dc23c',lineHeight:40,fontSize:14,borderBottomWidth:1,borderColor:'#dedede'}}>打印菜单</Text>
                                </Button>
                                <Button style={{height:40,backgroundColor:'#f2f2f2',width:100,justifyContent:'center'}} onPress={()=>this.setState({zt3: false})}>
                                    <Text style={{color:'#8dc23c',lineHeight:40,fontSize:14,borderBottomWidth:1,borderColor:'#dedede'}}>隐藏</Text>
                                </Button>
                            </View>
                        ):null}
                    </View>
                </View>

                <Modal animationType={'fade'} visible={this.state.zt} onRequestClose={()=>this.setState({zt: false})} transparent={true}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                        <View style={{width:WIDTH/3,backgroundColor:'#1a1a1a',borderRadius:8,paddingTop:20,paddingBottom:20}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:40}}>
                                <Text style={{color:'#fff',marginLeft:40}}>牛油果烟熏三文鱼</Text>
                                <Text style={{color:'#fff',marginRight:40}}>48/份</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <Button bordered style={{height:30,backgroundColor:'#8dc23c',borderColor:'#8dc23c',borderRadius:5}}><Text style={{fontSize:14,paddingRight:25,paddingLeft:25,color:'#fff'}}>小份</Text></Button>
                                <Button bordered style={{height:30,backgroundColor:'#1a1a1a',borderColor:'#fff',borderRadius:5}}><Text style={{fontSize:14,paddingRight:25,paddingLeft:25,color:'#fff'}}>大份</Text></Button>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',height:60}}>
                                <View>
                                    <Button style={{height:40,width:120,backgroundColor:'#8dc23c',borderRadius:40,justifyContent:'center'}}>
                                        <Text style={{color:'#fff'}}>加入菜品</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                {this.state.nowGoods?(
                    <Modal animationType={'fade'} visible={this.state.zt4}
                           onRequestClose={() => this.setState({zt4: false})} transparent={true}>
                        <View style={{backgroundColor: 'rgba(0,0,0,.5)', height: HEIGHT, width: WIDTH, justifyContent:'center', alignItems:'center'}}>
                            <View style={{width: WIDTH/2, height: HEIGHT-200, backgroundColor: 'white'}}>
                                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{fontSize: 20}}>选择规格</Text>
                                </View>
                                <Text style={{backgroundColor:Color.tableIndex.photoBg, height: 1}}/>
                                <View style={{flex:10, padding: 10}}>
                                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                        <Text>{this.state.goods[this.state.nowGoods].name}</Text>
                                        <Text>&yen;{this.state.goods[this.state.nowGoods].spec[this.state.nowSpec].real_price}/份</Text>
                                    </View>
                                    <View style={{flexDirection:'row', justifyContent:'center', flexWrap:'wrap'}}>
                                        {this.state.goods[this.state.nowGoods].spec.map((v, k)=>{
                                            if(this.state.nowSpec==k) {
                                                return <Button warning style={{margin: 10}} onPress={()=>this.setState({nowSpec: k})}><Text> {v.spec_name} </Text></Button>
                                            }else{
                                                return <Button light style={{margin: 10}} onPress={()=>this.setState({nowSpec: k})}><Text> {v.spec_name} </Text></Button>
                                            }

                                        })}
                                        {/*<Button light style={{margin: 10}}><Text> 小份 </Text></Button>
                                        <Button warning style={{margin: 10}}><Text> 大份 </Text></Button>*/}
                                    </View>
                                </View>
                                <View style={{flex:1, flexDirection:'row'}}>
                                    <View style={{justifyContent:'center', alignItems:'center',flex:1}}>
                                        <Text style={{color: 'black', padding: 100}} onPress={()=>this.setState({zt4: false})}>
                                            取消
                                        </Text>
                                    </View>
                                    <View style={{justifyContent:'center', alignItems:'center',flex:1, backgroundColor: Color.tableIndex.photoBg}}>
                                        <Text style={{color: 'white', padding: 100}} onPress={()=>this._add(null, 0, 2)}>
                                            确定
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                ):null}
            </View>
        )
    }
    _allJiao() {
        for(let v of this.state.cart) {
            v.print_status = 1;
        }
        this.setState({cart: this.state.cart});
    }
    //购物车列表
    _item4(v, k) {
        if(v.temp_package_sn==0 || (v.temp_package_sn>0 && v.goods_id==0)) {
            return(
                <View style={{height:50,borderBottomWidth:2,borderColor:'#dedede',flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:2}}>
                        {v.goods_id>0?<Text numberOfLines={1} style={{fontSize:12,marginLeft:10,marginRight:10,color:'#666'}}>{v.goods_name}({v.spec_name})</Text>:
                            <Text numberOfLines={1} style={{fontSize:12,marginLeft:10,marginRight:10,color:'#666'}}>{v.goods_name}</Text>}
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Item rounded style={{width: 50, height:20}}>
                            <Text>×</Text>
                            <Input defaultValue={v.goods_id==0?v.package_number.toString():v.number.toString()}
                                   keyboardType={'numeric'} selectTextOnFocus onChangeText={e=>this._changNum(k, e, v.goods_id==0?2:1)}/>
                        </Item>
                        {/*<Text style={{width:40,height:20,borderWidth:1,borderColor:'#fa7159',color:'#999',
                            textAlign:'center',lineHeight:20,borderRadius:3}}>× {v.goods_id==0?v.package_number:v.number}</Text>*/}
                        <Text style={{fontSize:12,color:'#999'}}>&yen;{v.price}</Text>
                    </View>
                    <View style={{flex:2,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                        <Text style={{width:28,height:28,lineHeight:28,borderRadius:28,marginRight:5,fontSize:14,
                            backgroundColor: v.print_status==1?Color.tableIndex.photoBg:'white',
                            borderColor:Color.tableIndex.photoBg,borderWidth:2,textAlign:'center',color:v.print_status==1?'white':Color.tableIndex.photoBg}}
                        onPress={()=>this._jiao(k, v.goods_id==0?2:1)}>起</Text>
                        <Text style={{width:28,height:28,lineHeight:28,borderRadius:28,marginRight:5,fontSize:14,
                            borderColor:'#fa745d',borderWidth:2,textAlign:'center',color:'#fa745d'}} onPress={()=>this.setState({zt6: true})}>备</Text>
                        <Text style={{width:28,height:28,lineHeight:28,borderRadius:28,marginRight:5,fontSize:14,
                            borderColor:'#888',borderWidth:2,textAlign:'center',color:'#888'}} onPress={()=>this._del(k, v.goods_id==0?2:1)}>×</Text>
                    </View>
                </View>
            )
        }
    }
    //分类
    _item(item) {
        return (
            <TouchableOpacity onPress={()=>this._sx(item)}>
                <View style={{backgroundColor: item.zt?Color.tableIndex.photoBg:'white', height: 40, justifyContent: 'space-between', alignItems:'center',
                    borderBottomWidth:1, borderColor: Color.tableIndex.photoBg, flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10, color: item.zt?'white':'#000'}}>{item.name}</Text>
                    {item.num>0?(
                        <View>
                            <Badge>
                                <Text>{item.num}</Text>
                            </Badge>
                        </View>
                    ):null}
                </View>
            </TouchableOpacity>
        )
    }
    //单品
    _item2(item, k) {
        if(item.zt) {
            return (
                <TouchableOpacity onPress={()=>this._add(item, k)}>
                    <View style={{width: 100, height: 100, backgroundColor: 'white', padding:5, margin: 5}}>
                        <View style={{flex:2}}>
                            <Text style={{fontSize: 14}}>{item.name}</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Text style={{fontSize: 12}}>&yen;{item.spec[0].real_price}/份</Text>
                        </View>
                        {item.num>0?(
                            <ImageBackground style={{width:32,height:32,position:'absolute',right:0,bottom:0}} source={require('../bg/Coder.png')}>
                                <Text style={{color:'#fff',textAlign:'right',paddingRight:2,lineHeight:40,fontSize:15}}>{item.num}</Text>
                            </ImageBackground>
                        ):null}
                    </View>
                </TouchableOpacity>
            )
        }else{
            return null;
        }
    }
    //套餐
    _item3(item, k) {
        if(item.zt) {
            return (
                <TouchableOpacity onPress={()=>this._addPackage(k)}>
                    <View style={{width: 100, height: 100, backgroundColor: 'white', padding:5, margin: 5}}>
                        <View style={{flex:2}}>
                            <Text style={{fontSize: 14}}>{item.name}</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Text style={{fontSize: 12}}>&yen;{item.price}/份</Text>
                        </View>
                        {item.num>0?(
                            <ImageBackground style={{width:32,height:32,position:'absolute',right:0,bottom:0}} source={require('../bg/Coder.png')}>
                                <Text style={{color:'#fff',textAlign:'right',paddingRight:2,lineHeight:40,fontSize:15}}>{item.num}</Text>
                            </ImageBackground>
                        ):null}
                    </View>
                </TouchableOpacity>
            )
        }else{
            return null;
        }
    }
    _sx(item) {
        for(let v of this.state.types) {
            v.zt = false;
            if(item.id == v.id) {
                v.zt = true;
            }
        }
        this.setState({types: this.state.types});
        if(item.id==-1) {
            this.setState({zt2: 1});
        }else{
            for (let v of this.state.goods) {
                v.zt = false;
                if(v.type == item.id) {
                    v.zt = true;
                }
            }
            console.log(this.state.goods);
            this.setState({goods: this.state.goods, zt2: 2});
        }
    }
    _getRemark(type) {
        this._post(request.Reason, {type_id: type})
            .then(rs=>{
                if(rs.errCode==0) {
                    if(type==2) {
                        this.setState({allRemark: rs.data.rs});
                        console.log(rs, '整单备注');
                    }else if(type==3) {
                        this.setState({remark: rs.data.rs});
                        console.log(rs, '备注');
                    }
                }else{
                    this._error(rs);
                }
            })
    }
    _detail() {
        this._get(request.Detail, `order_id=${table.order_id}`)
            .then(rs=>{
                if(rs.errCode==0) {
                    this.setState({record: rs.data.record});
                }else{
                    this._error(rs);
                }
                console.log(rs, '订单详情');
            });
    }
    _modifyNum(num) {
        let n = parseInt(num);
        console.log(n);
        if(n>0) {
            this._post(request.ChangePeopleNumber, {order_id: table.order_id, people: n})
                .then(rs=>{
                    if(rs.errCode==0) {
                        this._success('修改成功');
                    }else{
                        this._error(rs);
                    }
                })
        }
    }
    _modifyWaiter(id) {
        this._post(request.Save, {order_id: table.order_id, waiter: id})
            .then(rs=>{
               if(rs.errCode==0) {
                   this._success('修改成功');
               } else{
                   this._error(rs);
               }
            });
    }
}