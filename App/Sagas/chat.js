import { all, put, call, takeLatest } from 'redux-saga/effects'
import lorem from 'lorem-ipsum-react-native';

import { generate } from './message';

import { Chat, Mock } from '../constants';

function* add() {
    const id = Date.now();

    yield put({
        type: Chat.ADD,
        id,
        name: lorem({ count: 3, units: 'words' }),
        users: Mock.emails.filter(() => Math.random() > 0.5),
    });

    yield call(generate, id);
}

export function* chatSaga() {
    yield all([
        takeLatest(Chat.REQUEST_ADD, add),
    ]);
}