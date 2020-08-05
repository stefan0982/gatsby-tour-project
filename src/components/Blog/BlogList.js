import React    from 'react'
import BlogCard from './BlogCard'
import Title from '../Title.styled'

import styles                      from '../../css/blog.module.css'
import { graphql, useStaticQuery } from 'gatsby'

const getPost = graphql`
    {
        posts: allContentfulPost(sort: {fields: createdAt, order: DESC}) {
            edges {
                node {
                    slug
                    title
                    published(formatString: "Do MMMM, YYYY", locale: "ro")
                    createdAt(formatString: "LLLL", locale: "ro")
                    id: contentful_id
                    image {
                        fluid {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
            totalCount
        }
    }

`

const BlogList = () => {
  const { posts } = useStaticQuery(getPost)
  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs" />
      <div className={styles.center}>
        {posts.edges.map(({node}) => (
          <BlogCard key={node.id} blog={node} />
        ))}
      </div>
    </section>
  )
}

export default BlogList
