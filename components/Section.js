import React from 'react'
import styled from '@emotion/styled'

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  background: yellow;
`

const Section = ({ children, id }) => {
  return <StyledSection id={id}>{children}</StyledSection>
}

export default Section
