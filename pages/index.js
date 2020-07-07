import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Book from '../components/Book'
import Author from '../components/Author'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const index = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Hero
        title='God in your Garden'
        descrip='He Wants to Do Life with You'
        author='by Scott Hull'
      />
      <Book />
      <Author />
      <Reviews />
      <Footer />
    </>
  )
}

export default index
