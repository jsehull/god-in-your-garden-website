import Layout from '../components/Layout'
import CenterCol from '../components/CenterCol'
import Album from '../components/Albums'
import Section from '../components/Section'
import MusicHero from '../components/MusicHero'

const music = () => {
  return (
    <Layout pageTitle='Solo Piano Music - Scott Hull'>
      <MusicHero />
      <Section id='albums' bg='#243354' color='#fff'>
        <h2>Solo Piano Albums</h2>
        <Album
          id='breaking-through'
          title='Breaking Through'
          src='/images/music/bt-front-cover.jpeg'
          alt='album cover'
          p1='Scott recorded Breaking Through with Jesus’ words found in Matthew 11 as the setting.'
          p2='Jesus said, “The blind receive sight, the lame walk, the lepers are made clean, the deaf hear, the dead are raised, and the poor are given Good News. Blessed is anyone who is not offended because of Me... The Kingdom of Heaven is forcefully advancing.” (Matthew 11:5-6, 12)'
          p3='Jesus beautifully summarized Heaven’s works He was doing for all to hear and see. In Breaking Through, Scott artistically portrays a musical feel for each of those works and the "breaking through” nature of the Kingdom of Heaven.'
        />
        <Album
          id='time-to-listen'
          title='Time to Listen'
          src='/images/music/ttl-front-cover.jpeg'
          alt='album cover'
          p1='Time to Listen is a collection of eight spontaneous and new songs Scott recorded as he listened to what God was stirring in his Spirit.'
          p2='This seventy-minute album of piano music has been used by many to create a spiritual ambiance for home or work environments. The peaceful atmosphere it provides has also proven to be a comfort for quiet time, reading, relaxing, or sleeping. The hope is that Time to Listen will inspire you to greater wonder and creativity as you learn to enjoy doing life with God in Your Garden.'
        />
      </Section>
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
