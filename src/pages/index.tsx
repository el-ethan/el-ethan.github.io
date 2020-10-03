import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import { Column, Row } from '../components/Containers/Containers'
import WorkBubble from '../components/Bubble/WorkBubble'
import PlayBubble from '../components/Bubble/PlayBubble'
import CodeBubble from '../components/Bubble/CodeBubble'
import { Triangle, Square, Circle, Squiggle } from '../components/FloatingShapes'

const IndexPage = ({ data }) => {
    return (
        <>
            <Column>
                <Triangle />
                <Square />
                <Circle />
                <Squiggle />
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
        </>
    )
}

export default IndexPage
