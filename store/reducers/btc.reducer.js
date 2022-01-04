import { UPDATE_BTC } from "../actions/btc.actions";

const initialState = {
    price: 57260.3,
    saldo: 0.00573953,
}

const btcReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BTC:
            let newSaldo = state.saldo - action.payload
            return {
                price: 57260.3,
                saldo: newSaldo
            }
        default:
            return state;
    }
}

export default btcReducer;