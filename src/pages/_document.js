import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <meta charSet="utf-8" />
          <meta name="author" content="Lietson dos santos" />
          <meta
            name="description"
            content="Qual é o seu endereço IPv4 ou IPv6 público, As informações do meu endereço IP mostram sua localização; cidade, região, país, ..."
          />
          <meta
            name="keywords"
            content="ip adress, my ip, show my ip, ip, whoami, ip, my ip adress, what is my ip, meu endereço ip, meu ip, qual é o meu ip"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
