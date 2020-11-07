import React from 'react'
import { Link } from 'gatsby'

import { Column, Row } from '../components/Containers/Containers'
import PlayBubble from '../components/Bubble/PlayBubble'
import IconBubble from '../components/Bubble/IconBubble'
import BackBubble from '../components/Bubble/BackBubble'

const PlayPage = () => (
    <Column>
        <Row></Row>
        <Row>
            <IconBubble icon="instagram"></IconBubble>
            <Link to="/">
                <PlayBubble></PlayBubble>
                <BackBubble></BackBubble>
            </Link>
            <IconBubble icon="goodreads"></IconBubble>
        </Row>
        <Row></Row>
    </Column>
)

export default PlayPage
