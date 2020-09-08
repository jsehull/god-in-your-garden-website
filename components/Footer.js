import styled from '@emotion/styled'
import theme from '../styles/theme'

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
  margin: 5px 0 10px;
`

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <StyledFooter>
      <GardenBox>
        <a href='mailto:contact@godinyourgarden.com'>
          contact@godinyourgarden.com
        </a>
        <P>Copyright &#169; {currentYear} Scott Hull</P>
      </GardenBox>
    </StyledFooter>
  )
}

export default Footer
