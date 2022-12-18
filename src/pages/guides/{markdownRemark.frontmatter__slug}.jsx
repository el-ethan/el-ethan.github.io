import * as React from 'react'
import { graphql } from 'gatsby'
import { container } from './guides.module.css'

export default function GuideTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div className={container}>
            <div>
                <h1>{frontmatter.title}</h1>
                <em>{frontmatter.date}</em>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </div>
    )
}

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`
