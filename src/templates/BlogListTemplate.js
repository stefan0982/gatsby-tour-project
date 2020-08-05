import React       from 'react'
import { graphql } from 'gatsby'
import Layout      from '../components/Layout'
import Title       from '../components/Title.styled'
import AniLink     from 'gatsby-plugin-transition-link/AniLink'

import styles   from '../css/blog.module.css'
import BlogCard from '../components/Blog/BlogCard'

const BlogListTemplate = (props) => {
  const { currentPage, numberOfPages } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages

  const nextPage = `/blogs/${ currentPage
                              + 1 }`
  const prevPage = currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`

  const { data } = props
  return (
    <Layout>
      <section className={ styles.blog }>
        <Title
          title="latest"
          subtitle="posts"
        />
        <div className={ styles.center }>
          { data.posts.edges.map( ({ node }) => (
            <BlogCard
              key={ node.id }
              blog={ node }
            />
          ) ) }
        </div>
        <section className={ styles.links }>
          {
            !isFirst && <AniLink
              fade
              to={prevPage}
              className={ styles.link }
            >prev</AniLink>
          }
          { Array.from( { length: numberOfPages },
            (_, index) => (
              <AniLink
                key={ index }
                fade
                to={ `/blogs/${ index
                                === 0 ? '' : index
                                             + 1 }` }
                className={ index
                            + 1
                            === currentPage
                  ? `${ styles.link } ${ styles.active }`
                  : `${ styles.link }` }
              >{ index
                 + 1 }</AniLink>
            ),
          ) }
          {
            !isLast && <AniLink
              fade
              to={ nextPage }
              className={ styles.link }
            >next</AniLink>
          }
        </section>
      </section>
    </Layout>
  )
}

export const getBlogs = graphql`
    query ($skip: Int!, $limit:Int!) {
        posts: allContentfulPost(limit: $limit, skip: $skip, sort: {fields: published, order: DESC}) {
            edges {
                node {
                    title
                    slug
                    id:contentful_id
                    published(formatString:"MMMM Do, YYYY")
                    image {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }

`

export default BlogListTemplate
