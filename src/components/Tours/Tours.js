import React, { Component }        from 'react'
import TourList                    from './TourList'
import { useStaticQuery, graphql } from 'gatsby'

const getTours = graphql`
    {
        tours:allContentfulTour {
            totalCount
            edges {
                node {
                    price
                    name
                    slug
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
                }
            }
        }
    }
`

const Tours = () => {
  const { tours } = useStaticQuery( getTours )
    return (

      <TourList tours={ tours } />
    )
  }

export default Tours