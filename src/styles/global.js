import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    min-width: 100%;
  }

  html, body {
    text-align: justify;
    text-justify: inter-word;
    text-indent: 2em;
    background-color: ${(({ theme }) => theme.colors.background)};
    color: ${(({ theme }) => theme.colors.text)};
    font-family: Arial, Helvetica, sans-serif;
  }
`
