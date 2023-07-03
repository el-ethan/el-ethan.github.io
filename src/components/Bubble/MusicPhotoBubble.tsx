import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ImageBubble } from "./ImageBubble"

const MusicPhotoBubble = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "tak.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return <ImageBubble image={data.file.childImageSharp.fluid} page="music"></ImageBubble>
}

export default MusicPhotoBubble
