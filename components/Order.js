import Section from '../components/Section'
import styled from '@emotion/styled'
import theme from '../theme'
import { IconData } from '../data'

const Disclaimer = styled.p`
  margin: 0 auto 20px;
  width: 75%;
  font-size: 0.8em;
  font-style: italic;
  text-align: center;
`

const Type = styled.h3`
  margin-bottom: 5px;
`

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
  width: 150px;
  display: flex;
  align-items: center;
  height: 60px;
  background: #fff;
  border-radius: 5px;
`

const Logo = styled.img`
  width: 100%;
  border-radius: 5px;
`

const Order = () => {
  return (
    <Section id='order' bg={theme.colors.blueSky}>
      <h2>Order now</h2>
      <Type>Paperback</Type>
      <Flex>
        {IconData.filter(icon => icon.paperback === true).map(icon => (
          <A
            key={icon.id}
            href={icon.url}
            target='_blank'
            rel='noopener noreferrer'>
            <LogoBox>
              <Logo src={icon.img} alt={icon.company} />
            </LogoBox>
          </A>
        ))}
      </Flex>
      <Disclaimer>
        Purchases made directly from BookBaby help support independent authors
        like Scott.
      </Disclaimer>
      <Type>Digital Editions</Type>
      <Flex>
        {IconData.map(icon => (
          <A
            key={icon.id}
            href={icon.url}
            target='_blank'
            rel='noopener noreferrer'>
            <LogoBox>
              <Logo src={icon.img} alt={icon.company} />
            </LogoBox>
          </A>
        ))}
      </Flex>
    </Section>
  )
}

export default Order
