import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (

      <header>
        <nav  className="navbar navbar-expand-lg navbar-light bg-light">
          
        <div className="logo">
          <a href="http://www.celebraciones-bellas.com" title="San Angelo's Best Wedding Decorators and Wedding Coordinators">
          Celebraciones Bellas
          </a>
        </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href={`/`}>
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/about-celebraciones-bellas`}>
                      <a className="nav-link">About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/gallery`}>
                      <a className="nav-link">Gallery</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/contact-celebraciones-bellas`}>
                      <a className="nav-link">Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/locations`}>
                      <a className="nav-link">Locations</a>
                    </Link>
                  </li>
            </ul>
          </div>
        </nav>
      </header>

  )
}

export default Nav
