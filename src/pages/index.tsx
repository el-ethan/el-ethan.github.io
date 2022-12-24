import React from 'react'

import { Column, Row } from '../components/Containers/Containers'
import ProfilePhotoBubble from '../components/Bubble/ProfilePhotoBubble'
import IconBubble from '../components/Bubble/IconBubble'

export const Head = () => {
    return (
        <>
            <title>Ethan Skinner</title>
            <meta name="description" content="Ethan Skinner is a software engineer, turntablist, and hip hop music producer based in Kansas City, KS." />
        </>
    )
}

const ProfilePage = ({ data }) => {
    return (
        <>
            <Column>
                <Row>
                </Row>
                <Row>
                    <ProfilePhotoBubble></ProfilePhotoBubble>
                </Row>
                <Row>
                    <IconBubble icon="github"></IconBubble>
                    <IconBubble icon="linkedin"></IconBubble>
                    <IconBubble icon="goodreads"></IconBubble>
                    <IconBubble icon="stackoverflow"></IconBubble>
                    <IconBubble icon="soundcloud"></IconBubble>
                </Row>
            </Column>
        </>
    )
}

export default ProfilePage
