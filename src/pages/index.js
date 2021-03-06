import React         from 'react'
import Layout        from '../components/Layout'
import Banner        from '../components/Banner'
import { graphql }   from 'gatsby'
import About         from '../components/Home/About'
import Services      from '../components/Home/Services'
import StyledHero    from '../components/StyledHero'
import AniLink       from 'gatsby-plugin-transition-link/AniLink'
import FeaturedTours from '../components/Home/FeaturedTours'
import SEO           from '../components/SEO'

export default function Home({ data }) {

  return (
    <Layout>
      <SEO title="home" description="this is description" />
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
      <FeaturedTours/>
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
