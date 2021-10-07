function anotherFunction() {
  breaks()
}

function breaks() {
  return 3 + z
}

function asyncBreaks(cb) {
  setTimeout(() => {
    try {
      return 3 + z
    } catch (err) {
      console.error('Error in my async function')
      cb(err)
    }
  })
}

try {
  //anotherFunction()
  asyncBreaks((err) => {
    console.log(err.message)
  })
} catch (error) {
  console.error('Something breaks')
  console.error(error.message)
  console.log('All is handled')
}
