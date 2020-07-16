import styled from '@emotion/styled'
import theme from '../theme'
import Section from './Section'
import Logos from './Logos'
import { SRLWrapper } from 'simple-react-lightbox'

const options = {
  settings: {
    overlayColor: 'rgba(36, 51, 84, 0.95)'
  },
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showThumbnailsButton: false
  }
}

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

  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 50px;
      height: 50px;
      background: url(/images/zoom-in.png),
        linear-gradient(45deg, rgba(0, 0, 0, 0) 50%, rgba(242, 81, 27, 1) 50%);
    }

    /* TODO - cannot set pseudo element on img */
    img {
      position: relative;
      cursor: zoom-in;
    }
  }
`

const Image = styled.img`
  margin: 10px;
  width: ${props => props.width};
  box-shadow: 5px 5px 20px 2px ${theme.colors.black};
`

const TextBox = styled.div`
  margin: 1em;
  text-align: left;
  flex: ${props => (props.even ? 1 : 2)};

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
  reverse,
  even
}) => {
  return (
    <Section id={id} bg={bg} color={color}>
      <h2>{title}</h2>
      <Flex>
        <ImageBox width={width}>
          {id === 'book' ? (
            <SRLWrapper options={options}>
              <Image
                src='/images/art/front-cover.jpeg'
                width={width}
                alt='Front cover'
              />
              <Image
                src='/images/art/back-cover.jpeg'
                width={width}
                alt='Back cover'
              />
            </SRLWrapper>
          ) : (
            <Image src={src} width={width} alt={alt} />
          )}
        </ImageBox>
        <TextBox even={even} reverse={reverse}>
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
