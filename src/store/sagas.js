import { delay } from 'redux-saga';
import { takeLatest, put, call, select } from 'redux-saga/effects';

function apiGet(user) {
  console.log('user', user)
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const result = await response.json();
    resolve(result)
  });
}

function* getTodoList(action) {
  try {
    const response = yield call(apiGet, action.payload.text);

    yield put({ type: 'SUCCESS', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE' });
  }
}

export default function* root() {
  yield [
    takeLatest('REQUEST', getTodoList),
  ];
}
