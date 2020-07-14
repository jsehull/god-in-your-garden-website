import Section from './Section'
import styled from '@emotion/styled'
import theme from '../theme'
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
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const ReviewCard = styled.div`
  margin: 20px;
  padding: 30px 20px;
  width: 300px;
  background: ${theme.colors.white};
  text-align: center;
  -webkit-box-shadow: 3px 5px 10px 0px ${theme.colors.black};
  -moz-box-shadow: 3px 5px 10px 0px ${theme.colors.black};
  box-shadow: 3px 5px 10px 0px ${theme.colors.black};
  border-radius: 15px;
`

const Photo = styled.img`
  width: 250px;
`

const Quote = styled.p`
  text-align: left;
`

const Name = styled.p`
  margin: 0;
  margin-right: 50px;
  font-style: italic;
  text-align: right;
`

const Reviews = () => {
  return (
    <Section id='reviews' bg={theme.colors.blueSky}>
      <Top>
        <h2>What people are saying</h2>
        <Chair src='/chair.jpeg' alt='chair and plants' />
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
