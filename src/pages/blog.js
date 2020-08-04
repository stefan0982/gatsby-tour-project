import React       from 'react'
import Layout      from '../components/Layout'
import { graphql } from 'gatsby'
import StyledHero  from '../components/StyledHero'

const Blog = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.file.childImageSharp.fluid}/>

    </Layout>
  )
}

export const getImage = graphql`
    {
        file(relativePath:{eq:"blogBcg.jpeg"}) {
            childImageSharp {
                fluid (maxWidth: 4160, quality: 90){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`


export default Blog
