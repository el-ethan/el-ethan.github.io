import React, { FunctionComponent } from "react"
import { float } from "./ImageBubble.module.css"

interface LinkBubbleProps {
    image?: string
}

export const ImageBubble: FunctionComponent = () => {
    return (
        <img src="https://source.unsplash.com/random" className={float}></img>
    )
}
