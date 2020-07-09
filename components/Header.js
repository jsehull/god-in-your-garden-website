import Link from 'next/link'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  margin: 10px auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  background: coral;

  @media (min-width: 950px) {
    flex-direction: row;
  }
`

const NavTitle = styled.a`
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
`

const NavBar = styled.ul`
  margin: 0;
  padding: 0;
  display: inline;
  list-style: none;
`

const Li = styled.li`
  margin: 10px;
  display: inline;
  background: cyan;
`

const A = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Header = () => (
  <StyledHeader>
    <Link href='/'>
      <NavTitle>God in your Garden</NavTitle>
    </Link>
    <NavBar>
      <Li>
        <A href='#book'>Book</A>
      </Li>
      <Li>
        <A href='#order'>Order</A>
      </Li>
      <Li>
        <A href='#author'>Author</A>
      </Li>
      <Li>
        <A href='#reviews'>Reviews</A>
      </Li>
      <Li>
        <A href='#'>Contact</A>
      </Li>
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
