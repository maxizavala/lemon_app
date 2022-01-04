import { applyMiddleware, combineReducers, createStore } from 'redux';

import addressReducer from './reducers/address.reducer';
import arsReducer from './reducers/ars.reducer';
import authReducer from './reducers/auth.reducer';
import btcReducer from './reducers/btc.reducer';
import cotizacionReducer from './reducers/cotizacion.reducer';
import historialReducer from './reducers/historial.reducer';
import montoReducer from './reducers/monto.reducer';
import ordersReducer from './reducers/orders.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    btcPrice: btcReducer,
    arsSaldo: arsReducer,
    historial: historialReducer,
    ordenes: ordersReducer,
    auth: authReducer,
    address: addressReducer,
    monto: montoReducer,
    cotizacion: cotizacionReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));