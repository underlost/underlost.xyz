import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYouPage = () => (
  <Layout>
    <SEO title="Thank you! Your Form has been submitted." />
    <div className="gh-canvas">
      <article className="stacked-sm text-center">
        <header className="mb-5">
          <h1 className="text-5xl lg:text-6xl font-black text-mindaro">
            Thank you!
          </h1>
        </header>
        <div className="gh-content content text-lg">
          <p>
            Your message has been sent! <br />
            I'll try to respond within the next 24-48 hours!
          </p>
        </div>
      </article>
    </div>
  </Layout>
)

export default ThankYouPage
