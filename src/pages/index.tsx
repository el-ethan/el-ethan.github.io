import React from 'react'

import { Column, Row } from '../components/Containers/Containers'
import ProfilePhotoBubble from '../components/Bubble/ProfilePhotoBubble'
import IconBubble from '../components/Bubble/IconBubble'
import SEO from '../components/seo'

const ProfilePage = ({ data }) => {
    return (
        <>
            <SEO title="Ethan Skinner" />
            <Column>
                <Row></Row>
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
