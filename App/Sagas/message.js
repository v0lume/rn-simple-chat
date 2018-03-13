import { delay } from 'redux-saga'
import { all, put, call, takeLatest } from 'redux-saga/effects'
import lorem from 'lorem-ipsum-react-native'

import { Message, Mock } from '../constants';

function* add(action) {
    yield put({
        type: Message.ADD,
        email: Mock.email_user,
        message: action.message
    });

    console.log('message sended');
}

function* generate() {
    console.log('generate');
    while (true) {
        console.log('loop');

        yield delay(5000);
        console.log('generate1');

        const email = Mock.emails[ Math.floor(Math.random() * Mock.emails.length) ];

        yield put({
            type: Message.ADD,
            email,
            message: lorem({}),
        });

        console.log('message generated');
    }
}

export function* messageSaga() {
    yield all([
        call(generate),
        takeLatest(Message.REQUEST_ADD, add),
    ]);
}