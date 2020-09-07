import React from "react"
import { Link } from "gatsby"

import { Column, Row } from "../components/Containers/Containers"
import WorkBubble from "../components/ImageBubble/WorkBubble"
import PlayBubble from "../components/ImageBubble/PlayBubble"
import CodeBubble from "../components/ImageBubble/CodeBubble"

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
