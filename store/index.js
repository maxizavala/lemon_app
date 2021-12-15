import { applyMiddleware, combineReducers, createStore } from 'redux';

import arsReducer from './reducers/ars.reducer';
import authReducer from './reducers/auth.reducer';
import btcReducer from './reducers/btc.reducer';
import historialReducer from './reducers/historial.reducer';
import infoReducer from './reducers/info.reducer';
import ordersReducer from './reducers/orders.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    btcPrice: btcReducer,
    arsSaldo: arsReducer,
    historial: historialReducer,
    ordenes: ordersReducer,
    auth: authReducer,
    info: infoReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));