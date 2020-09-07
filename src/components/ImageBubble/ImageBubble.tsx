import React, { FunctionComponent } from "react"
import { float } from "./ImageBubble.module.css"
import { Link } from "gatsby"
import Img from "gatsby-image"

interface LinkBubbleProps {
    image?: any
}

export const ImageBubble: FunctionComponent<LinkBubbleProps> = ({ image }) => {
    return !image ? (
        <img src="https://source.unsplash.com/random" className={float}></img>
    ) : (
        <Img className={float} fluid={image}></Img>
    )
}
