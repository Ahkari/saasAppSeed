/**
 * Created by ehsy-it on 16/8/11.
 */
import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header: {
        flex: 5
    },
    topBar:{
        flex: 10,
        flexDirection: 'row'
    },
    leftBtn:{
        flex: 1,
        justifyContent: 'center',
    },
    leftBtnText:{
        textAlign: 'center',
        height: 20,
        fontSize: 15,
    },
    title:{
        flex: 3,
        justifyContent: 'center'
    },
    titleText:{
        height: 20,
        textAlign: 'center',
        fontSize: 15
    },
    rightBtn:{
        flex: 1,
    },
    rightBtnText:{
        textAlign: 'center',
        height: 20,
        fontSize: 15,
    },
    content:{
        flex: 184
    },
    upView:{
        flex: 3
    },
    downView:{
        flex: 2
    }
});