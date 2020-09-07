import React, { FunctionComponent } from "react"
import { float, bubble, round } from "./Bubble.module.css"
import Img, { FluidObject } from "gatsby-image"

interface ImageBubbleProps {
    image: FluidObject
}

export const ImageBubble: FunctionComponent<ImageBubbleProps> = ({ image }) => {
    return <Img className={[float, bubble, round].join(" ")} fluid={image}></Img>
}
