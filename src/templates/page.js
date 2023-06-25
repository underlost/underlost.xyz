import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const TemplatePage = ({ data: { mdx }, children }) => {
  const Image = props => (
    <div className="image-wrapper">
      <img {...props} />
    </div>
  )

  const shortcodes = { Link, StaticImage, img: Image }

  return (
    <Layout>
      <Seo title={mdx.frontmatter.title} />

      <header className="pt-40 mb-16 gh-canvas">
        <h1 className="text-4xl lg:text-6xl font-black lg:pr-52 text-mindaro">
          {mdx.frontmatter.title}
        </h1>
      </header>
      <div className="gh-content gh-canvas content">
        <MDXProvider
          localImages={mdx.frontmatter.embeddedImagesLocal}
          components={shortcodes}
        >
          {children}
        </MDXProvider>
      </div>
    </Layout>
  )
}


export default TemplatePage

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        title
      }
    }
  }
`
