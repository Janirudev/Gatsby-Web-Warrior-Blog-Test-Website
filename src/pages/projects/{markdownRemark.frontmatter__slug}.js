import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from '../../styles/project.module.css'
import Layout from "../../components/Layout"

export default function Project({data}) {
  const {title, stack, featuredImg} = data.product.frontmatter;
  const {html} = data.product
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{ title }</h2>
        <h3>{ stack }</h3>
        <div className={styles.featured}>
          <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt={title} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html}} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String!) {
  product: markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
      stack
      featuredImg {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
    html
  }
}
`