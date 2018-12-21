// import { put, takeEvery } from 'redux-saga/effects';
// import { actions as CounterActions } from '../containers/Counter/store';

// export function* incrementAsync() {
//   yield put({ type: CounterActions.INCREMENT_COUNTER });
// }

// export default function* rootSaga() {
//   yield takeEvery(CounterActions.INCREMENTASYNC_COUNTER, incrementAsync);
// }

import { all } from 'redux-saga/effects';
import { sagas as CounterSagas } from '../containers/Counter/store';

// console.log(CounterSagas);
// export default CounterSagas;

export default function* rootSaga() {
  yield all([CounterSagas()]);
}
