const http = require('http')
http.createServer(router).listen(3000)

function router(req, res) {
  console.log('New request!')
  console.log(req.url)

  switch (req.url) {
    case '/hello':
      res.writeHead(201, { 'Structured.message': 'All is fine' })
      res.write(`Hello. whatsup`)
      res.end()
      break
    default:
      res.writeHead(404, { error: 'personalized error info' })
      res.write('Error 404: I dont know what do you want.')
      res.end()
  }

  // res.writeHead(201, { 'Content.Type': 'text/plain' })

  // //Write response to user
  // res.write('Hello, now I know to use NodeJS HTTP')

  // res.end()
}

console.log('Listen http in port 3000')
