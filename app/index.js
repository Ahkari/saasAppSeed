/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {combineReducers} from 'redux';
import * as reducers from './reducers';

import {
    AppRegistry
} from 'react-native';

import App from './component/App.js';

let rootReducers = combineReducers({
    ...reducers
});

let store = createStore(rootReducers, window.STATE_FROM_SERVER);

class EhsySaaSApp extends Component {
    render() {
        return (
            <Provider store={store} >
                <App  />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('EhsySaaSApp', () => EhsySaaSApp);
