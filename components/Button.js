import styled from '@emotion/styled'
import theme from '../styles/theme'

const StyledButton = styled.a`
  padding: 10px;
  background: ${theme.colors.white};
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: ${theme.colors.greenLetters};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.greenLetters};
    color: ${theme.colors.white};
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
