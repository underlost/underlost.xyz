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
      <div className="gh-canvas mt-11">
        <article className="stacked-sm">
          <header className="mb-8">
            <h1 className="text-5xl lg:text-6xl font-black pr-16">
              {mdx.frontmatter.title}
            </h1>
          </header>
          <section className="gh-content content">
            <MDXProvider
              localImages={mdx.frontmatter.embeddedImagesLocal}
              components={shortcodes}
            >
              {children}
            </MDXProvider>
          </section>
        </article>
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
