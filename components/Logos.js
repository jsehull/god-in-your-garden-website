import styled from '@emotion/styled'
import { BookLogoData, MusicLogoData } from '../data'

const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const A = styled.a`
  margin: 10px;
  text-decoration: none;

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.75;
  }
`

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  width: ${props => (props.type === 'music' ? '125px' : '150px')};
  height: 60px;
  background: #fff;
  border-radius: 5px;
`

const Logo = styled.img`
  width: 100%;
  border-radius: 5px;
`

const Logos = ({ type }) => {
  let data
  type === 'music' ? (data = MusicLogoData) : (data = BookLogoData)

  return (
    <>
      <Flex>
        {data.map(logo => (
          <A
            key={logo.id}
            href={logo.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <LogoBox type={type}>
              <Logo src={logo.img} alt={logo.company} />
            </LogoBox>
          </A>
        ))}
      </Flex>
    </>
  )
}

export default Logos
