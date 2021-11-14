import React from 'react'
import Link from 'next/link'

import { Wrapper, MenuMain, MenuInfo } from './styles'

const Menu = ({ ip, emoji_flag, lat, lng }) => {
  return (
    <>
      <Wrapper>
        <MenuInfo>
          <p>Seu IP: <span>{ip}</span></p>
          <p>País: <span>{emoji_flag}</span></p>
          <p>Lat: <span>{lat}</span></p>
          <p>Lng: <span>{lng}</span></p>
        </MenuInfo>

        <MenuMain>
          <nav>
            <Link href="/alldata">
              <a target="_self" className="logo">
                IPadress
              </a>
            </Link>
          </nav>
        </MenuMain>
      </Wrapper>
    </>
  )
}

export default Menu
