const path = require( 'path' )

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql( `
    {
  tours:allContentfulTour{
    edges {
      node {
        slug
      }
    }
  }
  posts: allContentfulPost {
    edges {
      node {
        slug
      }
    }
  }
}
  ` )
  data.tours.edges.forEach( edge => {
    // const slug = encodeURI( edge.node.name )
    createPage( {
      path     : `/tours/${ edge.node.slug }`,
      component: path.resolve( `./src/templates/TourTemplate.js` ),
      context  : {
        slug: edge.node.slug, // slug: 'new-york'
      },
    } )
  } )
  data.posts.edges.forEach( edge => {
    // const slug = encodeURI( edge.node.name )
    createPage( {
      path     : `/blog/${ edge.node.slug }`,
      component: path.resolve( `./src/templates/BlogTemplate.js` ),
      context  : {
        slug: edge.node.slug,
      },
    } )
  } )

  // amount of posts
  const posts = data.posts.edges
  const postsPerPage = 5
  // how many pages
  const numberOfPages = Math.ceil( posts.length
                                   / postsPerPage )

  const pages = Array.from( { length: numberOfPages } ).forEach( (_, index) => {
    createPage( {
      path     : index
                 === 0 ? `/blogs` : `/blogs/${ index
                                               + 1 }`,
      component: path.resolve( `./src/templates/BlogListTemplate.js` ),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numberOfPages,
        currentPage: index + 1
      }
    } )
  } )
}