import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import { Column, Row } from "../components/Containers/Containers"
import CodeBubble from "../components/ImageBubble/CodeBubble"

const CodePage = () => (
    <Column>
        <Row></Row>
        <Row
            css={css`
                flex-flow: flex-end;
            `}
        >
            <Link to="/">
                <CodeBubble></CodeBubble>
            </Link>
        </Row>
        <Row></Row>
    </Column>
)

export default CodePage
