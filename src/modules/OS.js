const os = require('os')

// console.log(os.arch())
// console.log(os.platform())
// console.table(os.cpus())
// console.log(os.constants)

//MEMORY
const SIZE = 1024
function kb(bytes) {
  return bytes / SIZE
}
function mb(bytes) {
  return kb(bytes) / SIZE
}
function gb(bytes) {
  return mb(bytes) / SIZE
}

console.log(kb(os.totalmem()))
console.log(mb(os.totalmem()))
console.log(gb(os.totalmem()))

console.log(os.homedir())
console.log(os.tmpdir())

console.log(os.hostname())
console.log(os.networkInterfaces())
