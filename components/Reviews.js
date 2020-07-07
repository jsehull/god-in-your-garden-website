import Section from './Section'
import styled from '@emotion/styled'

const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const ReviewCard = styled.div`
  margin: 10px 20px;
  width: 300px;
  background: coral;
`

const Photo = styled.img`
  width: 250px;
`

const Quote = styled.p`
  color: blue;
`

const Name = styled.p`
  color: blue;
  font-style: italic;
`

const Reviews = () => {
  return (
    <Section id='reviews'>
      <h2>What people are saying</h2>
      <Flex>
        {reviewData.map(review => (
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

const reviewData = [
  {
    id: 1,
    name: 'BookBaby',
    img: 'https://via.placeholder.com/200x300',
    quote:
      '(240 chars)As a pastor, brother, and friend, Scott has served in Texas, Pennsylvania, California, Wisconsin, and Connecticut. Scott and Susan currently reside in North Carolina and they have 3 married children with 7 (so far) grandchildren.'
  },
  {
    id: 2,
    name: 'Amazon',
    img: 'https://via.placeholder.com/200x300',
    quote:
      '(240 chars)As a pastor, brother, and friend, Scott has served in Texas, Pennsylvania, California, Wisconsin, and Connecticut. Scott and Susan currently reside in North Carolina and they have 3 married children with 7 (so far) grandchildren.'
  },
  {
    id: 3,
    name: 'Barnes and Noble',
    img: 'https://via.placeholder.com/200x300',
    quote:
      '(240 chars)As a pastor, brother, and friend, Scott has served in Texas, Pennsylvania, California, Wisconsin, and Connecticut. Scott and Susan currently reside in North Carolina and they have 3 married children with 7 (so far) grandchildren.'
  },
  {
    id: 4,
    name: 'BookBaby',
    img: 'https://via.placeholder.com/200x300',
    quote:
      '(240 chars)As a pastor, brother, and friend, Scott has served in Texas, Pennsylvania, California, Wisconsin, and Connecticut. Scott and Susan currently reside in North Carolina and they have 3 married children with 7 (so far) grandchildren.'
  },
  {
    id: 5,
    name: 'Amazon',
    img: 'https://via.placeholder.com/200x300',
    quote:
      '(240 chars)As a pastor, brother, and friend, Scott has served in Texas, Pennsylvania, California, Wisconsin, and Connecticut. Scott and Susan currently reside in North Carolina and they have 3 married children with 7 (so far) grandchildren.'
  },
  {
    id: 6,
    name: 'Barnes and Noble',
    img: 'https://via.placeholder.com/200x300',
    quote:
      '(240 chars)As a pastor, brother, and friend, Scott has served in Texas, Pennsylvania, California, Wisconsin, and Connecticut. Scott and Susan currently reside in North Carolina and they have 3 married children with 7 (so far) grandchildren.'
  }
]
