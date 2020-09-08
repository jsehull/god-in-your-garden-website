import Link from 'next/link'
import styled from '@emotion/styled'

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
  font-size: 0.9em;

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 950px) {
    margin: 10px;
    font-size: 1em;
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
        <a href='#order'>Order</a>
      </Li>
      <Li>
        <a href='#author'>Author</a>
      </Li>
      <Li>
        <a href='#reviews'>Reviews</a>
      </Li>
      <Li>
        <Link href='/music'>
          <a>Music</a>
        </Link>
      </Li>
    </NavBar>
  </StyledHeader>
)

export default Header
