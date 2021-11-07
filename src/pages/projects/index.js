import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../../components/Layout"
import * as styles from '../../styles/projects.module.css'

export default function Projects({data}) {
  const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Projects</h1>
        <h3>Projects & Website I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// Exports Page Query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
  }
`
