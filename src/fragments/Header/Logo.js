import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import s from 'styled-components'

const StyledImg = s(Img)`
  width: 36px;
  height: 36px;
  margin-top: 9px;
  margin-right: 6px;
  margin-bottom: 0;

  img {
    margin-bottom: 0;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        file(relativePath: { eq: "logoText.png" }) {
          childImageSharp {
            fixed(width: 211, height: 36) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledImg fixed={data.file.childImageSharp.fixed} />
    )}
  />
)
