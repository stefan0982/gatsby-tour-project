import React              from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`
const UseStaticQuery = () => {
  const { site : {siteMetadata} } = useStaticQuery(getSiteData)
  console.log( siteMetadata )

  return (
    <div>
      <h1>Title: {siteMetadata.title}</h1>
      <h2>Title: {siteMetadata.author}</h2>
    </div>
  )
}

export default UseStaticQuery
