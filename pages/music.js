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
          id='the-once-and-future-garden'
          title='The Once and Future Garden'
          src='/images/music/ofg-front-cover.jpeg'
          alt='album cover'
          p1='Scott recorded these 12 original solo piano songs to artistically explore and develop some of the major themes in his book, God In Your Garden. And each of the song titles comes from a phrase or idea out of the Creation Story found in the first three chapters of Genesis. For example:'
          p2='Fingerprint of God - “God created humankind in His Own image” (Gen. 1:27)'
          p3='Make It Better - “God placed them in the garden to care for it” (Gen. 2:15)'
          p4='Where Are You - “God called to them and said, ‘Where are you?’” (Gen. 3:9)'
        />
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
        p='Scott is also one of the many fine artists featured on '
        href='https://www.solopianoradio.com/'
        aText='Whisperings: Solo Piano Radio'
      />
    </Layout>
  )
}

export default music
