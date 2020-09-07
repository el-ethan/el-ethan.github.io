import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ImageBubble } from "./ImageBubble"

const WorkBubble = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "es-work.jpg" }) {
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

export default WorkBubble
