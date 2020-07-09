import styled from '@emotion/styled'

const StyledSection = styled.section`
  width: 100%;
  background: ${props => props.bg};
`

const Container = styled.div`
  margin: 0 auto;
  padding: 30px 15px;
  max-width: 1280px;

  @media (min-width: 950px) {
    padding: 50px;
  }
`

const Section = ({ id, bg, children }) => {
  return (
    <StyledSection id={id} bg={bg}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
