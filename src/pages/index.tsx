import React from "react"
import { Link } from "gatsby"

import { ImageBubble } from "../components/ImageBubble/ImageBubble"
import { Column, Row } from "../components/Containers/Containers"
import WorkBubble from "../components/ImageBubble/WorkBubble"
import PlayBubble from "../components/PlayBubble"
import CodeBubble from "../components/CodeBubble"

const IndexPage = ({ data }) => (
    <Column>
        <Row></Row>
        <Row>
            <Link to="/work">
                <WorkBubble></WorkBubble>
            </Link>
            <Link to="/play">
                <PlayBubble></PlayBubble>
            </Link>
            <Link to="/code">
                <CodeBubble></CodeBubble>
            </Link>
        </Row>
        <Row></Row>
    </Column>
)

export default IndexPage
