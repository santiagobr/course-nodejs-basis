function asyncFunction(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z
      callback(null, a)
    } catch (e) {
      callback(e, null)
    }
  }, 1000)
}

asyncFunction((err, data) => {
  if (err) {
    console.error('Tenemos un error')
    console.error(err)
    return false
  }
  console.log(`Todo va bien, la data es ${data}`)
})