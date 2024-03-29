import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <header className="pt-40 mb-16 gh-canvas">
      <h1 className="text-5xl lg:text-6xl font-black pr-16 lg:pr-52 text-mindaro">
        NOT FOUND
      </h1>
    </header>
    <div className="gh-content gh-canvas content pb-32">
      <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
