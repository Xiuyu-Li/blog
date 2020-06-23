import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import Toggle from "./Toggle"
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"
import Helmet from "react-helmet"

const Layout = props => {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const { location, title, children } = props

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.1),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: "none",
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: "Montserrat, sans-serif",
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: "none",
            textDecoration: "none",
            color: "inherit",
          }}
          to={"/"}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        color: "var(--textNormal)",
        background: "var(--bg)",
        // transition: 'color 0.2s ease-out, background 0.2s ease-out',
        // minHeight: '100vh',
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Helmet
        meta={[
          {
            name: "theme-color",
            content: theme === "light" ? "#ffa8c5" : "#282c35",
          },
        ]}
      />
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2.625rem",
        }}
      >
        {header}
        {theme != null ? (
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: "none" }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: "none" }}
                />
              ),
            }}
            checked={theme === "dark"}
            onChange={e =>
              window.__setPreferredTheme(e.target.checked ? "dark" : "light")
            }
          />
        ) : (
            <div style={{ height: "24px" }} />
          )}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <br />
        <span style={{ color: '#999', fontSize: '0.7rem' }}>
          These articles are licensed under a{' '}
          <a
            rel='license'
            style={{ color: '#0084b5' }}
            href='http://creativecommons.org/licenses/by-sa/4.0/'
          >
            Creative Commons Attribution-ShareAlike 4.0 International License
            </a>
        </span>
      </footer>
    </div>
  )
}

export default Layout
