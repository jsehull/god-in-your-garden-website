import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ImageAndText from '../components/ImageAndText'
import Order from '../components/Order'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const index = () => {
  return (
    <>
      <Head>
        <title>God in Your Garden by Scott Hull</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero
        title='God in your Garden'
        descrip='He Wants to Do Life with You'
        author='by Scott Hull'
      />
      <ImageAndText
        id='book'
        bg='forestgreen'
        title='About the book'
        src='https://via.placeholder.com/200x300'
        alt='God in Your Garden'
        p1='God in your Garden reveals the opportunity of a lifetime: God is eagerly waiting to live your life together with you—right where you are! You can know and experience God in the unique setting where you live, in a way few ever imagined possible.'
        p2=' Exploring various scenes from the original “Garden of Eden” story, this book brings to life your individual living-space God designed for you and where He chooses to do life together with you.'
      />
      <Order />
      <ImageAndText
        reverse
        id='author'
        bg='forestgreen'
        title='About the author'
        src='https://via.placeholder.com/300x200'
        alt='Scott Hull'
        p1='Scott and Susan Hull have been walking with God in Christian ministry for nearly four decades. They desire for people to recognize God’s voice for themselves and to experience their own unique relationship with Him. Their heart has been to see God’s sons and daughters raised (not duplicated), blessed (not used), and released (not enlisted).'
        p2='As a pastor, brother, and friend, Scott has served in Texas, Pennsylvania, California, Wisconsin, and Connecticut. Scott and Susan currently reside in North Carolina and they have 3 married children with 7 (so far) grandchildren.'
      />
      <Reviews />
      <Footer />
    </>
  )
}

export default index
