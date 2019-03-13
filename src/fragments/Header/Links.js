import React from 'react'
import s from 'styled-components'

import { BLUE, YELLOW } from '../../constants/colors'

const links = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'About',
    url: '/about',
  },
  {
    text: 'Ventures',
    url: '/ventures',
  },
  {
    text: 'Startup School',
    url: '/startup-school',
  },
  {
    text: 'Blog',
    url: 'https://medium.com/youthhack-stories',
  },
  {
    text: 'Get Involved',
    url: '/get-involved',
  },
]

const Links = s.div`
  flex: 1;
  text-align: right;

  a {
    display: inline-block;
    color: ${BLUE} !important;
    margin-bottom: 0;
    padding: 0.7rem 0;
    margin-left: 1.5rem;

    &.active,
    &:hover,
    &:active {
      color: ${YELLOW} !important;
    }
  }
`

export default () => (
  <Links>
    {links.map(({ text, url }) => (
      <a key={text} href={url}>{text}</a>
    ))}
  </Links>
)
