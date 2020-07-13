import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
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
      ${theme.colors.blueSky} 2%
    );
    color: ${theme.colors.greenDarkest};
    -webkit-font-smoothing: antialiased;
  }

  @font-face {
    font-family: 'Bodoni';
    src: local('/public/fonts/Bodoni-roman.ttf') format('truetype');
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
    font-family: 'Bodoni';
    text-align: center;
  }

  h2 {
    margin-top: 0;
    font-size: 2em;
  }

  a {
    color: ${theme.colors.greenDarkest};
    text-decoration: none;
  }
`

export const SpanOrange = styled.span`
  color: ${theme.colors.orangeDark};
  font-weight: bold;
  font-style: italic;
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
