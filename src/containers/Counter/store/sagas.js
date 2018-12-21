import axios from 'axios';
import { delay } from 'redux-saga';
import {
  put, takeEvery, select, call,
} from 'redux-saga/effects';
import * as actions from './actions';

// 3.实现事件处理方法
export function* incrementAsync() {
  yield delay(1000);
  // 发送ajax
  const res = yield call(() => axios.get('https://alph.laifuyun.com/pcapi/v2/dictionary/locallanguage').then(res => res));
  console.log(res);
  yield put({ type: actions.INCREMENT_COUNTER });
}

export function* incrementIfOdd(action) {
  console.log(action);
  const state = yield select();
  if (state.counter % 2 === 0) {
    return;
  }
  // 没有返回就执行加一
  yield put({ type: actions.INCREMENT_COUNTER });
}

// 2.代理全部事件
export default function* rootSaga() {
  yield takeEvery(actions.INCREMENTASYNC_COUNTER, incrementAsync);
  yield takeEvery(actions.INCREMENTIFODD_COUNTER, incrementIfOdd);
}
