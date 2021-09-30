function hello(name, miCallback) {
  setTimeout(() => {
    console.log(`Hola ${name}`)
    miCallback(name)
  }, 1000)
}

function speak(callbackSpeak) {
  setTimeout(() => {
    console.log('blah blah blah...')
    callbackSpeak()
  }, 1000)
}

function bye(name, otroCallback) {
  setTimeout(() => {
    console.log(`Adios ${name}`)
    otroCallback()
  }, 1000)
}

function conversation(name, times, callback) {
  if (times > 0) {
    speak(() => {
      conversation(name, --times, callback)
    })
  } else {
    bye(name, callback)
  }
}

console.log('Iniciando proceso...')
hello('Santiago', (name) => {
  conversation(name, 3, () => {
    console.log('Proceso terminado')
  })
})
