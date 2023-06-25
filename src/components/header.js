import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div className="max-w-6xl mx-auto absolute left-0 right-0 top-0 px-8">
      <nav className="flex lg:block flex-wrap items-center justify-between py-6 mb-6 relative z-30">
        <div className="flex items-center flex-shrink-0 lg:block lg:text-center">
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-mindaro hover:text-lime"
          >
            {siteTitle}
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2  border  rounded border-lime"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:text-center`}
        >
          <div className="text-base lg:flex-grow uppercase text-plum bg-darkviolet md:bg-transparent border-violet md:border-transparent p-4 border-2 md:border-0">
            <Link
              to={`/services/`}
              className="block mt-4 lg:mx-5 lg:inline-block lg:mt-0 hover:text-white"
            >
              Services
            </Link>
            <Link
              to={`/about/`}
              href="#responsive-header"
              className="block mt-4 lg:mx-5 lg:inline-block lg:mt-0 hover:text-white"
            >
              About
            </Link>
            <Link
              to={`/projects/`}
              className="block mt-4 lg:mx-5 lg:inline-block lg:mt-0 hover:text-white"
            >
              Projects
            </Link>
            <Link
              to={`/contact/`}
              className="block mt-4 lg:mx-5 lg:inline-block lg:mt-0 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
