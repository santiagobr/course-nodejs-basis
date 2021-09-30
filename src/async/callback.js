function hello(name, miCallback) {
  setTimeout(() => {
    console.log(`Hola ${name}`)
    miCallback(name)
  }, 1000)
}

function bye(name, otroCallback) {
  setTimeout(() => {
    console.log(`Adios ${name}`)
    otroCallback()
  }, 1000)
}

console.log('Iniciando proceso...')
hello('Santiago', (name) => {
  bye(name, () => {
    console.log('Terminando proceso...')
  })
})
