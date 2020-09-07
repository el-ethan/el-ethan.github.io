import React from "react"
import { Link } from "gatsby"

import { Column, Row } from "../components/Containers/Containers"
import WorkBubble from "../components/Bubble/WorkBubble"
import PlayBubble from "../components/Bubble/PlayBubble"
import CodeBubble from "../components/Bubble/CodeBubble"

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
