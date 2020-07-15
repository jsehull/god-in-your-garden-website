import Head from 'next/head'
import Hero from '../components/Hero'
import ImageAndText from '../components/ImageAndText'
import Who from '../components/Who'
import Order from '../components/Order'
import Logos from '../components/Logos'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const index = () => {
  return (
    <>
      <Head>
        <title>God in your Garden by Scott Hull</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <ImageAndText
        id='book'
        bg='#91d44b'
        title='About the book'
        src='/images/art/front-cover.jpeg'
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
        src='/images/author.jpeg'
        width='300px'
        alt='author'
        p1='Scott and Susan Hull have been walking with God in Christian ministry for nearly four decades. They desire for people to recognize God’s voice for themselves and to experience their own unique relationship with Him. Their heart has been to see God’s sons and daughters raised (not duplicated), blessed (not used), and released (not enlisted).'
        p2='As a pastor, brother, and friend, Scott has served in Texas, Pennsylvania, California, Wisconsin, and Connecticut. Scott and Susan currently reside in North Carolina and they have 3 married children with 7 (so far) grandchildren.'
      />
      <ImageAndText
        id='music'
        bg='#243354'
        color='#fff'
        title='Solo Piano Album'
        src='/images/music/album-cover.jpeg'
        width='300px'
        alt='album cover'
        p1='Scott has created an inspirational and reflective solo piano album that you may enjoy as a listening companion with God in Your Garden. Time to Listen is a collection of eight spontaneous and new songs he recorded as he listened to what God was stirring in his Spirit.'
        p2='This seventy-minute album of piano music has been used by many to create a spiritual ambiance for home or work environments. The peaceful atmosphere it provides has also proven to be a comfort for quiet time, reading, relaxing, or sleeping. The hope is that Time to Listen will inspire you to greater wonder and creativity as you learn to enjoy doing life with God in your Garden.'
      />
      <Reviews />
      <Footer />
    </>
  )
}

export default index
