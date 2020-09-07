import React, { FunctionComponent } from "react"
import { column, row } from "./Containers.module.css"

export const Column: FunctionComponent = ({ children }) => {
    return <div className={column}>{children}</div>
}

export const Row: FunctionComponent = ({ children }) => {
    return <div className={row}>{children}</div>
}
