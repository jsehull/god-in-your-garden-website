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
  height: 350px;
  background: center no-repeat url('/garden.jpeg');
`

const P = styled.p`
  margin: 0;
  color: ${theme.colors.greenDarkest};
`

const A = styled.a`
  margin-bottom: 35px;
  color: ${theme.colors.greenDarkest};
`

const Footer = () => {
  return (
    <StyledFooter>
      <GardenBox>
        <P>Copyright &#169; 2020 Scott Hull</P>
        <A href='#'>email@example.com</A>
      </GardenBox>
    </StyledFooter>
  )
}

export default Footer
