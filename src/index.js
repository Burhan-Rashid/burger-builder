import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import BurgerBuilderReducer from "./store/reducers/BurgerBuilderReducer"
import UserReducer from "./store/reducers/UserReducer"
import OrderReducer from "./store/reducers/OrderReducer"
import { BrowserRouter } from 'react-router-dom';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  burgerBuilder: BurgerBuilderReducer,
  user: UserReducer,
  order: OrderReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
