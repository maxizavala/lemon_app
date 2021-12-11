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
        default:
            return state;
    }
}

export default authReducer;