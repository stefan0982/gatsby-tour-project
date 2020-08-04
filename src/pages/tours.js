import React, { Component } from 'react'
import Layout               from '../components/Layout'
import { graphql }          from 'gatsby'
import StyledHero           from '../components/StyledHero'

class Tours
  extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.file.childImageSharp.fluid}/>
      </Layout>
    )
  }
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


export default Tours