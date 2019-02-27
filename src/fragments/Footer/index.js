import React from 'react'
import s from 'styled-components'

import { BLACK, WHITE } from '../../constants/colors'

import Logo from './Logo'
import Text from './Text'
import Links from './Links'
import Social from './Social'

const Wrapper = s.footer`
  background: ${BLACK};
  color: ${WHITE};
`

export const Footer = () => (
  <Wrapper>
    <div className="container">
      <Logo />
      <Text />
      <Links />
      <Social />
    </div>
  </Wrapper>
)
