import React from "react"

export default interface ButtonInterface {
    className: string,
    title: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}