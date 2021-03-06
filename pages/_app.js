import SimpleReactLightbox from 'simple-react-lightbox'
import GlobalStyle from '../styles/global-styles'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <SimpleReactLightbox>
        <GlobalStyle />
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </>
  )
}

export default MyApp
