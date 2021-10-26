import React from 'react'
import Link from 'next/link'

import { Wrapper } from './styles'

const Menu = () => {
  return (
    <>
      <Wrapper>
        <nav>
          <Link href="/"><a target="_self" className="logo">ipadress.net</a></Link>
        </nav>
      </Wrapper>
    </>
  )
}

export default Menu
