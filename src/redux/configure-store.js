import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducers';
import rootSaga from './root-saga';

// TODO: if needed, can integrate my pokemon list with redux persist

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  const middlewares = applyMiddleware(...middleware);
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(middlewares);
  }
  return compose(middlewares);
};

function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware]),
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return { store };
}

export default configureStore;
