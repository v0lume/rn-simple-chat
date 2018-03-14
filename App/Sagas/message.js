import { delay } from 'redux-saga'
import { all, put, call, takeLatest } from 'redux-saga/effects'
import lorem from 'lorem-ipsum-react-native'

import { Message, Mock } from '../constants';

function* add(action) {
    yield put({
        type: Message.ADD,
        chat_id: action.chat_id,
        email: Mock.email_user,
        message: action.message
    });
}

export function* generate(chat_id) {
    while (true) {
        yield delay(5000);

        const email = Mock.emails[ Math.floor(Math.random() * Mock.emails.length) ];

        yield put({
            type: Message.ADD,
            chat_id,
            email,
            message: lorem({}),
        });
    }
}

export function* messageSaga() {
    yield all([
            //call(generate),
        takeLatest(Message.REQUEST_ADD, add),
    ]);
}