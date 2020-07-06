import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const App = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main>
        <h1 className='title'>Welcome Page</h1>
      </main>

      <Footer />
    </>
  )
}

export default App
