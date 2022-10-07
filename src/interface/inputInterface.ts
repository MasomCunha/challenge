import React from "react"

export default interface InputInterface {
    className: string,
    placeholder: string,
    hasError: boolean,
    errorMessage: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}