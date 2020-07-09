import Section from './Section'
import theme from '../theme'
import styled from '@emotion/styled'
import Button from './Button'

const Title = styled.h1`
  font-size: 3em;
`

const Description = styled.p`
  font-size: 1.5em;
`

const Author = styled.p`
  font-size: 1em;
`

const Hero = () => {
  return (
    <Section bg={theme.colors.blueSky}>
      <Title>God in your Garden</Title>
      <Description>God in your Garden</Description>
      <Author>by Scott Hull</Author>
      <Button text='Get book' link='#order' />
    </Section>
  )
}

export default Hero
