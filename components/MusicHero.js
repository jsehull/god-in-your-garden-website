import styled from '@emotion/styled'
import theme from '../styles/theme'

const StyledSection = styled.section`
  margin: 0 auto;
  padding: 1em 1em 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${theme.colors.blueSky};
  text-align: center;

  @media (min-width: 1023px) {
    padding-top: 5em;
  }
`

const Title = styled.h1`
  margin: 0;
  font-family: Bodoni;
  font-size: 4em;
  font-weight: bold;
  color: ${theme.colors.greenLetters};
  line-height: 1.1em;

  @media (min-width: 900px) {
    font-size: 6em;
  }
`

const OutNow = styled.p`
  padding: 10px;
  max-width: 305px;
  color: ${theme.colors.OFGblack};
  background: ${theme.colors.white};
  font-size: 1.3em;
  font-weight: bold;

  @media (min-width: 575px) {
    padding: 15px;
    width: 100%;
    font-size: 1.5em;
  }
`

const Covers = styled.div`
  margin: 10px auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  max-width: 850px;

  img {
    max-width: 400px;
    width: 100%;
    box-shadow: 3px 3px 10px 0 #000;

    &:nth-child(2) {
      margin-top: 50px;
      margin-left: 0;
    }
  }

  @media (min-width: 900px) {
    flex-flow: row;
    justify-content: space-between;

    img:nth-child(2) {
      margin-top: 0;
      margin-left: 50px;
    }
  }
`

const Tree = styled.img`
  width: 100px;
  margin-top: 50px;
`

const MusicHero = () => {
  return (
    <StyledSection>
      <Title>The Once and Future Garden</Title>
      <a href='#the-once-and-future-garden'>
        <OutNow>NEW ORIGINAL ALBUM</OutNow>
      </a>
      <Covers>
        <img src='/images/music/ofg-front-cover.jpeg' alt='album cover front' />
        <img src='/images/music/ofg-back-cover.jpeg' alt='album cover back' />
      </Covers>
      <Tree src='/images/art/tree.jpeg' alt='tree logo' />
    </StyledSection>
  )
}

export default MusicHero
