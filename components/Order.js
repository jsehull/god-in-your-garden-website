import Section from '../components/Section'
import styled from '@emotion/styled'

const Disclaimer = styled.p`
  margin: 0 auto;
  width: 80%;
  font-size: 0.8em;
  font-style: italic;
  text-align: center;
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
`

const LogoBox = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  height: 60px;
  background: #fff;
`

const Logo = styled.img`
  width: 100%;
`
const Order = () => {
  return (
    <Section id='order' bg='skyblue'>
      <h2>Order now</h2>
      <Disclaimer>
        Purchases directly from BookBaby help support independent authors like
        Scott.
      </Disclaimer>
      <h3>Paperback Edition</h3>
      <Flex>
        {iconData
          .filter(icon => icon.paperback === true)
          .map(icon => (
            <A key={icon.id} href={icon.url}>
              <LogoBox>
                <Logo src={icon.img} alt={icon.company} />
              </LogoBox>
            </A>
          ))}
      </Flex>
      <h3>Digital Editions</h3>
      <Flex>
        {iconData.map(icon => (
          <A key={icon.id} href={icon.url}>
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

const iconData = [
  {
    id: 1,
    company: 'BookBaby',
    url: 'https://store.bookbaby.com/book/god-in-your-garden',
    img: '/logos/bookbaby.gif',
    paperback: true
  },
  {
    id: 2,
    company: 'Amazon',
    url:
      'https://www.amazon.com/God-Your-Garden-Wants-Life-ebook/dp/B0888TY2YK/ref=sr_1_2?dchild=1&keywords=god+in+your+garden&qid=1594140068&sr=8-2',
    img: '/logos/amazon.jpg',
    paperback: false
  },
  {
    id: 3,
    company: 'Barnes and Noble',
    url:
      'https://www.barnesandnoble.com/w/god-in-your-garden-scott-hull/1136984866?ean=9781098309114',
    img: '/logos/barnesandnoble.png',
    paperback: false
  },
  {
    id: 4,
    company: 'kobo',
    url: 'https://www.kobo.com/us/en/ebook/god-in-your-garden',
    img: '/logos/kobo.png',
    paperback: false
  }
]
