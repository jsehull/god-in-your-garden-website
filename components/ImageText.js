import Section from './Section'
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
  background: coral;
`

const TextBox = styled.div`
  margin: 10px;
  color: red;
  background: lavender;
  order: ${props => (props.order ? -1 : 1)};
`

const ImageText = ({ id, title, src, alt, p, order }) => {
  return (
    <Section id={id}>
      <h2>{title}</h2>
      <Flex>
        <ImageBox>
          <img src={src} alt={alt} />
        </ImageBox>
        <TextBox order={order}>
          <p>{p}</p>
        </TextBox>
      </Flex>
    </Section>
  )
}

export default ImageText
