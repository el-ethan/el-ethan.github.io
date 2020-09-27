import React from "react"

import { Column, Row } from "../components/Containers/Containers"
import IconBubble from "../components/Bubble/IconBubble"
import BackBubble from "../components/Bubble/BackBubble"
import WorkBubble from "../components/Bubble/WorkBubble"

import { Link } from "gatsby"

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
