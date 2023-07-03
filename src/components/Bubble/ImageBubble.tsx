import React, { FunctionComponent } from "react"
import { float, bubble, round, musicIcon } from "./Bubble.module.css"
import Img, { FluidObject } from "gatsby-image"

interface ImageBubbleProps {
    image: FluidObject
    page?: "profile" | "music"  
}

export const ImageBubble: FunctionComponent<ImageBubbleProps> = ({ image, page = "profile" }) => {
    const classes = [bubble, round]
    if (page === "music") {
        classes.push(musicIcon)
    } else {
        classes.push(float)
    }
    return <Img className={classes.join(" ")} fluid={image}></Img>
}
