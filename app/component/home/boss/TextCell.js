/**
 * Created by ehsy-it on 16/8/11.
 */
import React, {Component, PropTypes} from 'react';
import {
    Text,
    View
} from 'react-native';

import {styles} from '../../styles/home/textCell.style';

export default class TextCell extends Component {

    static propTypes = {
        leftCell: PropTypes.string,
        rightCell: PropTypes.string
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.leftCell}>{this.props.leftCell}</Text><Text style={styles.rightCell}>{this.props.rightCell}</Text>
            </View>
        )
    }
}