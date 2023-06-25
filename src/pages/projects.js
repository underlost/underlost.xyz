import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectPage = () => (
  <Layout>
    <Seo title="Projects I've Worked on" />

    <header className="pt-40 mb-16 gh-canvas">
      <h1 className="text-6xl font-black lg:pr-52 text-mindaro">
        A few projects I've worked on
      </h1>
    </header>
    <div className="gh-content gh-canvas content">
      <div className="md:columns-2 gap-8">
        <div className="break-after-column break-inside-avoid mb-16">
          <a
            href="https://underlost.net/portfolio/modern-den/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-lime"
          >
            <StaticImage
              src="../images/modernden/cover_modernden.jpg"
              alt="Modern Den Real Estate - ReactJS Web App"
              placeholder="blurred"
              layout="fullWidth"
              className="rounded-lg mb-4"
            />
            <h2 className="font-black text-3xl">
              Modern Den Real Estate - ReactJS Web App
            </h2>
            <p>
              The Modern Den website is a ReactJS-based website for browsing
              NWMLS real estate listings.
            </p>
          </a>
        </div>

        <div className="break-after-column break-inside-avoid mb-16">
          <a
            href="https://underlost.net/portfolio/modern-den/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-lime"
          >
            <StaticImage
              src="../images/pincuisine/cover_pincuisine.jpg"
              alt="PinCuisine - A Recipe Blog and Menu System for Pinterest"
              placeholder="blurred"
              layout="fullWidth"
              className="rounded-lg mb-4"
            />
            <h2 className="font-black text-3xl">
              PinCuisine - A Recipe Blog and Menu System for Pinterest
            </h2>
            <p>
              PinCusine was an internal website for Pinterest. The PinCusine
              doubled as both a food blog and cafeteria menu for their campuses
              throughout the world.
            </p>
          </a>
        </div>

        <div className="break-after-column break-inside-avoid mb-16">
          <a
            href="https://underlost.net/portfolio/graham-walker/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-lime"
          >
            <StaticImage
              src="../images/grahamwalker/cover_grahamwalker.jpg"
              alt="Graham & Walker - WordPress Website"
              placeholder="blurred"
              layout="fullWidth"
              className="rounded-lg mb-4"
            />
            <h2 className="font-black text-3xl">
              Graham & Walker - WordPress Website
            </h2>
            <p>
              Graham & Walker is a community and Venture Capitol Fund for woman
              owned start-ups. When they rebranded, they needed a new website to
              not only publish news, but also display ever-changing content,
              from startups in their portfolio, case studies, and upcoming
              hosted events.
            </p>
          </a>
        </div>

        <div className="break-after-column break-inside-avoid mb-16">
          <a
            href="https://underlost.net/portfolio/watson/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-lime"
          >
            <StaticImage
              src="../images/watson/cover_watson.jpg"
              alt="Watson Adventures Scavenger Hunts - ReactJS Web App"
              placeholder="blurred"
              layout="fullWidth"
              className="rounded-lg mb-4"
            />
            <h2 className="font-black text-3xl">
              Watson Adventures Scavenger Hunts - ReactJS Web App
            </h2>
            <p>
              Watson Adventures is a company that specializes in fun
              team-building exercises for small and large groups. They offer
              their services to both the general public, and corporate clients
              like Amazon and Google.
            </p>
          </a>
        </div>

        <div className="break-after-column break-inside-avoid mb-16">
          <a
            href="https://underlost.net/portfolio/wonderstream/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-lime"
          >
            <StaticImage
              src="../images/wonderstream/cover_wonderstream.jpg"
              alt="Wonderstream - A Live-Streaming App"
              placeholder="blurred"
              layout="fullWidth"
              className="rounded-lg mb-4"
            />
            <h2 className="font-black text-3xl">
              Wonderstream - A Live-Streaming App
            </h2>
            <p>
              Livestreaming web app and platform written in Python, that also
              accepted cryptocurrency.
            </p>
          </a>
        </div>

        <div className="break-after-column break-inside-avoid mb-16">
          <a
            href="https://underlost.net/portfolio/wonderstream/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-lime"
          >
            <StaticImage
              src="../images/314dc/cover_314dc.jpg"
              alt="314.DC WordPress Website"
              placeholder="blurred"
              layout="fullWidth"
              className="rounded-lg mb-4"
            />
            <h2 className="font-black text-3xl">314.DC WordPress Website</h2>
            <p>
              314.DC needed a rebrand, and with that, a new website that could
              easily be updated. They wanted something modular, with the ability
              to slowly roll out sections when they were ready.
            </p>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectPage