import { ADD_ADDRESS, LOAD_ADDRESS } from '../actions/address.actions';

import Address from "../../models/Addres"

const initialState = {
    addresses: []
}

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            const newAddress = new Address(
                action.payload.id,
                action.payload.name,
                action.payload.address,
            );
            return {
                ...state,
                address: state.adresses.concat(newAddress),
            };
        case LOAD_ADDRESS:
            return {
                ...state,
                places: action.addresses.map(item => new Address(
                    item.id,
                    item.name,
                    item.address,
                ))
            }
        default:
            return state;
    }
}

export default addressReducer