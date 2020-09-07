import React from "react"
import { Link } from "gatsby"

import { Column, Row } from "../components/Containers/Containers"
import PlayBubble from "../components/ImageBubble/PlayBubble"

const PlayPage = () => (
    <Column>
        <Row></Row>
        <Row>
            <Link to="/">
                <PlayBubble></PlayBubble>
            </Link>
        </Row>
        <Row></Row>
    </Column>
)

export default PlayPage
