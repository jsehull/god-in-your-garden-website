import styled from '@emotion/styled'
import theme from '../styles/theme'

const StyledSection = styled.section`
  margin: 0 auto;
  padding: 3em 1em 4em;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: no-repeat url('/images/music/bt-bg.jpeg'),
    ${theme.colors.bluepotDark};
  background-size: cover;
  background-position: 50% 50%;
  text-align: center;

  @media (min-width: 1023px) {
    padding: 8em 1em 9em;
  }
`
const Title = styled.h1`
  margin: 0;
  font-family: 'Permanent Marker', cursive;
  font-size: 4em;
  color: ${theme.colors.blueBT};
  line-height: 1.1em;
  text-shadow: 5px 3px 10px #000;

  @media (min-width: 900px) {
    font-size: 6em;
  }
`

const OutNow = styled.p`
  width: 275px;
  color: ${theme.colors.greenLetters};
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 2px 1px 1px ${theme.colors.white};

  @media (min-width: 575px) {
    width: 100%;
    font-size: 2em;
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

const MusicHero = () => {
  return (
    <StyledSection>
      <Title>Breaking Through</Title>
      <OutNow>NEW ORIGINAL ALBUM - now available</OutNow>
      <Covers>
        <img src='/images/music/bt-front-cover.jpeg' alt='album cover front' />
        <img src='/images/music/bt-back-cover.jpeg' alt='album cover back' />
      </Covers>
    </StyledSection>
  )
}

export default MusicHero
