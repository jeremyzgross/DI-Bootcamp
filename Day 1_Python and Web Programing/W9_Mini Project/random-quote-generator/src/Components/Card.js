import React, { useState } from 'react'
import quotes from './QuotesDatabase'
import { useEffect } from 'react'

const Card = () => {
  const [randomQuote, setRandomQuote] = useState('')
  const [randomAuthor, setRandomAuthor] = useState('')
  const [colorTheme, setColorTheme] = useState('#ff0000')

  useEffect(() => {
    getRandom(quotes)
  }, [])

  const getRandom = (arr) => {
    const index = Math.floor(Math.random() * arr.length)
    const quote = quotes[index].quote
    const author = quotes[index].author
    setRandomQuote(quote)
    setRandomAuthor(author)
    changeColor()
  }

  const changeColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')
    setColorTheme(`#${randomHex}`)
    document.body.style.backgroundColor = `#${randomHex}`
  }

  return (
    <>
      <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <h1 style={{ color: colorTheme }}> " {randomQuote}"</h1>
        <p style={{ color: colorTheme }}> -{randomAuthor}-</p>
        <button style={{ color: colorTheme }} onClick={() => getRandom(quotes)}>
          New quote
        </button>
      </div>
    </>
  )
}

export default Card
