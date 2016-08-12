/**
 * Created by ehsy-it on 16/8/8.
 */

import * as types from '../constants/ActionTypes'

const initialState = {
    num: 0
};

export default function crease(state = initialState, action) {
    switch(action.type){
        case types.INCRESEAMENT:
            return Object.assign({}, state, {
                num: state.num + 1
            });
        case types.DECRESEAMENT:
            return Object.assign({}, state, {
                num: state.num - 1
            });
        default:
            return state;
    }
}