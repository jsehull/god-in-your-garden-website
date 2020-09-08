import Section from './Section'
import styled from '@emotion/styled'
import theme from '../styles/theme'
import { ReviewData } from '../data'

const Top = styled.div`
  text-align: center;
`

const Chair = styled.img`
  margin-bottom: 26px;
  width: 200px;

  @media (min-width: 950px) {
    width: 300px;
  }
`
const Flex = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 900px) {
    width: 690px;
    height: 2470px;
  }

  @media (min-width: 1100px) {
    width: 1025px;
    height: 1775px;
  }
`

const ReviewCard = styled.div`
  margin: 20px;
  padding: 30px 20px;
  width: 250px;
  background: ${theme.colors.white};
  text-align: center;
  border-radius: 15px;

  @media (min-width: 350px) {
    width: 300px;
  }
`

const Photo = styled.img`
  width: 250px;
`

const Quote = styled.p`
  font-size: 1em;
  text-align: left;
`

const Name = styled.p`
  margin: 0;
  margin-right: 50px;
  font-style: italic;
  font-size: 1.3em;
  text-align: right;
`

const Reviews = () => {
  return (
    <Section id='reviews' bg={theme.colors.blueSky}>
      <Top>
        <h2>What people are saying</h2>
        <Chair src='/images/art/chair.jpeg' alt='chair and plants' />
      </Top>
      <Flex>
        {ReviewData.map(review => (
          <ReviewCard key={review.id}>
            <Photo src={review.img} alt={`${review.name} with book`} />
            <Quote>{review.quote}</Quote>
            <Name>- {review.name}</Name>
          </ReviewCard>
        ))}
      </Flex>
    </Section>
  )
}

export default Reviews
