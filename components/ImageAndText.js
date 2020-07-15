import styled from '@emotion/styled'
import theme from '../theme'
import Section from './Section'
import Logos from './Logos'

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

const RadioLink = styled.a`
  margin-left: 5px;
  color: ${theme.colors.orangeLetters};
  font-weight: bold;
  text-decoration: underline;
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
      <h2>{title}</h2>
      <Flex>
        <ImageBox width={width}>
          <Image src={src} width={width} alt={alt} />
        </ImageBox>
        <TextBox reverse={reverse}>
          <p>{p1}</p>
          <p>{p2}</p>
          {id === 'music' ? (
            <p>
              Scott is also one of the many artists featured on
              <RadioLink
                href='http://www.solopianoradio.com'
                target='_blank'
                rel='noopener noreferrer'>
                Whispersings: Solo Piano Radio
              </RadioLink>
            </p>
          ) : null}
          {id === 'music' ? <Logos type={id} /> : null}
        </TextBox>
      </Flex>
    </Section>
  )
}

export default ImageAndText
