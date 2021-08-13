import styled from '@emotion/styled'
import { BookLogoData, OFGLogoData, BTLogoData, TTLLogoData } from '../data'

const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 950px) {
    justify-content: ${props =>
      props.type !== 'book' ? 'flex-start' : 'center'};
  }
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
  width: ${props => (props.type === 'book' ? '150px' : '125px')};
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

  if (type === 'the-once-and-future-garden') {
    data = OFGLogoData
  } else if (type === 'breaking-through') {
    data = BTLogoData
  } else if (type === 'time-to-listen') {
    data = TTLLogoData
  } else {
    data = BookLogoData
  }

  return (
    <>
      <Flex type={type}>
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
