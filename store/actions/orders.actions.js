import { URL_API } from "../../constants/database"

export const ADD_ORDER = "ADD_ORDER"

export const addOrder = (order) => {
    return async dispatch => {
        try {
            dispatch({
                type: ADD_ORDER,
                status: 'loading',
            });
    
            const response = await fetch(`${URL_API}/ordenes.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    order: order,
                }),
            });
    
            const result = await response.json();
    
            dispatch({
                type: ADD_ORDER,
                status: 'completed',
                orderID: result.name,
            });
        } catch(error) {
            console.log(error.message);
        }
    }
}