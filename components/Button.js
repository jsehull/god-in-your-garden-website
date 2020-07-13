import styled from '@emotion/styled'
import theme from '../theme'

const StyledButton = styled.a`
  padding: 10px;
  background: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: ${theme.colors.yellow};
    cursor: pointer;
  }
`

const Button = ({ text, link }) => {
  return <StyledButton href={link}>{text}</StyledButton>
}

export default Button
