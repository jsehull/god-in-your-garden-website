import Section from './Section'
import Button from './Button'

const Hero = ({ title, descrip, author }) => {
  return (
    <Section bg='skyblue'>
      <h1>{title}</h1>
      <p>{descrip}</p>
      <p>{author}</p>
      <div>
        <Button text='Get book' link='#order' />
      </div>
    </Section>
  )
}

export default Hero
