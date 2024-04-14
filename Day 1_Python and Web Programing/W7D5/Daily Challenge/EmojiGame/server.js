// Import the express module
const express = require('express')
// Create an Express application
const app = express()

const emojis = require('./emoji.js')

const play = require('./play.js')

const fs = require('fs')

app.use('/', express.static(__dirname + '/EmojiGame'))

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001')
})

// Route to the 'index.html' file
app.get('/', (request, response) => {
  // Select a random emoji
  const randomIndex = Math.floor(Math.random() * emojis.length)
  const randomEmoji = emojis[randomIndex]

  // Read the index.html file
  fs.readFile(__dirname + '/index.html', 'utf8', (err, html) => {
    if (err) {
      return response.status(500).send('Error reading HTML file')
    }
    const modifiedHtml = html.replace('{{randomEmoji}}', randomEmoji.emoji)

    // Send the modified HTML to the client
    response.send(modifiedHtml)
  })
})
