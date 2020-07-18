import styled from '@emotion/styled'
import theme from '../theme'
import { SpanOrange } from '../global-styles'
import Header from './Header'
import Button from './Button'

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

const Title = styled.h1`
  margin: 75px 0 50px;
  color: ${theme.colors.greenLetters};
  font-size: 5em;
  line-height: 0.6em;
  letter-spacing: -2px;
`

const God = styled.span`
  font-size: 1.85em;
  letter-spacing: -5px;
`

const Italics = styled(SpanOrange)`
  margin-left: -50px;
  font-size: 0.4em;
  font-weight: 200;
  letter-spacing: 0px;
`

const Description = styled.p`
  margin: 10px 0 20px;
  font-family: Bodoni;
  font-size: 1.7em;
`

const Author = styled.p`
  margin: 0 auto 60px;
  font-size: 1.25em;
`

const Garden = styled.img`
  margin-top: 50px;
  width: 100%;
  max-width: 1400px;
`

const Hero = () => {
  return (
    <StyledSection bg={theme.colors.blueSky}>
      <Header />
      <Title>
        <God>God</God> <br />
        <Italics>in your</Italics> <br />
        Garden
      </Title>
      <div>
        <Description>
          He Wants to Do Life with <b>You</b>
        </Description>
        <Author>by Scott Hull</Author>
        <Button text='Get book' link='#order' />
      </div>
      <Garden src='/images/art/garden.jpeg' alt='garden' />
    </StyledSection>
  )
}

export default Hero
