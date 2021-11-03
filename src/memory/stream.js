const { createReadStream } = require('fs')
const stream = require('stream')

let data = ''

let readableStream = createReadStream(`${__dirname}/input.txt`)
readableStream.setEncoding('utf-8')
// readableStream.on('data', (chunk) => {
//   data += chunk
// })

// readableStream.on('end', () => {
//   console.log(data)
// })

class Mayus extends stream.Transform {
  _transform(chunk, encode, cb) {
    let chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
  }
}

let mayus = new Mayus()

readableStream.pipe(mayus).pipe(process.stdout)
