import styled from '@emotion/styled'
import theme from '../theme'
import Section from './Section'

const Title = styled.h2`
  color: $(props => {});
`

const Flex = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media (min-width: 950px) {
    flex-direction: row;
  }
`

const ImageBox = styled.div`
  margin: 1em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: ${props => props.width};
  -webkit-box-shadow: 5px 5px 20px 2px ${theme.colors.black};
  -moz-box-shadow: 5px 5px 20px 2px ${theme.colors.black};
  box-shadow: 5px 5px 20px 2px ${theme.colors.black};
`

const TextBox = styled.div`
  margin: 1em;
  flex: 2;
  text-align: left;

  @media (min-width: 950px) {
    margin: 1em 2em;
    order: ${props => (props.reverse ? -1 : 1)};
  }
`

const ImageAndText = ({
  id,
  bg,
  color,
  title,
  src,
  width,
  alt,
  p1,
  p2,
  reverse
}) => {
  return (
    <Section id={id} bg={bg} color={color}>
      <Title>{title}</Title>
      <Flex>
        <ImageBox width={width}>
          <Image src={src} width={width} alt={alt} />
        </ImageBox>
        <TextBox reverse={reverse}>
          <p>{p1}</p>
          <p>{p2}</p>
        </TextBox>
      </Flex>
    </Section>
  )
}

export default ImageAndText
