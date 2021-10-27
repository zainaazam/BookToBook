// import {createStore, compose, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

// import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './Reducers';
// import AsyncStorage from '@react-native-community/async-storage';
// import {ActionTypes} from './Types';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   blacklist: ['SelectedServices'],
// };

// export type RootState = ReturnType<typeof rootReducer>;

// const persistedReducer = persistReducer<RootState, ActionTypes>(
//   persistConfig,
//   rootReducer,
// );

// // @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk)),
// );

// const persistor = persistStore(store);
// export {persistor, store};

// export type AppDispatch = typeof store.dispatch;

import {createStore} from 'redux';

const store = createStore(rootReducer);

export default store;
