import PostInterface from "./postInterface"

export interface post {
    postList: PostInterface[]
}

export interface postRequest {
    type: string,
    payload: PostInterface[]
}