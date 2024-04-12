const http = require('http')

const server = http.createServer((request, response) => {
  console.log(request)
  response.end('Hello from my node server')
})

server.listen(5500)