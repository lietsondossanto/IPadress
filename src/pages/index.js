import React from 'react'
import Head from 'next/head'

import { Menu, Dashboard, Wording, Footer } from './../../components/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ipadress | Meu endereço IP</title>
      </Head>

      <nav>
        <Menu />
      </nav>

      <main>
        <Dashboard />
        <Wording />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
