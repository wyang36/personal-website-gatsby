import * as React from "react"
import Layout from '../components/layout'

// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
}
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout>
        <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
          <h1>Hello, I'm Kira.</h1>
        </div>
      </Layout>
    </main>
  )
}

export default IndexPage
