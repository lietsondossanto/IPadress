import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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
