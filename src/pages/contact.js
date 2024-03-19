import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-fast-marquee"
import { Link } from "gatsby"
import MyFormcarry from "../components/MyFormcarry"


const ContactPage = () => (
  <Layout>
    <SEO title="Send me a message" />
    <section  id="contact">
      <div className="mx-auto max-w-3xl text-center pb-24 font-mono">
        <p className="text-xl px-8">
          If you have other questions, thoughts or concerns, or If you’d like to
          work on something together you should email{" "}
          <a className="font-black relative" href="mailto:hello@underlost.xyz">
            hello@underlost.xyz
            <span className="after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-lime"></span>
          </a>{" "}
          or use the form below.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <MyFormcarry />
      </div>
    </section>
  </Layout>
)

export default ContactPage