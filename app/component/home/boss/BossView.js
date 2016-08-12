/**
 * Created by ehsy-it on 16/8/11.
 */
import React, {Component, PropTypes} from 'react';
import {
    Text,
    View
} from 'react-native';

import {TextBox} from '../../../component';

import {styles} from '../../styles/home/bossView.style'

export default class BossView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mainContent}>
                    <Text>累计收入</Text>
                    <Text>$2930.00</Text>
                </View>
                <View style={styles.footContent}>
                    <TextBox style={styles.textBox} upText="销售收入" downText="$1200.00"/>
                    <TextBox style={styles.textBox} upText="其他收入" downText="$3000.00"/>
                    <TextBox style={styles.textBox} upText="账户余额" downText="$3200.00"/>
                </View>
            </View>
        )
    }
}