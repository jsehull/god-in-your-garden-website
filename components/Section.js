import styled from '@emotion/styled'

const StyledSection = styled.section`
  width: 100%;
  background: ${props => props.bg};

  h2,
  p {
    color: ${props => props.color};
  }
`

const Container = styled.div`
  margin: 0 auto;
  padding: 3em 1em;
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
