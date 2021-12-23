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
                address: state.addresses.concat(newAddress),
            };
        case LOAD_ADDRESS:
            return {
                ...state,
                addresses: action.address.map(item => new Address(
                    item.id.toString(),
                    item.name,
                    item.address,
                ))
            }
        default:
            return state;
    }
}

export default addressReducer