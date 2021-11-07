import { graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import React from 'react'
import Layout from "../../components/Layout"
import * as styles from '../../styles/projects.module.css'

export default function Projects({data}) {
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Projects</h1>
        <h3>Projects & Website I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt={project.frontmatter.title} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <i>Like what you see? Email me at {contact} for a quote!</i>
      </div>
    </Layout>
  )
}

// Exports Page Query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
