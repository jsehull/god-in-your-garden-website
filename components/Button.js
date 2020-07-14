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
  color: ${theme.colors.black};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.leafMedium};
    color: ${theme.colors.yellow};
  }
`

const Button = ({ text, link }) => {
  return <StyledButton href={link}>{text}</StyledButton>
}

export default Button
