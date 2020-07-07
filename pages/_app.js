// import { ThemeProvider, CSSReset } from '@chakra-ui/core'
// import GlobalStyle from '../global-styles'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* <ThemeProvider> */}
      {/* <GlobalStyle> */}
      <Component {...pageProps} />
      {/* </GlobalStyle> */}
      {/* </ThemeProvider> */}
    </>
  )
}

export default MyApp
