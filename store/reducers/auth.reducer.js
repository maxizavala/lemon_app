import { SIGN_IN } from '../actions/auth.actions';
import { SIGN_UP } from '../actions/auth.actions';

const INITIAL_STATE = {
  token: null,
  userId: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            };
            break;
        case SIGN_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            };
            break;
        default:
            return state;
    }
}

export default authReducer;