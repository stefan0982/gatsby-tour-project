import React, { Component } from 'react'
import { Link }             from 'gatsby'
import Layout               from '../components/Layout'

class Contact
  extends Component {
  render() {
    return (
      <Layout>
        Hello from contact
        <Link to="/">Main</Link>

      </Layout>
    )
  }
}

export default Contact