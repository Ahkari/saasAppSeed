/**
 * Created by ehsy-it on 16/8/10.
 */


import React, {Component, PropTypes} from 'react';

import {
    TouchableHighlight,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { styles } from  '../styles/home/home.style';
import { TextCell, BossView } from '../../component';

export default class Home extends Component {

    static propTypes = {
        onForward: PropTypes.func
    }

    _renderUpView() {
        let userType = 1;
        switch (userType) {
            case 1:
                return (
                    <View style={styles.upView}><BossView/></View>
                );
            case 2:
                return (
                    <View style={styles.upView}><Text>22222</Text></View>
                );
            default:
                return;
        }
    }

    _renderDownView() {
        let userType = 1;
        switch (userType) {
            case 1:
                return (
                    <View style={styles.downView}>
                        <TextCell leftCell='本月销售收入:' rightCell='$2000.00'></TextCell>
                        <TextCell leftCell='本月采购收入:' rightCell='$2000.00'></TextCell>
                        <TextCell leftCell='客户欠款:' rightCell='$2000.00'></TextCell>
                        <TextCell leftCell='供应商欠款:' rightCell='$2000.00'></TextCell>
                    </View>
                );
            case 2:
                return (
                    <View style={styles.downView}><Text>22222</Text></View>
                );
            default:
                return;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}/>
                <View style={styles.topBar}>
                    <TouchableHighlight onPress={this.props.onForward} style={styles.leftBtn}>
                        <Text style={styles.leftBtnText}>用户中心</Text>
                    </TouchableHighlight>
                    <View style={styles.title}><Text style={styles.titleText}>点点账</Text></View>
                    <TouchableHighlight onPress={this.props.onForward} style={styles.leftBtn}>
                        <Text style={styles.rightBtnText}>统计</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.content}>
                    {this._renderUpView()}
                    {this._renderDownView()}

                </View>
            </View>
        )
    }
}