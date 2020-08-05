import React from 'react'
import Tour from '../Tours/Tour'
import { graphql, useStaticQuery } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Title from '../Title.styled'

import styles from '../../css/items.module.css'

const getFeaturedTours = graphql`
    {
        featuredTours:allContentfulTour(filter:{featured:{eq:true}}) {
            totalCount
            edges {
                node {
                    price
                    name
                    description {
                        description
                    }
                    contentful_id
                    country
                    images {
                        fluid {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                    days
                    slug
                }
            }
        }
    }
`

const FeaturedTours = () => {
  const { featuredTours } = useStaticQuery( getFeaturedTours )
  return (
    <section className={ styles.tours }>
      <Title
        title="featured"
        subtitle="tours"
      />
      <div className={ styles.center }>
        { featuredTours.edges.map( ({ node }) => (
          <Tour
            key={ node.contentful_id }
            tour={ node }
          />
        ) ) }
      </div>
      <AniLink
        fade
        to="/tours"
        className="btn-primary"
      >
        All tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
