import { Global, css } from '@emotion/core'
import theme from './theme'

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${theme.colors.blueSky};
    background: linear-gradient(
      0deg,
      ${theme.colors.grassGreen} 2%,
      ${theme.colors.yellow} 2%
    );
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

  h1,
  h2 {
    margin-top: 0;
  }

  h2 {
    font-size: 2em;
  }
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
