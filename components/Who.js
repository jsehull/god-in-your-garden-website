import styled from '@emotion/styled'
import theme from '../theme'
import { SpanOrange } from '../global-styles'

const StyledSection = styled.section`
  margin-top: -30px;
  padding: 15px;
  width: 100%;
  background: ${theme.colors.grassGreen};
  background: linear-gradient(
    0deg,
    ${theme.colors.blueSky} 50%,
    ${theme.colors.grassGreen} 50%
  );
`

const Container = styled.div`
  margin: 0 auto;
  padding: 30px 20px;
  max-width: 600px;
  width: 100%;
  background: no-repeat url('/images/art/gray-tree-bg.jpeg'), #fff;
  background-size: 100%;
  background-position: 25% 101%;
  text-align: center;
  -webkit-box-shadow: 3px 3px 10px 0px ${theme.colors.black};
  -moz-box-shadow: 3px 3px 10px 0px ${theme.colors.black};
  box-shadow: 3px 3px 10px 0px ${theme.colors.black};
  border-radius: 15px;
`

const Title = styled.h2`
  font-size: 1.8em;
`

const Text = styled.p`
  margin: 1em auto 0;
  max-width: 800px;
  text-align: left;
`
const Author = styled.p`
  margin: 1em auto 0;
  font-size: 1.5em;
`

const Who = () => {
  return (
    <StyledSection>
      <Container>
        <Title>Who should read this?</Title>
        <Text>
          “<SpanOrange>God in your Garden</SpanOrange> is for anyone wanting to
          enjoy a raw, real-time, organic, and dynamic relationship with God. It
          is rooted in Christian truth, but it is not just for Christian
          readers.
        </Text>
        <Text>
          God desires to live our lives together with us right where we are, and
          Jesus makes that opportunity available for ALL of us—students and
          teachers, professionals and administrators, labor and management,
          singles and married, young and retired—anyone desiring an intimate and
          hands-on life together with God.”
        </Text>
        <Author>- Scott Hull, author</Author>
      </Container>
    </StyledSection>
  )
}

export default Who
