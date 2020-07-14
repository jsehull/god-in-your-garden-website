import Link from 'next/link'
import styled from '@emotion/styled'
import theme from '../theme'
import Button from './Button'

const StyledHeader = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;

  @media (min-width: 950px) {
    padding: 10px 25px;
    flex-direction: row;
  }
`

const NavLogo = styled.a`
  margin: 10px 0;
  font-size: 1.5em;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 50px;
  }
`

const NavBar = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  list-style: none;
`

const Li = styled.li`
  margin: 5px;

  @media (min-width: 950px) {
    margin: 10px;
  }
`

const A = styled.a`
  &:hover {
    text-decoration: underline;
  }
`

const BuyNow = styled(Button)`
  background: ${theme.colors.yellow};
  padding: 8px;

  @media (min-width: 350px) {
    padding: 10px;
  }

  &:hover {
    background: ${theme.colors.white};
  }
`

const Header = () => (
  <StyledHeader>
    <Link href='/'>
      <NavLogo>
        <img src='/images/art/tree.jpeg' alt='logo' />
      </NavLogo>
    </Link>
    <NavBar>
      <Li>
        <A href='#order'>Order</A>
      </Li>
      <Li>
        <A href='#author'>Author</A>
      </Li>
      <Li>
        <A href='#music'>Music</A>
      </Li>
      <Li>
        <A href='#reviews'>Reviews</A>
      </Li>
      {/* <Li> */}
      <BuyNow
        text='buy now'
        link='https://store.bookbaby.com/book/god-in-your-garden'
      />
      {/* </Li> */}
      {/* <BuyNow>
        <A href='#'>Buy now</A>
      </BuyNow> */}
      {/* <Li>
        <Link href='/about'>
          <A>About</A>
        </Link>
      </Li>
      <Li>
        <Link href='/projects'>
          <A>Projects</A>
        </Link>
      </Li>
      <Li>
        <Link href='/blog'>
          <A>Blog</A>
        </Link>
      </Li>
      <Li>
        <Link href='/contact'>
          <A>Contact</A>
        </Link>
      </Li> */}
    </NavBar>
  </StyledHeader>
)

export default Header
