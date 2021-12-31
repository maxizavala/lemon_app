import { URL_API } from "../../constants/database"

export const ADD_ORDER =  'ADD_ORDER'
export const UPDATE_ARS = "UPDATE_ARS"


export const updateArs = (monto) => ({
    type: UPDATE_ARS,
    payload: monto,
})
