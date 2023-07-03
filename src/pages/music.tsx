import React from 'react'

import { Column, Row } from '../components/Containers/Containers'
import MusicPhotoBubble from '../components/Bubble/MusicPhotoBubble'
import IconBubble from '../components/Bubble/IconBubble'

export const Head = () => {
    return (
        <>
            <title>Ethan Skinner</title>
            <meta name="description" content="Ethan Skinner is a software engineer, turntablist, and hip hop music producer based in Kansas City, KS." />
        </>
    )
}

const MusicPage = () => {
    return (
        <Column>
            <Row>
            </Row>
            <Row>
                <MusicPhotoBubble />
            </Row>
            <Row>
                <IconBubble label="spotify"></IconBubble>    
                <IconBubble label="instagram"></IconBubble>    
                <IconBubble label="soundcloud"></IconBubble>    

            </Row>
        </Column>
    )
}

export default MusicPage
