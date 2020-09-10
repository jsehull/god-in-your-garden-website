import Layout from '../components/Layout'
import ImageAndText from '../components/ImageAndText'
import CenterCol from '../components/CenterCol'

const music = () => {
  return (
    <Layout pageTitle='Solo Piano Music - Scott Hull'>
      <h1>MUSIC</h1>
      <ImageAndText
        id='bt'
        bg='#243354'
        color='#fff'
        title='Breaking Through'
        src='/images/music/bt-front-cover.jpeg'
        width='300px'
        alt='album cover'
        p1='Scott has created an inspirational and reflective solo piano album that you may enjoy as a listening companion with God in Your Garden. Time to Listen is a collection of eight spontaneous and new songs he recorded as he listened to what God was stirring in his Spirit.'
        p2='This seventy-minute album of piano music has been used by many to create a spiritual ambiance for home or work environments. The peaceful atmosphere it provides has also proven to be a comfort for quiet time, reading, relaxing, or sleeping. The hope is that Time to Listen will inspire you to greater wonder and creativity as you learn to enjoy doing life with God in your Garden.'
      />
      <ImageAndText
        id='ttl'
        bg='#243354'
        color='#fff'
        title='Time to Listen'
        src='/images/music/ttl-front-cover.jpeg'
        width='300px'
        alt='album cover'
        p1='Scott has created an inspirational and reflective solo piano album that you may enjoy as a listening companion with God in Your Garden. Time to Listen is a collection of eight spontaneous and new songs he recorded as he listened to what God was stirring in his Spirit.'
        p2='This seventy-minute album of piano music has been used by many to create a spiritual ambiance for home or work environments. The peaceful atmosphere it provides has also proven to be a comfort for quiet time, reading, relaxing, or sleeping. The hope is that Time to Listen will inspire you to greater wonder and creativity as you learn to enjoy doing life with God in your Garden.'
      />
      <CenterCol
        id='radio'
        bg='#000'
        color='#fff'
        title='Radio'
        src='/images/music/whisperings-radio.gif'
        width='450px'
        alt='Whisperings Solo Piano Radio'
        p='Scott is also one of many artists featured on '
        href='https://www.solopianoradio.com/'
        aText='Whisperings: Solo Piano Radio'
      />
    </Layout>
  )
}

export default music
