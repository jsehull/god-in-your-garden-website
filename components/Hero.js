import theme from '../theme'
import styled from '@emotion/styled'
import Button from './Button'

const StyledSection = styled.section`
  width: 100%;
  height: 90vh;
  /* position: relative; */
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`
const GardenBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  /* width: 1000px; */
  background: no-repeat url('/garden.jpeg');
  background-size: 1000px;
  background-position: 50% 100%;
`

const Test = styled.img`
  max-width: 1000px;
  width: 100%;
`

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
    <StyledSection bg={theme.colors.blueSky}>
      {/* <GardenBox> */}
      <Title>God in your Garden</Title>
      <div>
        <Description>He Wants to Do Life with You</Description>
        <Author>by Scott Hull</Author>
        <Button text='Get book' link='#order' />
      </div>
      <Test src='/garden.jpeg' alt='garden' />
      {/* </GardenBox> */}
    </StyledSection>
  )
}

export default Hero
