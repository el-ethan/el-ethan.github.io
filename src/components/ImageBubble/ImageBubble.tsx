import React, { FunctionComponent } from "react"
import { float } from "./ImageBubble.module.css"
import Img from "gatsby-image"

interface LinkBubbleProps {
    image: any
}

export const ImageBubble: FunctionComponent<LinkBubbleProps> = ({ image }) => {
    return <Img className={float} fluid={image}></Img>
}
