import React from 'react'
import Head from 'next/head'

import {
  Menu,
  Dashboard,
  Input,
  Wording,
  Footer
} from './../../components/index'
import ipData from './../services/ipData'

export default function Home() {
  let {
    ip,
    country,
    region,
    city,
    lat,
    lng,
    asn,
    timezone,
    emoji_flag,
    setIpAdress,
    handleSearchIp
  } = ipData()

  return (
    <div>
      <Head>
        <title>ipadress | Meu endereço IP</title>
      </Head>

      <nav>
        <Menu
          ip={ip || 'Not found'}
          lat={lat || 'Not found'}
          lng={lng || 'Not found'}
          emoji_flag={emoji_flag || 'Not found'}
        />
      </nav>

      <main>
        <Dashboard
          ip={ip || 'Not found'}
          country={country || 'Not found'}
          region={region || 'Not found'}
          city={city || 'Not found'}
          lat={lat || 'Not found'}
          lng={lng || 'Not found'}
          asn={asn || 'Not found'}
          timezone={timezone || 'Not found'}
          emoji_flag={emoji_flag}
        />
        <Input setIpAdress={setIpAdress} handleSearchIp={handleSearchIp} />
        <Wording />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
