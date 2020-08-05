import React          from 'react'
import { graphql }    from 'gatsby'
import Layout         from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { FaMoneyBillWave, FaMap } from 'react-icons/all'
import styles                     from '../css/template.module.css'
import Day                        from '../components/SingleTour/Day'

const TourTemplate = ({ data }) => {
  const { name, price, country, days, description: { description }, images, start, journey } = data.contentfulTour
  const [ mainImage, ...tourImages ] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((img, i) => (
              <Img fluid={img.fluid} key={i} alt={name} className={styles.image}/>
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon}/>
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon}/>
              { country }
            </p>
          </div>
          <h4>starts on: {start}</h4>
          <h4>duration: {days} days</h4>
          <p className={styles.desc}>
            {description}
          </p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((jrn,i) => (
              <Day key={i} day={jrn.day} info={jrn.info} />
            ))}
          </div>
          <AniLink fade to="/tours" className="btn-primary">Back to tours</AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const getTour = graphql`
    query($slug: String!) {
        contentfulTour(slug: { eq: $slug }) {
            name
            price
            start(formatString: "dddd MMMM Do, YYYY", locale: "ro")
            description {
                description
            }
            country
            journey {
                day
                info
            }
            images {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`
export default TourTemplate
