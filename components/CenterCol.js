import styled from '@emotion/styled'
import theme from '../styles/theme'
import Section from './Section'

const Center = styled.section`
  text-align: center;

  img {
    margin-bottom: 1.25em;
    width: ${props => props.width};
  }

  p {
    margin: 1em auto;
    max-width: 700px;
  }

  a {
    color: ${theme.colors.orangeLetters};
    font-weight: bold;
    text-decoration: underline;
  }
`

const CenterCol = ({
  id,
  bg,
  color,
  title,
  src,
  width,
  alt,
  p,
  href,
  aText
}) => {
  return (
    <Section id={id} bg={bg} color={color}>
      <Center>
        <h2>{title}</h2>
        <img src={src} width={width} alt={alt} />
        <p>
          {p}
          {id === 'radio' ? (
            <a href={href} target='_blank' rel='noopener noreferrer'>
              {aText}
            </a>
          ) : (
            <a href={href}>{aText}</a>
          )}
        </p>
      </Center>
    </Section>
  )
}

export default CenterCol
