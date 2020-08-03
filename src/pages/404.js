import React  from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

import Banner from '../components/Banner'
import styles from '../css/error.module.css'

const ErrorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <Link to="/" className="btn-white">Back to Home</Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
