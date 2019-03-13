import React from 'react'
import s from 'styled-components'

import { BLUE, YELLOW } from '../../constants/colors'

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

const List = s.div`
  padding: 0 2rem 0 0;
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: row;
  right: 0;
  z-index: 1;

  @media screen and (max-width: 648px) {
    position: relative;
    padding: 0;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`

const SocialLink = s.a`
  color: ${BLUE} !important;
  font-size: 1.5rem;
  margin-right: 2rem;

  & :hover {
    color: ${YELLOW} !important;
  }

  @media screen and (max-width: 648px) {
    margin: 0 1rem 0 0;
  }
`

export default () => (
  <List>
    {links.map(({ icon, link, title }) => (
      <SocialLink key={icon} href={link} title={title}>
        <i className={`fa fa-${icon}`} />
      </SocialLink>
    ))}
  </List>
)
