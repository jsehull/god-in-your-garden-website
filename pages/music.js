import Layout from '../components/Layout'
import CenterCol from '../components/CenterCol'
import Album from '../components/Albums'
import Section from '../components/Section'

const music = () => {
  return (
    <Layout pageTitle='Solo Piano Music - Scott Hull'>
      <Section id='albums' bg='#243354' color='#fff'>
        <h2>Solo Piano Albums</h2>
        <Album
          id='breaking-through'
          title='Breaking Through'
          src='/images/music/bt-front-cover.jpeg'
          alt='album cover'
          p1="Captain, why are we out here chasing comets? We have a saboteur aboard. Congratulations - you just destroyed the Enterprise. Mr. Crusher, ready a collision course with the Borg ship. This is not about revenge. This is about justice. The Federation's gone; the Borg is everywhere! The unexpected is our normal routine. Mr. Worf, you sound like a man who's asking his friend if he can start dating his sister. Did you come here for something in particular or just general Riker-bashing? Smooth as an android's bottom, eh, Data? Computer, lights up!"
          p2='Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. Yesterday I did not know how to eat gagh.'
        />
        <Album
          id='time-to-listen'
          title='Time to Listen'
          src='/images/music/ttl-front-cover.jpeg'
          alt='album cover'
          p1='Time to Listen is a collection of eight spontaneous and new songs he recorded as he listened to what God was stirring in his Spirit.'
          p2='This seventy-minute album of piano music has been used by many to create a spiritual ambiance for home or work environments. The peaceful atmosphere it provides has also proven to be a comfort for quiet time, reading, relaxing, or sleeping.'
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
