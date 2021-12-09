import { ADD_ORDER } from "../actions/orders.actions";

const initialState = {
    list: [],
}


const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        default:
            return state;
    }	
}

export default ordersReducer;