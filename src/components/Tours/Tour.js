import React       from 'react'
import GatsbyImage from 'gatsby-image'
import AniLink     from 'gatsby-plugin-transition-link/AniLink'

import styles    from '../../css/tour.module.css'
import { FaMap } from 'react-icons/all'

import PropTypes                   from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

const getImage = graphql`
    {
        file(relativePath:{eq:"defaultBcg.jpeg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const Tour = ({ tour }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { name, price, country, days, slug, images } = tour
  // let mainImage
  // if (images) {
  //   mainImage = images[0].fluid
  // } else {
  //   mainImage = img
  // }
  let mainImage = images ? images[0].fluid : img

  return (
    <article className={ styles.tour }>
      <div className={ styles.imgContainer }>
        <GatsbyImage
          fluid={ mainImage }
          className={ styles.img }
          alt={ slug }
        />
        <AniLink
          fade
          className={ styles.link }
          to={ `/tours/${ slug }/` }
        >details</AniLink>
      </div>
      <div className={ styles.footer }>
        <h3>{ name }</h3>
        <div className={ styles.info }>
          <h4 className={ styles.country }>
            <FaMap className={ styles.icon } />{ country || 'beautiful'
                                                 + ' country' }</h4>
          <div className={styles.details}>
            <h6>{days || "the beautifuliest"} days</h6>
            <h6>from ${price || "a good price"}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired
  })
}

export default Tour
