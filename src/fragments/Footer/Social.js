import React from 'react'
import s from 'styled-components'

import { BLUE } from '../../constants/colors'

const links = [
  {
    icon: 'envelope',
    link: 'mailto:hello@youthhack.net',
    title: 'Email YouthHack',
  },
  {
    icon: 'twitter',
    link: 'https://twitter.com/youthhack_',
    title: 'YouthHack on Twitter',
  },
  {
    icon: 'medium',
    link: 'https://medium.com/youthhack-stories',
    title: 'YouthHack on Medium',
  },
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/YouthHack/',
    title: 'YouthHack on Facebook',
  },
]

const List = s.ul`
  list-style: none;
  padding: 0 2rem;
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  right: 0;
  z-index: 1;

  li {
    margin-left: 1rem;
  }

  li a:hover {
    color: ${BLUE};
  }

  @media screen and (max-device-width: 1024px) {
    position: relative;
    padding: 0;
    flex-direction: row-reverse;
    justify-content: flex-end;
    width: 100%;

    li {
      margin: 0 1rem 0 0;
    }
  }

  @media screen and (max-width: 648px) {
    position: relative;
    padding: 0;
    flex-direction: row-reverse;
    justify-content: flex-end;

    li {
      margin: 0 1rem 0 0;
    }
  }
`

export default () => (
  <List>
    {links.map(({ icon, link, title }) => (
      <li key={icon}>
        <a href={link} title={title}>
          <i className={`fa fa-${icon}`} />
        </a>
      </li>
    ))}
  </List>
)
