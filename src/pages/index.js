import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello world!</h1>
    <p>My name is David Mai and I am a Full stack software developer.</p>
    <p>Looking forward to this Hackathon!!!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
