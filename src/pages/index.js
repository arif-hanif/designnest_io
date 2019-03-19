import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'

class Index extends Component {
  render() {
    const latestPostEdges = this.props.data.latest.edges
    const popularPostEdges = this.props.data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Developer, designer, writer`}/>
        <SEO/>
        <div className="container">
          <div className="lead">
            <h1>
              Hi, I am Arif. I am an engineer that works
              <strong className="green">
                in the AEC industry</strong>
              and I write
              <strong className="green">code</strong>
              to help people claw their way out of spreadsheet hell.
            </h1>
            <Link className="button" to="/me" target="_blank">
              About me
            </Link>
            <a className="button" href="https://github.com/arif-hanif" target="_blank">
              GitHub
            </a>
            <a className="button" href="https://twitter.com/hanif_arif" target="_blank">
              Twitter
            </a>
          </div>
        </div>
        <div className="container">
          <section className="section">
            <h2>Latest Articles</h2>
            <PostListing simple postEdges={latestPostEdges}/>
          </section>

          <section className="section">
            <h2>Most Popular</h2>
            <PostListing simple postEdges={popularPostEdges}/>
          </section>

          <section className="section">
            <h2>Open Source Projects</h2>
            <ProjectListing projects={projects}/>
          </section>

          <section className="section">
            <h2>Acknowledgements</h2>
            <p>
              <a href="https://www.taniarascia.com/" target="_blank">
                Tania Rascia
              </a>
              , Her blog UI/UX, fell in love with it and used it for this site.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql `
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
