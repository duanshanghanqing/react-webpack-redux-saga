import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';

// 创建 saga 中间件
const sagaMiddleware = createSagaMiddleware();

// applyMiddleware来自redux可以包装 store 的 dispatch
// thunk作用是使action创建函数可以返回一个function代替一个action对象
export default (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f, // 调用开发命令行
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
