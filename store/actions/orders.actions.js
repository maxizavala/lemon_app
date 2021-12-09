import { addDoc, collection } from "firebase/firestore";

import { firestore } from "../../constants/firebase";

export const ADD_ORDER = "ADD_ORDER"
export const REMOVE_ORDER = "REMOVE_ORDER"


export const addOrder = (order) => {
    
    return async dispatch => { // Devuelve una funcion asincrona

        try { // Llamada asincrona a la API

            addDoc(collection(firestore, "order_book"), order);    

            // Termina la llamada a la API, continua el flujo hacia los reducers
            dispatch({
                type: ADD_ORDER,
                payload: order,
            })
            
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const removeOrder = (orderID) => ({
    type: REMOVER_ORDER,
    orderID,
})
