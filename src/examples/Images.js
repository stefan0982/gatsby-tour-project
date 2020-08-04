import React                       from 'react'
import Img                         from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styled                      from 'styled-components'
import img                         from '../images/connectBcg.jpeg'

const getImages = graphql`
    {
        fixedImg:file(relativePath:{eq:"icon.jpg"}) {
            childImageSharp {
                fixed(width:300, height:300, grayscale: true) {
                   ...GatsbyImageSharpFixed
                }
            }
        }
        fluidImg:file(relativePath:{eq:"icon.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const Images = () => {
  const { fixedImg, fluidImg } = useStaticQuery(getImages)
  return (
    <Wrapper>
      <article className="basic">
        <h3>Basic image</h3>
        <img
          src={ img }
          alt="basic"
          height="500"
          width="500"
        />
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Img fixed={fixedImg.childImageSharp.fixed}/>
      </article>
      <article>
        <h3>fluid img/svg</h3>
        <Img fluid={fluidImg.childImageSharp.fluid}/>

      </article>
      Hello from images
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`

export default Images
