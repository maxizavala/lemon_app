import { fetchAddres, insertAddress } from "../../db";

export const ADD_ADDRESS = 'ADD_ADDRESS'
export const LOAD_ADDRESS = 'LOAD_ADDRESS';

export const addAddress = (name, address) => {
    
    return async dispatch => {

        const result = await insertAddress(name, address)

        dispatch({ 
            type: ADD_ADDRESS,
            payload: {id: result.insertId, name, address}
        })
    }

}


export const loadAddress = () => {
    
    return async dispatch => {

        try {
            const result = await fetchAddres()
            dispatch({ type: LOAD_ADDRESS, address: result.rows._array })
        } catch (error) {
            throw error
        }

    }

}