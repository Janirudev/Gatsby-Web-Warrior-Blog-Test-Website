import {graphql, Link} from 'gatsby'
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home({ data }) {
  const {title, description} = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Design</h3>
          <p>UX designer & web developer based in Belfast</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="./banner.png" alt="Site Banner" style={{maxWidth: '100%'}}/>
        <p>{title} - {description}</p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`