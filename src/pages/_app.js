import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './../styles/global'
import theme from './../styles/theme'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="nprogress.js"></script>
        <link rel="stylesheet" href="nprogress.css" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
