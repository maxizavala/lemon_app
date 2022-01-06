import { SIGN_IN_URL } from "../../constants/apis";
import { SIGN_UP_URL } from "../../constants/apis";

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

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

        const data = await response.json();

        dispatch({
            type: SIGN_UP,
            token: data.idToken,
            userId: data.localId,
        });
        
    }
}


export const signIn = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(SIGN_IN_URL, {
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
    
            const data = await response.json();
    
            dispatch({
                type: SIGN_IN,
                token: data.idToken,
                userId: data.localId,
            });
        } catch (error) {
            
        }
        
        
    }
}