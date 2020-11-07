import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"

import { bubble, float } from "./Bubble.module.css"

const BackBubble = () => {
    return (
        <Link to="/" className={bubble}>
            <FontAwesomeIcon icon={faArrowCircleLeft}></FontAwesomeIcon>
        </Link>
    )
}

export default BackBubble
