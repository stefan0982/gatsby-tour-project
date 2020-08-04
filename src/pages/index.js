import React       from 'react'
import Layout      from '../components/Layout'
import Banner      from '../components/Banner'
import { graphql } from 'gatsby'
import About       from '../components/Home/About'
import Services    from '../components/Home/Services'
import StyledHero  from '../components/StyledHero'
import AniLink     from 'gatsby-plugin-transition-link/AniLink'

export default function Home({ data }) {
  console.log( data )

  return (
    <Layout>
      <StyledHero
        home
        img={ data.file.childImageSharp.fluid }
      >
        <Banner
          title="continue exploring"
          info={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptas!` }
        >
          <AniLink
            fade
            to="/tours"
            className="btn-white"
          >explore tours</AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  )
}

export const getImage = graphql`
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
