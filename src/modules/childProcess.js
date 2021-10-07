const { exec, spawn } = require('child_process')

// // Ejecutar comandos de consola
// exec('ls -al', (e, stdout, stderr) => {
//   if (e) {
//     console.error(e)
//     return false
//   }
//   console.log(stdout)
// })

// // Ejecutar procesos por debajo de otros archivos
// exec('node src/modules/console.js', (e, stdout, stderr) => {
//   if (e) {
//     console.error(e)
//     return false
//   }
//   console.log(stdout)
// })

// Invocar procesos nuevos

let process = spawn('ls', ['-al'])
console.log(process.pid)
console.log(process.connected)

process.stdout.on('data', (datas) => {
  console.log('¿Está muerto?')
  console.log(process.killed)
  console.log(datas.toString())
})

process.on('exit', () => {
  console.log('The End')
})
