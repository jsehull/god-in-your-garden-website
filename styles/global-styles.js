import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import theme from '../styles/theme'

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
    color: ${theme.colors.black};
    font-family: 'Inter', sans-serif;
  }

  @font-face {
    font-family: 'Bodoni';
    src: url('/fonts/Bodoni-11-Book.otf') format('opentype');
  }

  @font-face {
    font-family: 'Bodoni-italic';
    src: url('/fonts/Bodoni-italic.ttf') format('truetype');
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
    color: ${theme.colors.greenLetters};
    text-align: center;
    font-weight: normal;
  }

  h1,
  h2 {
    font-family: 'Bodoni';
  }

  h2 {
    margin-top: 0;
    font-size: 2em;
    font-weight: 700;
  }

  a {
    color: ${theme.colors.black};
    text-decoration: none;
  }
`

export const SpanOrange = styled.span`
  color: ${theme.colors.orangeLetters};
  font-weight: bold;
  font-style: italic;
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
