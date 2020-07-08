import { Global, css } from '@emotion/core'

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: lightgreen;
    -webkit-font-smoothing: antialiased;
  }

  img {
    max-width: 100%;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1,
  h2,
  h3 {
    text-align: center;
  }
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
