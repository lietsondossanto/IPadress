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
        <Menu ip={ip} lat={lat} lng={lng} emoji_flag={emoji_flag} />
      </nav>

      <main>
        <Dashboard
          ip={ip}
          country={country}
          region={region || 'Not found'}
          city={city || 'Not found'}
          lat={lat}
          lng={lng}
          asn={asn}
          timezone={timezone}
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
