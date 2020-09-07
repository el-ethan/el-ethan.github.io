import React from "react"
import { Link } from "gatsby"

import { Column, Row } from "../components/Containers/Containers"
import CodeBubble from "../components/Bubble/CodeBubble"
import IconBubble from "../components/Bubble/IconBubble"

const CodePage = () => (
    <Column>
        <Row></Row>
        <Row>
            <IconBubble icon="github"></IconBubble>
            <IconBubble icon="stackoverflow"></IconBubble>
            <Link to="/">
                <CodeBubble></CodeBubble>
            </Link>
        </Row>
        <Row></Row>
    </Column>
)

export default CodePage
