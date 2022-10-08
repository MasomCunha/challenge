import { LOGIN_USER } from "../types";
import * as interfaceAuthRedux from "../../interface/authReducerInterface"

export const login = (email: string): interfaceAuthRedux.authRequest => ({
    type: LOGIN_USER,
    payload: email ? true : false
})