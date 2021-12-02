import { UPDATE_ARS } from "../actions/ars.actions";

const initialState = {
    saldo: 10000.00,
}

const arsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ARS:
            let newSaldo = state.saldo - action.payload
            return {
                saldo: newSaldo
            }
        default:
            return state;
    }
	
}

export default arsReducer;