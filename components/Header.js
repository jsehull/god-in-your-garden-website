import { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import Button from '../components/Button'

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
`

const NavLogo = styled.a`
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
  margin: 3px;
  font-size: 0.9em;

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 374px) {
    font-size: 1em;
    margin: 10px;
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
            <a href='#breaking-through'>Order</a>
          </Li>
          <Li>
            <a href='#albums'>Albums</a>
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
