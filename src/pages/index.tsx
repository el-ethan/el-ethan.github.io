import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { ImageBubble } from "../components/ImageBubble/ImageBubble"
import {
  CenteredColumn,
  CenteredRow,
} from "../components/CenteredContainer/CenteredContainer"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <CenteredColumn>
    <CenteredRow></CenteredRow>
    <CenteredRow>
      <Link to="/work">
        <ImageBubble></ImageBubble>
      </Link>
      <Link to="/play">
        <ImageBubble></ImageBubble>
      </Link>
      <Link to="/code">
        <ImageBubble></ImageBubble>
      </Link>
    </CenteredRow>
    <CenteredRow></CenteredRow>
  </CenteredColumn>
)

export default IndexPage
