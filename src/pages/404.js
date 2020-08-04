import React  from 'react'
import Layout from '../components/Layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


import Banner from '../components/Banner'
import styles from '../css/error.module.css'

const ErrorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink to="/" className="btn-white">Back to Home</AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
