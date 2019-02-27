import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import s from 'styled-components'

const StyledImg = s(Img)`
  width: 30px;
  height: 30px;
  margin-right: 0px;
  filter: brightness(0) invert(1);
`

export default () => (
  <StaticQuery
      query={graphql`
        query HeadingQuery {
          file(relativePath: { eq: "logoText.png" }) {
            childImageSharp {
              fixed(width: 375, height: 64) {
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
