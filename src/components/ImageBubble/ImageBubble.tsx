import React, { FunctionComponent } from "react"
import { float } from "./ImageBubble.module.css"
import Img, { FluidObject } from "gatsby-image"

interface ImageBubbleProps {
    image: FluidObject
}

export const ImageBubble: FunctionComponent<ImageBubbleProps> = ({ image }) => {
    return <Img className={float} fluid={image}></Img>
}
