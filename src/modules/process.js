// const process = require('process')

process.on('beforeExit', () => {
  console.log('El proceso va a terminar')
})

process.on('exit', () => {
  console.log('El proceso acabó')
})

process.on('uncaughtException', (err, origin) => {
  console.error('El error no fue capturado')
  console.error(err)
})
// process.on('uncaughtRejection')
