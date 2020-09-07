import React from "react"
import { Link } from "gatsby"

import { Column, Row } from "../components/Containers/Containers"
import PlayBubble from "../components/Bubble/PlayBubble"
import EmojiBubble from "../components/Bubble/EmojiBubble"

const PlayPage = () => (
    <Column>
        <Row>
            <EmojiBubble emoji="books"></EmojiBubble>
        </Row>
        <Row>
            <EmojiBubble emoji="baseball"></EmojiBubble>
            <Link to="/">
                <PlayBubble></PlayBubble>
            </Link>
            <EmojiBubble emoji="coffee"></EmojiBubble>
        </Row>
        <Row></Row>
    </Column>
)

export default PlayPage
