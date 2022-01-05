import { ADD_ORDER, DELETE_ORDER, GET_ORDERS } from "../actions/orders.actions";

const initialState = {
    list: [],
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {
                ...state,
                list: state.list
            }
        case GET_ORDERS:
            return {
                ...state,
                list: action.payload,
            }
        case DELETE_ORDER:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.orderID)
            }
        default:
            return state;
    }	
}

export default ordersReducer;