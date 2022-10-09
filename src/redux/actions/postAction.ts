import { GET_POSTS_LIST } from "../types";
import { Dispatch } from 'redux';
import axios from "axios";
import * as interfacePostRedux from "../../interface/postReducerInterface";

/**HAMMER: type return any to solve '(dispatch: Dispatch<interfacePostRedux.postRequest>) => Promise<void>'
 * 
 * read typescript documentation to solve it 
 * 
*/
export const getPosts = (id: number): any => {
    return (dispatch: Dispatch<interfacePostRedux.postRequest>) => (
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((response) => {

            const { data } = response;

            dispatch({
                type: GET_POSTS_LIST,
                payload: data
            })
        }).catch((error) => {
            console.log(error)
        })
    )
} 