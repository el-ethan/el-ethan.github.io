import React from 'react'
import { Link } from 'gatsby'

import { Column, Row } from '../components/Containers/Containers'
import PlayBubble from '../components/Bubble/PlayBubble'
import IconBubble from '../components/Bubble/IconBubble'

const PlayPage = () => (
    <Column>
        <Row></Row>
        <Row>
            <IconBubble icon="instagram"></IconBubble>
            <Link to="/">
                <PlayBubble></PlayBubble>
            </Link>
            <IconBubble icon="goodreads"></IconBubble>
        </Row>
        <Row></Row>
    </Column>
)

export default PlayPage
