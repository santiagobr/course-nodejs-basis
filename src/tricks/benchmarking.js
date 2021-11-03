let sum = 0
console.time('cicle')
for (let i = 0; i < 1000000000; i++) {
  sum += 1
}
console.timeEnd('cicle')
let sum2 = 0
console.time('cicle2')
for (let j = 0; j < 10000000; j++) {
  sum2 += 1
}
console.timeEnd('cicle2')

function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log('Termina el proceso asincrono')
      resolve()
    })
  })
}

console.time('asincrono')
asyncFunction().then(() => {
  console.timeEnd('asincrono')
})

