import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

// Reducers
import LoginSliceReducer from './auth/LoginSlice';
import ProductSlice from './products/ProductSlice';

const persistConfig = {
  key: 'root',
  storage,
};

let rootReducer = combineReducers({
  loginSlice: LoginSliceReducer,
  productSlice: ProductSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
