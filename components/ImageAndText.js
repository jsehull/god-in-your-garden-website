import styled from '@emotion/styled'
import theme from '../theme'
import Section from './Section'
import Who from '../components/Who'
import Button from '../components/Button'

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
  margin: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: ${props => props.width};
  -webkit-box-shadow: 5px 8px 20px 5px ${theme.colors.black};
  -moz-box-shadow: 5px 8px 20px 5px ${theme.colors.black};
  box-shadow: 5px 8px 20px 5px ${theme.colors.black};
`

const TextBox = styled.div`
  margin: 10px 1.5em;
  flex: 1;
  text-align: left;

  @media (min-width: 950px) {
    margin: 10px 2em;
    order: ${props => (props.reverse ? -1 : 1)};
  }
`

const ImageAndText = ({ id, bg, title, src, width, alt, p1, p2, reverse }) => {
  return (
    <Section id={id} bg={bg}>
      <h2>{title}</h2>
      <Flex>
        <ImageBox width={width}>
          <Image src={src} width={width} alt={alt} />
          {id === 'book' ? <Button text='click click' /> : null}
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
