/**
 * Created by ehsy-it on 16/8/11.
 */
import React, {Component, PropTypes} from 'react';
import {
    Text,
    View
} from 'react-native';

import {styles} from '../../styles/home/textBox.style';

export default class TextCell extends Component {

    static propTypes = {
        upText: PropTypes.string,
        downText: PropTypes.string
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.upText}>{this.props.upText}</Text><Text style={styles.downText}>{this.props.downText}</Text>
            </View>
        )
    }
}