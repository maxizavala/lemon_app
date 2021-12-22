import { insertAddress } from "../../db";

export const ADD_ADDRESS = 'ADD_ADDRESS'
export const LOAD_ADDRESS = 'LOAD_ADDRESS';

export const addAddress = (name, address) => {
    
    return async dispatch => {

        const result = await insertAddress(name, address)

        console.log(result)

        dispatch({ 
            type: ADD_ADDRESS,
            payload: {id: result.insertId, name, address}
        })
    }
    

}