import styled from '@emotion/styled'
import theme from '../styles/theme'
import Logos from './Logos'

const Flex = styled.div`
  margin: 2em auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media (min-width: 950px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const ImageBox = styled.div`
  margin: 1em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    img {
      cursor: zoom-in;
    }
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 100%;
  box-shadow: 3px 3px 10px 0 ${theme.colors.black};
`

const TextBox = styled.div`
  margin: 1em;
  text-align: left;
  flex: 2;

  h3 {
    margin-top: 0;
    color: ${theme.colors.white};
    text-align: left;
    text-transform: uppercase;
    text-decoration: underline;
  }

  @media (min-width: 950px) {
    margin: 1em 2em;
  }
`

const Italic = styled.p`
  font-style: italic;
`

const Album = ({ id, title, src, alt, p1, p2, p3, p4 }) => {
  return (
    <>
      <Flex id={id}>
        <ImageBox>
          <Image src={src} alt={alt} />
        </ImageBox>
        <TextBox>
          <h3>{title}</h3>
          <p>{p1}</p>
          {id === 'breaking-through' ? <Italic>{p2}</Italic> : <p>{p2}</p>}
          {p3 ? <p>{p3}</p> : null}
          {id === 'the-once-and-future-garden' ? <p>{p4}</p> : null}
          <Logos type={id} />
        </TextBox>
      </Flex>
    </>
  )
}

export default Album
