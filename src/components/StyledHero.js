import React           from 'react'
import styled          from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

const getImage = graphql`
    {
        file(relativePath:{eq:"defaultBcg.jpeg"}) {
            childImageSharp {
                fluid (maxWidth: 4160, quality: 90){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

const StyledHero = ({ img, className, children, home }) => {
  const data = useStaticQuery(getImage)

  return (
    <BackgroundImage
      className={ className }
      fluid={ img || data.file.childImageSharp.fluid }
      home={ home }
    >
      { children }
    </BackgroundImage>
  )
}

export default styled( StyledHero )`
min-height: ${ props => props.home ? `calc(100vh - 62px)` : `50vh` } ;
  background: ${ props => props.home
  ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))'
  : 'none' };
  background-position: center;
  background-size: cover;
  opacity: 1!important;
  display:flex;
  justify-content:center;
  align-items:center; 

`
