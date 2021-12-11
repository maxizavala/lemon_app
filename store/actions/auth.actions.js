import { SIGN_UP_URL } from "../../constants/apis";

export const SIGN_UP = 'SIGN_UP';

export const signUp = (email, password) => {
    return async dispatch => {
        const response = await fetch(SIGN_UP_URL, {
            method: 'POST',
            header: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
            }),
        });

        console.log(response)

        const data = await response.json();

        dispatch({
            type: SIGN_UP,
            token: data.idToken,
            userId: data.localId,
        });
        
    }
}