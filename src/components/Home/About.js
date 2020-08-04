import React from 'react'
import Title from '../Title.styled'

import Img                from 'gatsby-image'
import styles                      from '../../css/about.module.css'
import { graphql, useStaticQuery } from 'gatsby'

const getImage = graphql`
    {
        aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}) {
            childImageSharp {
                fluid(maxWidth:600){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getImage)
  return (
    <section className={ styles.about }>
      <Title
        title="about"
        subtitle="us"
      />
      <div className={ styles.aboutCenter }>
        <article className={ styles.aboutImg }>
          <div className={ styles.imgContainer }>
            <Img fluid={aboutImage.childImageSharp.fluid}  alt="awesome photo"/>
          </div>
        </article>
        <article className={ styles.aboutInfo }>
          <h4>explore the difference</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
             corporis cum dignissimos excepturi maiores omnis quas quisquam
             sapiente sed tenetur!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
             consequatur debitis distinctio eaque esse explicabo hic iure
             officiis ratione recusandae.</p>
          <button
            type="button"
            className="btn-primary"
          >read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
