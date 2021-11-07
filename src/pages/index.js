import {graphql, Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home({data}) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Design</h3>
          <p>UX designer & web developer based in Belfast</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        {/* <img src="./banner.png" alt="Site Banner" style={{maxWidth: '100%'}}/> */}
        {/* <StaticImage src="../images/banner.png" alt="Site Banner" /> */}
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="Site Banner" />
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
}
`