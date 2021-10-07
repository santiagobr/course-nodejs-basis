// 1) log
console.log('Ver algo')

// 2) info
console.info()

//3) error
console.error('error')

//4) warn
console.warn('Algo')

//5) table
let table = [
  {
    a: 1,
    b: 'Z',
  },
  {
    a: 2,
    b: 'Y',
  },
]

console.log(table)
// [ { a: 1, b: 'Z' }, { a: 2, b: 'Y' } ]
console.table(table) 

/*
  ┌─────────┬───┬─────┐
  │ (index) │ a │  b  │
  ├─────────┼───┼─────┤
  │    0    │ 1 │ 'Z' │
  │    1    │ 2 │ 'Y' │
  └─────────┴───┴─────┘  
*/

//6) Group
const function1 = () => {
  console.group('Función 1')
  console.log('Esto es de la función 1')
  console.log('Esto también de la 1')
  function2()
  console.groupEnd()
}

const function2 = () => {
  console.group('Función 2')
  console.log('Esto es de la función 2')
  console.log('Esto también es 2')
  console.groupEnd()
}

function1()

//7) count
console.count('veces') // veces: 1
console.count('veces') // veces: 2
console.count('veces') // veces: 3
console.countReset('veces')
console.count('veces') // veces: 1
console.count('veces') // veces: 2
