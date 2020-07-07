import React from 'react'
import styled from '@emotion/styled'

const StyledSection = styled.section`
  margin-right: auto;
  margin-left: auto;
  max-width: 1280px;
  background: yellow;
`

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Section
