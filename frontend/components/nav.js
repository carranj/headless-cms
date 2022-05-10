import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <header>
      <nav  className="navbar navbar-expand-lg navbar-light bg-light">
        
      <div class="logo">
        <a href="http://www.celebraciones-bellas.com" title="San Angelo's Best Wedding Decorators and Wedding Coordinators">
        Celebraciones Bellas
        </a>
      </div>

        <div className="uk-navbar-right">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <Link href={`/`}>
                    <a className="uk-link-reset">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/about-celebraciones-bellas`}>
                    <a className="uk-link-reset">About</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/gallery`}>
                    <a className="uk-link-reset">Gallery</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/contact-celebraciones-bellas`}>
                    <a className="uk-link-reset">Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/locations`}>
                    <a className="uk-link-reset">Locations</a>
                  </Link>
                </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav
