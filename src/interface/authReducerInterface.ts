export interface auth {
    isLogged: boolean
    userId: number | null
}

export interface authRequest {
    type: string,
    payload: auth
}