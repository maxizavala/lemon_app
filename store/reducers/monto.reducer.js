import { UPDATE_MONTO } from "../actions/monto.actions";

const initialState = {
    monto: 0
}

const montoReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MONTO:
            return {
                monto: action.payload
            }
        default:
            return state;
    }
	
}

export default montoReducer;