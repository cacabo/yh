import React from 'react'
import s from 'styled-components'

import Logo from './Logo'
import Links from './Links'

import { WHITE, BORDER } from '../../constants/colors'

const Nav = s.nav`
  top: 0px;
  position: fixed;
  width: 100%;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  background: ${WHITE};
  box-shadow: 0px 0.125rem 0.1rem rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid ${BORDER};
  display: flex;
  z-index: 1035;
`

const NavSpacer = s.div`
  height: 54px;
`

export const Header = () => ( // eslint-disable-line
  <>
    <NavSpacer id="top" />
    <Nav>
      <a href="/">
        <Logo />
      </a>

      <Links />
    </Nav>
  </>
)
