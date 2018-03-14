import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import Root from './Containers/Root'
import reducers from './Reducers'
import rootSaga from './Sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

rootSaga.map(saga => sagaMiddleware.run(saga));

export default class App extends React.Component {
    render() {
        console.ignoredYellowBox = ['Remote debugger'];

        return (
            <Provider store={store}>
                <Root />
            </Provider>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
