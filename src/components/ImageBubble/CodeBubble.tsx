import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ImageBubble } from "./ImageBubble"

const CodeBubble = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "es-code.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return <ImageBubble image={data.file.childImageSharp.fluid}></ImageBubble>
}

export default CodeBubble
