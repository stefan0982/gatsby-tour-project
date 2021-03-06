import React       from 'react'
import { graphql } from 'gatsby'
import Layout      from '../components/Layout'
import AniLink     from 'gatsby-plugin-transition-link/AniLink'

import styles                        from '../css/single-blog.module.css'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const getPost = graphql`
    query($slug:String!)  {
        post:contentfulPost(slug:{eq:$slug}) {
            title
            published(formatString:"MMMM Do, YYYY")
            text {
                json
            }
        }
    }
`

const BlogTemplate = ({ data }) => {
  const { title, published, text: { json } } = data.post
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return <div className="rich">
          <h3>This is awesome image</h3>
          <img
            width="400"
            src={node.data.target.fields.file['en-US'].url}
            alt=""
          />
          <p>images provided by stefan</p>
        </div>
      },
      "embedded-entry-block": node => {
        const { title, image, text } = node.data.target.fields
        return <div>
          <h1>This is other post : {title['en-US']}</h1>
          <img
            src={image['en-US'].fields.file['en-US'].url}
            width="400"
            alt={title}
          />
          {documentToReactComponents(text['en-US'])}
        </div>
      }
    }
  }
  return (
    <Layout>
      <section className={ styles.blog }>
        <div className={ styles.center }>
          <h1>{ title }</h1>
          <h4>published at: { published }</h4>
          <article className={styles.post}>
            { documentToReactComponents(json, options) }
          </article>
          <AniLink
            fade
            to="/blog"
            className="btn-primary"
          >go back</AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default BlogTemplate
