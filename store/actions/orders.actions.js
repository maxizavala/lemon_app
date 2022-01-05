import { URL_API } from "../../constants/database"

export const ADD_ORDER = "ADD_ORDER"

export const GET_ORDERS = 'GET_ORDERS'

export const DELETE_ORDER = 'DELETE_ORDER'

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

export const getOrders = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/ordenes.json`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const result = await response.json()
            const orders = Object.keys(result).map(key => ({
                ...result[key],
                id: key,
            }))
            dispatch({
                type: GET_ORDERS,
                payload: orders,
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const deleteOrder = (id) => {
    return async dispatch => {
        try {
            await fetch(`${URL_API}/ordenes/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            dispatch({ type: DELETE_ORDER, orderID: id });

        } catch (error) {
            console.log(error.message)
        }
    }
}