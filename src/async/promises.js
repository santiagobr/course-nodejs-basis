function hello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${name}`)
      resolve(name)
    }, 1000)
  })
}

function speak(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('blah blah blah...')
      reject('error')
    })
  })
}

function bye(name, otroCallback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${name}`)
      resolve()
    }, 1000)
  })
}

// ---

console.log('Iniciando el proceso...')
hello('Santiago')
  .then(speak)
  .then(speak)
  .then(speak)
  .then(bye)
  .then((name) => {
    console.log('Terminando el proceso...')
  })
  .catch((error) => console.error(error))
