import Section from './Section'
import Who from '../components/Who'
import styled from '@emotion/styled'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 950px) {
    flex-direction: row;
  }
`

const ImageBox = styled.div`
  margin: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: coral;
`

const Image = styled.img`
  width: 200px;
`

const TextBox = styled.div`
  margin: 10px;
  flex: 1;
  color: red;
  text-align: left;

  @media (min-width: 950px) {
    order: ${props => (props.reverse ? -1 : 1)};
  }
`

const ImageAndText = ({ id, bg, title, src, alt, p1, p2, reverse }) => {
  return (
    <Section id={id} bg={bg}>
      <h2>{title}</h2>
      <Flex>
        <ImageBox>
          <Image src={src} alt={alt} />
        </ImageBox>
        <TextBox reverse={reverse}>
          <p>{p1}</p>
          <p>{p2}</p>
        </TextBox>
      </Flex>
      {id === 'book' ? <Who /> : null}
    </Section>
  )
}

export default ImageAndText
