import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinksItem,
  navLinksItemText,
  siteTitle
} from '../style/layout.module.scss'

const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return(
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinksItem}><Link to="/" className={navLinksItemText}>Home</Link></li>
          <li className={navLinksItem}><Link to="/about" className={navLinksItemText}>About</Link></li>
          <li className={navLinksItem}><Link to="/blog" className={navLinksItemText}>Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
