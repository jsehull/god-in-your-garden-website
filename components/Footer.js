import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: skyblue;
  text-align: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <a href='#'>email@example.com</a>
    </StyledFooter>
  )
}

export default Footer
