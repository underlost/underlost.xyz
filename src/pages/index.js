import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
import MyFormcarry from "../components/MyFormcarry"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ClientSection from "../components/sections/ClientSection"


const IndexPage = () => (
  <Layout headerClasses="absolute inset-0 text-white">
    <SEO title="A development lab that builds innovative web and mobile experiences." />
    <header className="h-screen flex text-white relative">
      <div className="w-full max-w-6xl mx-auto my-auto px-8 relative z-20 my-auto">
        <p className="text-4xl font-light mb-1 lg:mb-0 leading-base font-grotesk">
          Say{` `}
          <span
            className="font-black style-3d inline-block pr-2"
            data-text="hello"
          >
            hello
          </span>
          {` `}
          to <strong className="font-black">underlost XYZ</strong>
        </p>
        <h1 className="text-xl font-light">
          <span className="pr-3 inline">
            A development lab that builds innovative web and mobile experiences.
          </span>
          <span className="blinker"></span>
        </h1>
      </div>
      <div className="absolute z-10 left-0 right-0 bottom-16 text-center">
        <AnchorLink
          to="/#services"
          title="View Areas of Expertise"
          className="mx-auto inline-block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#CCA4C9"
            className="w-12 h-12  animate-bounce"
          >
            <path
              fill-rule="evenodd"
              d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </AnchorLink>
      </div>

      <StaticImage
        src="../images/xyz.jpg"
        alt="Backgrdound Image"
        className="!absolute !inset-0 z-0 !w-full !h-full !object-cover !object-top"
        placeholder="blurred"
        layout="fullWidth"
      />
    </header>

    <div className="relative h-[160px] mb-24">
      <StaticImage
        src="../images/header_blob_xyz.svg"
        alt="Backgrdound Image"
        className="!absolute !inset-0 z-0 !w-full !h-full !object-cover !object-bottom header-blob"
        placeholder="blurred"
        layout="fullWidth"
        style={{
          objectFit: `cover`,
          objectPosition: `bottom`,
        }}
      />
    </div>

    <section className="px-8 mb-11" id="services">
      <div className="mx-auto max-w-3xl mb-11">
        <h2 className="text-3xl font-mono text-center">Areas of Expertise</h2>
      </div>

      <div className="mb-16 mx-auto max-w-3xl stacked-sm">
        <div>
          <ol className="mb-4">
            <li className="mb-5">
              <h3 className="uppercase font-bold inline pr-2 text-lg underline text-lime">
                Marketing Sites & Landing Pages
              </h3>
              <p className="inline text-lg">
                I can build compelling marketing sites and landing pages that
                showcase your brand and drive user engagement, all while
                equipping you with powerful SEO strategies.
              </p>
            </li>

            <li className="mb-5">
              <h3 className="uppercase font-bold inline pr-2 text-lg underline text-lime">
                Ecommerce Solutions
              </h3>
              <p className="inline text-lg">
                From selecting the right platform to integrating POS systems, I
                provide comprehensive solutions to transition your physical
                storefront into a thriving online store.
              </p>
            </li>

            <li className="mb-5">
              <h3 className="uppercase font-bold inline pr-2 text-lg underline text-lime">
                Web Apps
              </h3>
              <p className="inline text-lg">
                Have a unique startup idea or need something more then just a
                marketing website? I can collaborate closely with you to
                strategize, develop, and execute your vision into a dynamic web
                application.
              </p>
            </li>

            <li className="mb-5">
              <h3 className="uppercase font-bold inline pr-2 text-lg underline text-lime">
                DevOps
              </h3>
              <p className="inline text-lg">
                Whether it's migrating to a cloud service or managing complex
                databases, I provide DevOps solutions that help you scale your
                web applications efficiently.
              </p>
            </li>

            <li className="mb-5">
              <h3 className="uppercase font-bold inline pr-2 text-lg underline text-lime">
                AI Prompt Engineering
              </h3>
              <p className="inline text-lg">
                Harness the power of AI for your project, from crafting engaging
                copy to automating workflows; I can guide you in integrating
                AI-driven solutions for increased efficiency.
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/services/"
          className="btn btn-primary text-sm block lg:inline-block"
        >
          <span>Learn more about the services I offer</span>
        </Link>
      </div>
    </section>

    <div className="mb-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 73.17 179.49"
        className="h-48 mx-auto"
      >
        <path
          d="M71.08 136.37a5.13 5.13 0 0 1 0-.87c0-.3-.14-.71-.17-1 0-.54-.19-1.08-.23-1.62l-.17-2.3-.25-4.65-.26-6.47v-.68c-.15-3-.3-6-.53-9l-.52-6.21c0-.63-.53-4.36-.63-5 0-.25-.35-1.95-.58-3.35-1 .09-1.77.55-2.71.62.66 4.33 1.18 8.7 1.51 13 .4 5.34.66 10.71 1 16.08l.39 7c0 1.4-.31 2.82-.26 4.17a2 2 0 0 0 .31 1c.21.3.16.4.3.5a1.18 1.18 0 0 0 .81.12c.84-.06 2.11-.66 1.99-1.34Zm-9.54-63.2-.23-.5c-.13-.31-.33-.72-.56-1.16-.46-.88-1-1.94-1.38-2.59l-.31-.56a31.87 31.87 0 0 0-1.74-2.81 48.77 48.77 0 0 0-13.59-14 38.22 38.22 0 0 0-8.87-4.34A28.9 28.9 0 0 0 25 45.7 31.56 31.56 0 0 0 11.54 49a23.9 23.9 0 0 0-5.22 3.62A20.47 20.47 0 0 0 4.1 55c-.34.42-.63.89-.94 1.33a10.88 10.88 0 0 0-.85 1.38A18.21 18.21 0 0 0 .42 70.34l.33 1.45c.11.45.31.88.47 1.3s.3.86.49 1.27.41.8.61 1.21A27.71 27.71 0 0 0 6 81l1.42 1.51 1.84 1.59c.66.51 1.36 1 2 1.44s1.28.75 1.78 1a22.66 22.66 0 0 0 5 2 23.44 23.44 0 0 0 5.31.82 26.71 26.71 0 0 0 7-.72c1.16-.22 2.26-.65 3.38-1a33.94 33.94 0 0 0 3.21-1.41 36.93 36.93 0 0 0 10.95-8.44 47.5 47.5 0 0 0 4.43-5.77A35.5 35.5 0 0 0 56.91 62 86.41 86.41 0 0 0 59 52a84.59 84.59 0 0 0 .51-18.2c-.31-4.8-.8-9.33-1.39-13.8-.3-2.25-.63-4.49-1-6.76l-.59-3.43-.11-.83A15.59 15.59 0 0 0 56.17 7a46 46 0 0 1-.82-4.66C55.23 1.65 54.48.1 54 0c-.28-.06-.56.19-.85.15-.65-.09-1.47 1.16-1.25 2.06s.51 1.89.73 2.84.37 2 .62 3a9.82 9.82 0 0 0 .38 1.16l.18.58.08.29.12.69c.62 3.55 1.3 7 1.68 10.81.53 5.54 1.31 11.42 1.37 17.15a73.61 73.61 0 0 1-1.81 18.84 41.54 41.54 0 0 1-8.06 16.81 37.32 37.32 0 0 1-8.78 7.9 27.1 27.1 0 0 1-10.8 4.12C17.1 88.25 6 80.74 3.26 70.61a15.83 15.83 0 0 1 3.4-14.56 23.24 23.24 0 0 1 13.74-7.36 28.32 28.32 0 0 1 8-.29 28.05 28.05 0 0 1 7.7 2.06 37.16 37.16 0 0 1 8.63 5 39.08 39.08 0 0 1 7 7l.66.87.11.14a67.14 67.14 0 0 1 3.75 5.55 54.34 54.34 0 0 1 5.4 12c1 .42 2.35 1 3.17.6a40.62 40.62 0 0 0-1.19-3.52c-.28-.8-.63-1.61-1-2.44l-1.09-2.49Z"
          fill="#020202"
        />
        <path
          d="M70.5 132.57a8.72 8.72 0 0 1 0-1.16c0-.51.05-1.48 0-2l-.5-8.52c-.54-8.84-1-17.78-2.45-26.66-.38-2.33-.8-4.67-1.29-7A56.65 56.65 0 0 0 63 76.78a85.2 85.2 0 0 0-4.57-9.11 48.44 48.44 0 0 0-12-14c-1-.86-2.14-1.57-3.2-2.33S41.11 50 40 49.45a35.91 35.91 0 0 0-7.11-2.81 31.08 31.08 0 0 0-12.78-.4 6.21 6.21 0 0 1 2.64 1.89 25.44 25.44 0 0 1 9.32 1l.26.09a21.31 21.31 0 0 1 2 .69 41.94 41.94 0 0 1 7.43 3.72 41.78 41.78 0 0 1 6.63 5.3A52.72 52.72 0 0 1 59 74.38a73.71 73.71 0 0 1 5.41 18.17A207.23 207.23 0 0 1 67 116.64l.87 15.92a4.07 4.07 0 0 1 2.63.01Zm.79 25.83a1.43 1.43 0 0 1-1.49.27 2.72 2.72 0 0 1-1.54-1.81c-.14-1 .44-2.13.44-3.2 0-1.47-.27-2.94-.39-4.42-.08-1 0-1.92-.15-2.86a17 17 0 0 1-.11-2.57 5.7 5.7 0 0 0 0-1.17 3 3 0 0 1-.16-1.12c.18-1 2.22-1.3 2.91-.71.53.45.36 1.56.36 2.18v2.67c.13 2.13 0 4.28.1 6.41 0 .91.24 1.8.35 2.7s.15 1.7.2 2.56a1.31 1.31 0 0 1-.52 1.07ZM71.2 172a3.09 3.09 0 0 1-1 0 1.26 1.26 0 0 1-.74-.4 2.18 2.18 0 0 1-.49-2.16 9.2 9.2 0 0 0 0-2.87 9.22 9.22 0 0 1 0-3.1 2 2 0 0 1 .72-1.17c.6-.46 1.35-.61 1.8.14a5.18 5.18 0 0 1 .44 2.91c-.13 1.34.53 2.75.76 4.15a2 2 0 0 1-.22 1.34A2.49 2.49 0 0 1 71.2 172Zm-.13 7.49a3.66 3.66 0 0 1-.83-.35 1.91 1.91 0 0 1-.25-3.27c.63-.54 2.26-.61 2.72.16a4.27 4.27 0 0 1 .44 1.32c.1 1.12-.23 2.05-2.08 2.14Z"
          fill="#020202"
        />
      </svg>
    </div>

    <section className="mb-11" id="contact">
      <div className="mx-auto max-w-3xl text-center pb-24 font-mono">
        <p className="text-xl px-6">
          If you have other questions, thoughts or concerns, or If you’d like to
          work on something together you should email -{" "}
          <a
            className="font-black relative underline"
            href="mailto:hello@underlost.xyz"
          >
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

    <div className="mb-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 29.54 196.83"
        className="h-48 mx-auto"
      >
        <path
          d="M29.16 144.21a5.51 5.51 0 0 1 .07-.89c0-.3-.11-.72-.13-1 0-.55-.16-1.09-.19-1.64l-.3-4.68-.09-1.22c-.05-.61-.09-1.22-.17-1.83v-.38a62.65 62.65 0 0 0-.7-5l-.7-3.46c-.04-.22-.65-2.39-.75-2.74 0-.13-.41-1-.66-1.8-.91.24-1.7.68-2.62.92l.54 1.72.46 1.74c.33 1.15.55 2.33.79 3.48.27 1.45.51 2.91.69 4.37l.26 2.2.18 2c.13 1.24.16 2.48.25 3.73s-.36 2.78-.38 4.11a2 2 0 0 0 .26 1c.19.3.14.4.28.51a1.21 1.21 0 0 0 .8.16c.95-.08 2.19-.61 2.11-1.3Zm-8.8-36.53-.17-.27-.4-.59-.94-1.36-.19-.3a16.76 16.76 0 0 0-1.16-1.46c-1.11-1.48-2.4-2.71-3.23-4a5.62 5.62 0 0 1-.85-1.91 4.58 4.58 0 0 1 .05-2 40.68 40.68 0 0 1 1.73-4.72l2-4.9c.91-2.32 1.8-4.6 2.71-7a60.61 60.61 0 0 0 3.65-13.06 58.32 58.32 0 0 0 .44-6.44 33.46 33.46 0 0 0-.29-4.91 30.79 30.79 0 0 0-1.47-5.64 26.08 26.08 0 0 0-3.71-6.89 16.65 16.65 0 0 0-1.26-1.52c-.44-.49-.89-1-1.37-1.41-1-.89-2-1.7-3-2.47s-2.08-1.61-3.06-2.42a50.69 50.69 0 0 1-4.15-3.83 9.43 9.43 0 0 1-2.48-4.28 14.14 14.14 0 0 1-.52-4.45A17.77 17.77 0 0 1 3 19.57l.23-1.14.35-1.13a16.57 16.57 0 0 1 .65-1.75A15.84 15.84 0 0 1 5 13.88a16.49 16.49 0 0 1 .85-1.61l.45-.79c.13-.24.38-.61.4-.64l.87-1.28c.3-.42.63-.84 1-1.26s.9-.92 1.23-1.44a24.08 24.08 0 0 1 3-3.41c.45-.49 1.3-1.93 1.1-2.4-.11-.26-.47-.36-.6-.62-.3-.61-1.78-.58-2.42.13S9.61 2.11 9 2.9 7.61 4.49 7 5.36c-.48.64-.75 1.51-1.25 2.15A8.86 8.86 0 0 0 5 8.6l-.35.56-.55.77a25.72 25.72 0 0 0-3.77 9.31 15.54 15.54 0 0 0 1.91 11.28A19.54 19.54 0 0 0 6 34.86c1.4 1.25 2.87 2.34 4.27 3.43a35.69 35.69 0 0 1 4.94 4.3 20.63 20.63 0 0 1 3.51 5.27 32 32 0 0 1 2.19 17.42c-.79 6-2.84 11.73-5.09 17.43-1.13 2.84-2.35 5.66-3.52 8.52-.75 1.9-1.64 3.73-1.6 6a7.31 7.31 0 0 0 .85 3.14 16.93 16.93 0 0 0 1.78 2.63l.39.5.07.08c.79.93 1.52 1.93 2.32 2.9a33.49 33.49 0 0 1 3.78 6.16 6.85 6.85 0 0 0 2.93-.49c-.29-.62-.58-1.19-.94-1.86s-1.03-1.72-1.52-2.61Z"
          fill="#020202"
        />
        <path
          d="M28.71 140.33v-1.16c0-.47.05-1.51 0-2s-.08-.82-.13-1.18v-.26l-.05-.45-.15-1.51a77.94 77.94 0 0 0-3-14.8c-.42-1.26-.81-2.54-1.27-3.79a27.87 27.87 0 0 0-2.61-5.57c-.55-.8-1-1.56-1.54-2.32s-1.07-1.54-1.67-2.42c-1.9-2.89-4.87-5.07-5-7.6a8.37 8.37 0 0 1 .8-3.48c.5-1.25 1-2.5 1.55-3.74.8-2.1 1.64-4.21 2.51-6.35a7.37 7.37 0 0 1-2.55.36 99.54 99.54 0 0 1-2.3 4.91l-.08.14c-.17.38-.33.75-.52 1.14a28.34 28.34 0 0 0-1.82 4.62 8.07 8.07 0 0 0-.22 2.89 7.77 7.77 0 0 0 .93 2.76A33.4 33.4 0 0 0 15 105c.52.69 1.1 1.34 1.58 2.06s1 1.43 1.45 2.17a42.87 42.87 0 0 1 4.34 9.49 70.1 70.1 0 0 1 3 13c.15 1.23.3 2.46.39 3.71l.09 1c0 .26.05.52.06.79.06 1 .13 2.08.17 3.13a4.14 4.14 0 0 1 2.63-.02Zm-1.9 24.99a1 1 0 0 1-1-.26 1.54 1.54 0 0 1-.36-1.45 18.41 18.41 0 0 0 .16-4.14c.06-1.5.22-3 .16-4.54-.05-1.09.25-2.58-.16-3.63a2.09 2.09 0 0 1 .87-2.55 1.78 1.78 0 0 1 1.43-.09c.91.35 1 1.71 1 2.55s-.45 1.44-.48 2.31c0 .42-.13.84-.17 1.27-.14 1.51-.23 3-.4 4.53-.08.71-.32 1.38-.45 2.08s.14 1.43.05 2.14c-.11.46-.16 1.57-.65 1.78Zm-2.23 5.03c0-.5.13-2 .83-2a1.47 1.47 0 0 1 .88.41 12.21 12.21 0 0 1 1.15 1 1.65 1.65 0 0 1 .43.64c.2.65-.18 1.39-.21 2.05a30.11 30.11 0 0 1-.79 3.46c-.2 1.26.19 2.33-.89 3a2.51 2.51 0 0 1-.85-1.21c-.29-2.31-.36-4.65-.54-7a2.2 2.2 0 0 1-.01-.35Zm.56 15.4a2.25 2.25 0 0 1 .2-1.38c.56-1.07 2.34-1.37 2.58 0a9 9 0 0 1-.11 2.37c0 .56-.25 2.47-1 2a5.16 5.16 0 0 1-1.5-2.51 3.48 3.48 0 0 1-.17-.48Zm3.57 10.96h-.07c-1.31.55-2.74-1.54-2.19-2.73a1.82 1.82 0 0 1 2.65-.58c.69.72.57 2.82-.39 3.31Z"
          fill="#020202"
        />
      </svg>
    </div>

    <div className="mb-24">
      <ClientSection />
    </div>
  </Layout>
)

export default IndexPage
