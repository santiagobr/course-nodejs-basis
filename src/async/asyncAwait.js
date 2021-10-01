async function hello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${name}`)
      resolve(name)
    }, 1000)
  })
}

async function speak(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('blah blah blah...')
      resolve()
    })
  })
}

async function bye(name, otroCallback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${name}`)
      resolve()
    }, 1000)
  })
}

async function main() {
  let name = await hello('Santiago')
  await speak()
  await speak()
  await speak()
  await bye(name)
  console.log('Termina el proceso...')
}

console.log('Empezamos el proceso...')
main()
