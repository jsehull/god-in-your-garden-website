import Section from './Section'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 350px;
  text-align: center;
  background: center no-repeat url('/garden.jpeg');
`

const A = styled.a`
  margin-bottom: 20px;
`

const Footer = () => {
  return (
    <Section bg='skyblue'>
      <StyledFooter>
        <A href='#'>email@example.com</A>
      </StyledFooter>
    </Section>
  )
}

export default Footer
