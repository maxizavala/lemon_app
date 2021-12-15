import { UPDATE_INFO } from "../actions/info.actions";

const initialState = {
    alias: 'Tu Alias',
    avatar: '../assets/img/user.png',
}

const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INFO:
            return {
                alias: payload.alias,
                avatar: payload.image,
            }
        default:
            return state;
    }
	
}

export default infoReducer;