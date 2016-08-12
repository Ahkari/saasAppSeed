/**
 * Created by ehsy-it on 16/8/9.
 */
import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class MyScene extends  Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func,
        onBack: PropTypes.func.isRequired
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>当前场景: { this.props.title }</Text>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>点击返回上个页面</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        top: 80
    },

});