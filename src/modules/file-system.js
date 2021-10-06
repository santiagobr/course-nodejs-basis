const fs = require('fs')

function read(path, cb) {
  fs.readFile(path, (error, data) => {
    cb(data.toString())
  })
}

function write(path, content, cb) {
  fs.writeFile(path, content, (error) => {
    if (error) {
      console.error(`No se ha podido escribir el archivo, ${error}`)
    } else {
      console.log(`Se ha escrito correctamente`)
    }
  })
}

function deleter(path, cb) {
  fs.unlink(path, cb)
}

read(`${__dirname}/file.txt`, console.log)

write(`${__dirname}/file1.txt`, `I'm a new file`, console.log)

// deleter(`${__dirname}/file1.txt`, console.log)
