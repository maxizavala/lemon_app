import { UPDATE_COTIZACION } from "../actions/cotizacion.actions";

const initialState = {
    cotizacion: 0.00,
}

const cotizacionReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COTIZACION:
            return {
                cotizacion: action.payload
            }
        default:
            return state;
    }
	
}

export default cotizacionReducer;