import PostInterface from "./postInterface"

/**HAMMER: any[] to prevent "type "never"" read documentation to solve it*/
export interface post {
    postList: PostInterface[] | any []
}

export interface postRequest {
    type: string,
    payload: PostInterface[]
}

export interface postSuccess {
    type: string,
    payload: PostInterface
}