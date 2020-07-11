import styled from '@emotion/styled'

const StyledSection = styled.section`
  width: 100%;
  background: ${props => props.bg};
  color: ${props => props.color};
  /* background: ${props => `${props.bg}`}; */
  /* TODO bg for theme props */
  /* TODO color IF THEME X */
`

const Container = styled.div`
  margin: 0 auto;
  padding: 50px 15px;
  max-width: 1280px;
`

const Section = ({ id, bg, color, children }) => {
  return (
    <StyledSection id={id} bg={bg} color={color}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
