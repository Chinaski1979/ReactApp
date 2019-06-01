import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist"
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from 'reducers';

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));
const persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;

export default {
    getStore,
    getPersistor
};
