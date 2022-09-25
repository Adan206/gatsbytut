import React from "react"
import { graphql } from "gatsby"

function Testing({ data }) {
  const description = data.site.info.description
  return (
    <div>
      <h1>TESTING</h1>
      <h4>Description: {description}</h4>
    </div>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

export default Testing
