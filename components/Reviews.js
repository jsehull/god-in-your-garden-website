import Section from './Section'
import styled from '@emotion/styled'
import theme from '../theme'

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
  text-align: center;
`

const Photo = styled.img`
  width: 250px;
`

const Quote = styled.p`
  color: blue;
  text-align: left;
`

const Name = styled.p`
  margin: 0 0 15px;
  color: blue;
  font-style: italic;
  text-align: right;
`

const Reviews = () => {
  console.log(theme)
  return (
    <Section id='reviews' bg={theme.colors.blueSky}>
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
    name: 'Karen',
    img: 'https://via.placeholder.com/200x300',
    quote:
      "(400 chars)It's here! I'm so excited to share this! The idea of God in my Garden has been life changing for me and it's finally in a book that I can share. Pastor Scott has been my mentor for many years now. I'm so thankful for the things he has helped me walk through. I'm blown away by the insight he has and his heart for helping others have a relationship with God that is personal and alive. Check it out!"
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
