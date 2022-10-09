import { LOGIN_USER } from "../types";
import * as interfaceAuthRedux from "../../interface/authReducerInterface"

/**while auth0 isn´t applied use fixed userId to keep running app */
export const login = (email: string): interfaceAuthRedux.authRequest => ({
    type: LOGIN_USER,
    payload: email ? {isLogged: true, userId: 10} : {isLogged: false, userId: 0}
})