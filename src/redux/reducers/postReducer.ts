import { GET_POSTS_LIST, SUCESS_POST } from "../types";
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
        case SUCESS_POST: {
            return {
                ...state,
                postList: [...state.postList, action.payload]
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