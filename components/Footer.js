import styled from '@emotion/styled'
import theme from '../theme'

const StyledFooter = styled.footer`
  padding-top: 50px;
  width: 100%;
  background: ${theme.colors.blueSky};
`

const GardenBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  height: 300px;
  background: no-repeat url('/images/art/garden.jpeg');
  background-size: 1200px;
  background-position: 50% 100%;
`

const P = styled.p`
  margin: 0 0 20px;
  color: ${theme.colors.greenDarkest};
`

const A = styled.a`
  /* color: ${theme.colors.greenDarkest}; */
  color: red;
`

const Footer = () => {
  return (
    <StyledFooter>
      <GardenBox>
        <A href='#'>email@example.com</A>
        <P>Copyright &#169; 2020 Scott Hull</P>
      </GardenBox>
    </StyledFooter>
  )
}

export default Footer
