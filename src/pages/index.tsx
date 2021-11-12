import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import { Column, Row } from '../components/Containers/Containers'
import CodeBubble from '../components/Bubble/CodeBubble'
import IconBubble from '../components/Bubble/IconBubble'
import SEO from '../components/seo'


const IndexPage = ({ data }) => {
    return (
        <>
        <SEO title="Ethan Skinner"/>
            <Column>
                <Row>
                </Row>
                <Row>
                    <CodeBubble></CodeBubble>
                </Row>
                <Row>
                    <IconBubble icon="github"></IconBubble>
                    <IconBubble icon="linkedin"></IconBubble>
                    <IconBubble icon="goodreads"></IconBubble>
                    <IconBubble icon="stackoverflow"></IconBubble>
                </Row>
            </Column>
        </>
    )
}

export default IndexPage
