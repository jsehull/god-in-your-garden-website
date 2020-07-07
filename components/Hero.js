import React from 'react'
import Section from './Section'
import Button from './Button'

const Hero = ({ title, descrip, author }) => {
  return (
    <Section>
      <h1>{title}</h1>
      <p>{descrip}</p>
      <p>{author}</p>
      <div>
        <Button
          text='Get book'
          link='https://store.bookbaby.com/book/god-in-your-garden'
        />
      </div>
    </Section>
  )
}

export default Hero
