import styled from '@emotion/styled'

const StyledSection = styled.section`
  width: 100%;
  background: ${props => props.bg};
  text-align: center;
`

const Container = styled.div`
  margin: 0 auto;
  width: 1280px;
`

const Section = ({ id, bg, children }) => {
  return (
    <StyledSection id={id} bg={bg}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
