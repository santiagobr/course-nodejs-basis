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

hello('Santiago', (name) => {
  bye(name, () => {
    console.log('Terminamos')
  })
})
