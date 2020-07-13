import theme from '../theme'
import styled from '@emotion/styled'
import { SpanOrange } from '../global-styles'
import Button from './Button'

const StyledSection = styled.section`
  width: 100%;
  height: 81hv;
  min-height: 575px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-position: 25% 101%;
`

const Title = styled.h1`
  margin: 50px 0;
  font-size: 5em;
  line-height: 0.7em;
`

const God = styled.span`
  font-size: 1.85em;
`

const Italics = styled(SpanOrange)`
  margin-left: -35px;
  font-size: 0.4em;
`

const Description = styled.p`
  margin: 10px 0 20px;
  font-size: 1.85em;
`

const Author = styled.p`
  margin-top: 0;
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
      <Garden src='/garden.jpeg' alt='garden' />
    </StyledSection>
  )
}

export default Hero
