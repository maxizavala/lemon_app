import { combineReducers, createStore } from 'redux';

import arsReducer from './reducers/ars.reducer';
import btcReducer from './reducers/btc.reducer';
import historialReducer from './reducers/historial.reducer';
import ordersReducer from './reducers/orders.reducer';

const RootReducer = combineReducers({
    btcPrice: btcReducer,
    arsSaldo: arsReducer,
    historial: historialReducer,
    ordenes: ordersReducer,
});

export default createStore(RootReducer);