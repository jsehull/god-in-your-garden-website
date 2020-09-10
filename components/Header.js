import { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import Button from '../components/Button'

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

const Header = () => {
  const [path, setPath] = useState('/')
  const pathName = typeof window !== 'undefined' && window.location.pathname

  useEffect(() => {
    if (pathName === '/music') {
      setPath('/music')
    } else if (pathName === '/') {
      setPath('/')
    }
  }, [setPath])

  return (
    <StyledHeader>
      <Link href='/'>
        <NavLogo>
          <img src='/images/art/tree.jpeg' alt='logo' />
        </NavLogo>
      </Link>
      {path === '/' ? (
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
          <Button text='music' link='/music' />
        </NavBar>
      ) : (
        <NavBar>
          <Li>
            <a href='#bt'>Order</a>
          </Li>
          <Li>
            <a href='#ttl'>Albums</a>
          </Li>
          <Li>
            <a href='#radio'>Radio</a>
          </Li>
          <Button text='book' link='/' />
        </NavBar>
      )}
    </StyledHeader>
  )
}

export default Header
