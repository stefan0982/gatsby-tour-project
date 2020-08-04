import React, { Component } from 'react'
import { graphql, Link }    from 'gatsby'
import Layout               from '../components/Layout'
import StyledHero           from '../components/StyledHero'
import ContactForm          from '../components/Contact/Contact'

class Contact
  extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.file.childImageSharp.fluid} />
        <ContactForm/>
      </Layout>
    )
  }
}

export const getImage = graphql`
    {
        file(relativePath:{eq:"connectBcg.jpeg"}) {
            childImageSharp {
                fluid (maxWidth: 4160, quality: 90){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`


export default Contact