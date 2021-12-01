import { combineReducers, createStore } from 'redux';

import arsReducer from './reducers/ars.reducer';
import btcReducer from './reducers/btc.reducer';
import historialReducer from './reducers/historial.reducer';

const RootReducer = combineReducers({
    btcPrice: btcReducer,
    arsSaldo: arsReducer,
    historial: historialReducer,
});

export default createStore(RootReducer);