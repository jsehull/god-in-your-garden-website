import styled from '@emotion/styled'
import theme from '../styles/theme'

const StyledButton = styled.a`
  padding: 10px;
  background: ${theme.colors.white};
  border: 1px solid transparent;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: ${theme.colors.bluepotDark};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.bluepotDark};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
  }
`

const Button = ({ text, link, ext }) => {
  return (
    <>
      {ext ? (
        <StyledButton href={link} target='_blank' rel='noopener noreferrer'>
          {text}
        </StyledButton>
      ) : (
        <StyledButton href={link}>{text}</StyledButton>
      )}
    </>
  )
}

export default Button
