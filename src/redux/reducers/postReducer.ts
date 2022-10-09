import { GET_POSTS_LIST } from "../types";
import * as interfacePostRedux from "../../interface/postReducerInterface"

const initialState : interfacePostRedux.post = {
    postList: []
}

const authReducer = (state = initialState, action: interfacePostRedux.postRequest) => {
    switch(action.type){
        case GET_POSTS_LIST: {
            return {
                ...state,
                postList: action.payload
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