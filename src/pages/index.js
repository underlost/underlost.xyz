import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-fast-marquee"
import { Link } from "gatsby"
import MyFormcarry from "../components/MyFormcarry"
import { AnchorLink } from "gatsby-plugin-anchor-links"


const IndexPage = () => (
  <Layout>
    <SEO title="A development lab that builds innovative web and mobile experiences." />
    <header className="h-screen flex relative">
      <div className="w-full max-w-6xl mx-auto my-auto px-8">
        <p className="text-5xl font-light mb-4 leading-base text-white">
          Say{" "}
          <span className="font-bold relative">
            hello
            <span className="after:absolute after:inset-x-0 after:bottom-0.5 after:h-1 after:bg-lime"></span>
          </span>{" "}
          to underlost.xyz
        </p>
        <h1 className="text-3xl font-light">
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
      <div className="grid gap-0 grid-cols-6 absolute bottom-0 inset-x-0">
        <div className="col-span-1 h-5 bg-violet"></div>
        <div className="col-span-1 h-5 bg-violet"></div>
        <div className="col-span-1 h-5"></div>
        <div className="col-span-1 h-5 bg-violet"></div>
        <div className="col-span-1 h-5 bg-violet"></div>
      </div>
      <StaticImage
        src="../images/background.jpg"
        alt="Backgrdound Image"
        className="!absolute !inset-0 z-0 !w-full !h-full !object-cover !opacity-25 !object-top"
        placeholder="blurred"
        layout="fullWidth"
      />
    </header>

    <section className=" text-white py-32 bg-violet">
      <div className="mx-auto text-center mb-24 px-8">
        <h2 className="text-4xl font-light after:block after:w-10 after:h-0.5 after:bg-white after:inset-x-0 after:mx-auto after:mt-16">
          Some of the clients <br /> I've worked with
        </h2>
      </div>
      <Marquee className="flex">
        <div className="flex px-8 my-auto">
          <StaticImage
            src="../images/logos/frs-clipper.png"
            alt="FRS Clipper"
            className="my-auto"
            width={200}
          />
        </div>
        <div className="flex px-8 my-auto">
          <StaticImage
            src="../images/logos/gettyimages.webp"
            alt="Getty Images"
            className="my-auto"
            width={200}
          />
        </div>
        <div className="flex px-8 my-auto">
          <StaticImage
            src="../images/logos/graham-and-walker.png"
            alt="Graham & Walker"
            className="my-auto"
            width={200}
          />
        </div>
        <div className="flex px-8 my-auto">
          <StaticImage
            src="../images/logos/meta.png"
            alt="Meta"
            className="my-auto"
            width={200}
          />
        </div>
        <div className="flex px-8 my-auto">
          <StaticImage
            src="../images/logos/modernden.png"
            alt="Modern Den Real Estate & Development"
            className="my-auto"
            width={200}
          />
        </div>
        <div className="flex px-8 my-auto">
          <StaticImage
            src="../images/logos/parks-rec.webp"
            alt="Seattle Parks & Recreation"
            className="my-auto"
            width={200}
          />
        </div>
        <div className="flex px-8 my-auto">
          <StaticImage
            src="../images/logos/pinterest.webp"
            alt="Pinterest"
            className="my-auto"
            width={200}
          />
        </div>
        <div className="flex px-8 my-auto">
          <StaticImage
            src="../images/logos/puget-sound-clean-air-agency.png"
            alt="Puget Sound Clean Air Agency"
            className="my-auto"
            width={100}
          />
        </div>
        <div className="flex px-8 my-auto">
          <StaticImage
            src="../images/logos/watson-adventures.png"
            alt="Watson Adventures"
            className="my-auto"
            width={200}
          />
        </div>
        <div className="flex px-8 my-auto">
          <StaticImage
            src="../images/logos/williams_kastner.png"
            alt="Williams Kastner"
            className="my-auto"
            width={200}
          />
        </div>
      </Marquee>
    </section>
    <div className="grid gap-0 grid-cols-6">
      <div className="col-span-1 h-5 bg-violet"></div>
      <div className="col-span-1 h-5 bg-violet"></div>
      <div className="col-span-1 h-5"></div>
      <div className="col-span-1 h-5 bg-violet"></div>
      <div className="col-span-1 h-5 bg-violet mt-5"></div>
    </div>

    <section className="pt-32 px-8" id="services">
      <div className="mb-16 mx-auto max-w-3xl">
        <h2 className="text-6xl lg:text-8xl font-black after:block after:w-10 after:h-0.5 after:bg-mindaro after:inset-x-0 after:mt-16 text-mindaro">
          Areas of Expertise
        </h2>
      </div>

      <div className="mx-auto max-w-3xl">
        <ol className="mb-24">
          <li className="mb-4">
            <h3 className="uppercase font-bold inline pr-2 text-xl underline text-lime">
              Marketing Sites & Landing Pages
            </h3>
            <p className="inline text-lg">
              I can build compelling marketing sites and landing pages that
              showcase your brand and drive user engagement, all while equipping
              you with powerful SEO strategies.
            </p>
          </li>

          <li className="mb-4">
            <h3 className="uppercase font-bold inline pr-2 text-xl underline text-lime">
              Ecommerce Solutions
            </h3>
            <p className="inline text-lg">
              From selecting the right platform to integrating POS systems, I
              provide comprehensive solutions to transition your physical
              storefront into a thriving online store.
            </p>
          </li>

          <li className="mb-4">
            <h3 className="uppercase font-bold inline pr-2 text-xl underline text-lime">
              Web Apps
            </h3>
            <p className="inline text-lg">
              Have a unique startup idea or need something more then just a
              marketing website? I can collaborate closely with you to
              strategize, develop, and execute your vision into a dynamic web
              application.
            </p>
          </li>

          <li className="mb-4">
            <h3 className="uppercase font-bold inline pr-2 text-xl underline text-lime">
              DevOps
            </h3>
            <p className="inline text-lg">
              Whether it's migrating to a cloud service or managing complex
              databases, I provide DevOps solutions that help you scale your web
              applications efficiently.
            </p>
          </li>

          <li className="mb-4">
            <h3 className="uppercase font-bold inline pr-2 text-xl underline text-lime">
              AI Prompt Engineering
            </h3>
            <p className="inline text-lg">
              Harness the power of AI for your project, from crafting engaging
              copy to automating workflows; I can guide you in integrating
              AI-driven solutions for increased efficiency.
            </p>
          </li>
        </ol>

        <div className="text-center">
          <Link
            to="/services/"
            className="btn btn-primary text-2xl block lg:inline-block"
          >
            <span>Learn more about the services I offer</span>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-32" id="contact">
      <div className="mx-auto max-w-3xl text-center pb-24">
        <p className="text-xl px-6">
          If you have other questions, thoughts or concerns, or If you’d like to
          work on something together you should email -{" "}
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

export default IndexPage
