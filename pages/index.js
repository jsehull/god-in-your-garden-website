import styled from '@emotion/styled'
import theme from '../styles/theme'
import Layout from '../components/Layout'
import BookHero from '../components/BookHero'
import ImageAndText from '../components/ImageAndText'
import Who from '../components/Who'
import Order from '../components/Order'
import Reviews from '../components/Reviews'
import CenterCol from '../components/CenterCol'

const Banner = styled.p`
  margin: 0;
  padding: 10px 0;
  background: #fff;
  color: #202020;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`

const index = () => {
  return (
    <Layout>
      <a href='/music'>
        <Banner>GET NEW ALBUM</Banner>
      </a>
      <BookHero />
      <ImageAndText
        even
        id='book'
        bg='#91d44b'
        title='About the book'
        src='/images/art/front-cover.jpeg'
        width='200px'
        alt='God in Your Garden'
        p1='God in Your Garden reveals the opportunity of a lifetime: God is eagerly waiting to live your life together with you—right where you are! You can know and experience God in the unique setting where you live, in a way few ever imagined possible.'
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
        p2='As a pastor, brother, and friend, Scott has served in Texas, Pennsylvania, California, Wisconsin, and Connecticut. Scott and Susan currently reside in North Carolina and they have 3 married children with 9 (so far) grandchildren.'
      />
      <CenterCol
        id='music'
        bg='#243354'
        color='#fff'
        title='Solo piano albums'
        src='/images/music/multi-cd-3.png'
        width='500px'
        alt="Scott's solo piano albums"
        p='Scott has beautifully recorded inspirational, easy-listening solo piano albums that you may enjoy as companions with God in Your Garden. Visit '
        href='/music'
        aText="Scott's music page."
      />
      <Reviews />
    </Layout>
  )
}

export default index
