import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ImageBubble } from "./ImageBubble"

const ProfilePhotoBubble = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "confetti.jpg" }) {
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

export default ProfilePhotoBubble
