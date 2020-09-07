import React from "react"
import { Link } from "gatsby"

import { Column, Row } from "../components/Containers/Containers"
import WorkBubble from "../components/ImageBubble/WorkBubble"

const WorkPage = () => (
    <Column>
        <Row></Row>
        <Row>
            <Link to="/">
                <WorkBubble></WorkBubble>
            </Link>
        </Row>
        <Row></Row>
    </Column>
)

export default WorkPage
