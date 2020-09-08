import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({
  children,
  pageTitle = 'God in your Garden - Scott Hull',
  ...props
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
