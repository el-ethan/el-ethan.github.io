import React from "react"

import { Column, Row } from "../components/Containers/Containers"
import IconBubble from "../components/Bubble/IconBubble"
import BackBubble from "../components/Bubble/BackBubble"

const WorkPage = () => (
    <Column>
        <Row></Row>
        <Row>
            <BackBubble></BackBubble>
            <IconBubble icon="linkedin"></IconBubble>
            <IconBubble icon="soWork"></IconBubble>
        </Row>
        <Row></Row>
    </Column>
)

export default WorkPage
