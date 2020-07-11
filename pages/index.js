import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ImageAndText from '../components/ImageAndText'
import Who from '../components/Who'
import Order from '../components/Order'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
// import theme from '../theme'

const index = () => {
  return (
    <>
      <Head>
        <title>God in your Garden by Scott Hull</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero />
      <ImageAndText
        id='book'
        bg='#a1c956'
        title='About the book'
        src='/cover.jpeg'
        width='200px'
        alt='God in Your Garden'
        p1='God in your Garden reveals the opportunity of a lifetime: God is eagerly waiting to live your life together with you—right where you are! You can know and experience God in the unique setting where you live, in a way few ever imagined possible.'
        p2=' Exploring various scenes from the original “Garden of Eden” story, this book brings to life your individual living-space God designed for you and where He chooses to do life together with you.'
      />
      <Who />
      <Order />
      <ImageAndText
        reverse
        id='author'
        bg='#095c30'
        color='#bfdda9'
        title='About the author'
        src='/author.jpeg'
        width='300px'
        alt='author'
        p1='Scott and Susan Hull have been walking with God in Christian ministry for nearly four decades. They desire for people to recognize God’s voice for themselves and to experience their own unique relationship with Him. Their heart has been to see God’s sons and daughters raised (not duplicated), blessed (not used), and released (not enlisted).'
        p2='As a pastor, brother, and friend, Scott has served in Texas, Pennsylvania, California, Wisconsin, and Connecticut. Scott and Susan currently reside in North Carolina and they have 3 married children with 7 (so far) grandchildren.'
      />
      <Reviews />
      <Footer />
    </>
  )
}

export default index
