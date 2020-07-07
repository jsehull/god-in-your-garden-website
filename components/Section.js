import styled from '@emotion/styled'

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  background: yellow;
  text-align: center;
`

const Section = ({ children, id }) => {
  return <StyledSection id={id}>{children}</StyledSection>
}

export default Section
