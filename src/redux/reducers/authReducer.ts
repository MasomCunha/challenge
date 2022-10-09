import { LOGIN_USER } from "../types";
import * as interfaceAuthRedux from "../../interface/authReducerInterface"

const initialState : interfaceAuthRedux.auth = {
    isLogged: false,
    userId: null
}


const authReducer = (state = initialState, action: interfaceAuthRedux.authRequest) => {
    switch(action.type){
        case LOGIN_USER: {
            return {
                ...state,
                isLogged: action.payload.isLogged,
                userId: action.payload.userId
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}


export default authReducer