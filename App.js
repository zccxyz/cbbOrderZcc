/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Root } from 'native-base';
import {StackNavigator} from 'react-navigation';

import tablesIndex from './app/tables/Index';
import meal from './app/tables/meal';
import Login from './app/Login';
import setIndex from './app/set/Index';
import shiftIndex from './app/shift/Index';
import GoodsIndex from './app/goods/Index';
import AreaIndex from './app/areaSet/Index';
import SaveIndex from './app/saveOrder/Index';
import ReserveIndex from './app/reserve/Index';
import CharitableIndex from './app/charitable/Index';
import CharitableInfo from './app/charitable/Info';
import ShopIndex from './app/shop/Index';
import OAIndex from './app/OA/Index';
import SystemIndex from './app/system/Index';
import LastIndex from './app/last/Index';

const Router = StackNavigator({
    LastIndex: {
        screen: LastIndex,
        navigationOptions: {
            header: null,
        }
    },
    SystemIndex: {
        screen: SystemIndex,
        navigationOptions: {
            header: null,
        }
    },
    OAIndex: {
        screen: OAIndex,
        navigationOptions: {
            header: null,
        }
    },
    ShopIndex: {
        screen: ShopIndex,
        navigationOptions: {
            header: null,
        }
    },
    CharitableInfo: {
        screen: CharitableInfo,
        navigationOptions: {
            header: null,
        }
    },
    CharitableIndex: {
        screen: CharitableIndex,
        navigationOptions: {
            header: null,
        }
    },
    ReserveIndex: {
        screen: ReserveIndex,
        navigationOptions: {
            header: null,
        }
    },
    SaveIndex: {
        screen: SaveIndex,
        navigationOptions: {
            header: null,
        }
    },
    AreaIndex: {
        screen: AreaIndex,
        navigationOptions: {
            header: null,
        }
    },
    GoodsIndex: {
        screen: GoodsIndex,
        navigationOptions: {
            header: null,
        }
    },
    shiftIndex: {
        screen: shiftIndex,
        navigationOptions: {
            header: null,
        }
    },
    setIndex: {
        screen: setIndex,
        navigationOptions: {
            header: null,
        }
    },
    meal: {
        screen: meal,
        navigationOptions: {
            header: null,
        }
    },
    tablesIndex: {
        screen: tablesIndex,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    }
}, {
    initialRouteName: 'ShopIndex',
});

export default class App extends Component {
    render() {
        return (
            <Root>
                <Router/>
            </Root>
        );
    }
}
