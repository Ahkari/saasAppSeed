/**
 * Created by ehsy-it on 16/8/11.
 */

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black'
    },
    leftCell:{
        flex: 2,
        flexDirection: 'column',
        textAlign: 'center',
    },
    rightCell:{
        flex: 3,
        flexDirection: 'column',
        textAlign: 'center',
    }
});