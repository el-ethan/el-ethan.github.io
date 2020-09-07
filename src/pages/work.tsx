import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import { Column, Row } from "../components/Containers/Containers"
import WorkBubble from "../components/Bubble/WorkBubble"
import IconBubble from "../components/Bubble/IconBubble"

const WorkPage = () => (
    <Column>
        <Row></Row>
        <Row>
            <Link to="/">
                <WorkBubble></WorkBubble>
            </Link>
            <IconBubble icon="linkedin"></IconBubble>
            <IconBubble icon="soWork"></IconBubble>
        </Row>
        <Row></Row>
    </Column>
)

export default WorkPage
