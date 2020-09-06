import React from "react"
import { Link } from "gatsby"

import { ImageBubble } from "../components/ImageBubble/ImageBubble"
import {
    CenteredColumn,
    CenteredRow,
} from "../components/CenteredContainer/CenteredContainer"

const PlayPage = () => (
    <CenteredColumn>
        <CenteredRow></CenteredRow>
        <CenteredRow>
            <Link to="/">
                <ImageBubble></ImageBubble>
            </Link>
        </CenteredRow>
        <CenteredRow></CenteredRow>
    </CenteredColumn>
)

export default PlayPage
