/**
 * Created by ehsy-it on 16/8/4.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view' ;

import {
    Text,
    View,
    Navigator,
    TabBarIOS
} from 'react-native';

import {styles} from './styles/App.style';

import {Home, MyScene} from '../component';


export default class App extends Component {

    static propTypes = {

    }

    constructor (props) {
        super(props);
        this.state = {
            //selectedTab : 'home'
        }
    }

    _onForward(route, navigator, index) {
        navigator.push({
            title: 'haha',
            index: index,
        });
    }

    _onBack(route, navigator) {
        if (route.index > 0) {
            navigator.pop();
        }
    }

    /*
    _renderContent (count , route , navigator )  {
        if (count === 1) {
            return (
                <Home onForward={() => {this._onForward(route, navigator, 1)}}/>
            )
        } else if(count === 2) {
            return (
                <Text>销售</Text>
            )
        } else if(count === 3) {
            return (
                <Text>采购</Text>
            )
        } else if(count === 4) {
            return (
                <Text>统计</Text>
            )
        }

    }*/

    renderScene(route, navigator) {
        if (route.index === 0){
            return (

                /*
                <View style={styles.container}>

                    <TabBarIOS>
                        <TabBarIOS.Item
                            title="首页"
                            selected={this.state.selectedTab === 'home'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'home',
                                });
                            }}>
                            {this._renderContent(1, route, navigator)}
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            title="销售"
                            selected={this.state.selectedTab === 'purchase'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'purchase',
                                });
                            }}>
                            {this._renderContent(2 ,route, navigator)}
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            title="采购"
                            selected={this.state.selectedTab === 'market'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'market',
                                    presses: this.state.presses + 1
                                });
                            }}>
                            {this._renderContent(3, route, navigator)}
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            title="统计"
                            selected={this.state.selectedTab === 'statistics'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'statistics',
                                    presses: this.state.presses + 1
                                });
                            }}>
                            {this._renderContent(4, route, navigator)}
                        </TabBarIOS.Item>
                    </TabBarIOS>
                </View>
                 */
                <View style={styles.container}>
                    <ScrollableTabView

                        tabBarPosition='bottom'
                        onChangeTab={
                            (obj) => {
                                console.log('index:' + obj.i);
                            }
                        }
                    >
                        <View tabLabel='首页' style={styles.container}>
                            <Home
                                onForward={()=>{
                                    this._onForward(route, navigator,1)
                                }}
                            />
                        </View>
                        <View tabLabel='销售' style={styles.container}>
                            <Text>#销售</Text>
                        </View>
                        <View tabLabel='采购' style={styles.container}>
                            <Text>#采购</Text>
                        </View>
                        <View tabLabel='统计' style={styles.container}>
                            <Text>#统计</Text>
                        </View>
                    </ScrollableTabView>
                </View>
            )
        }else if(route.index === 1){
            return (
                <MyScene
                    title = { 'Scene' }
                    onBack={() => {
                        this._onBack(route, navigator)
                    }}
                />
            )
        }
    }

    configureScene(route) {
        if (route.index === 0){
            return Navigator.SceneConfigs.FloatFromBottom
        }else {
            return Navigator.SceneConfigs.FloatFromLeft
        }
    }

    render(){
        return(
            <Navigator
                initialRoute={{title: 'My Initial Scene', index: 0}}
                renderScene={(route, navigator) => this.renderScene(route,navigator)}
                configureScene={(route, routeStack) => this.configureScene(route)}
            />
        )
    }
}

export default connect(
    ( (state) => {
        return {

        }
    } ) , {

    })(App)
