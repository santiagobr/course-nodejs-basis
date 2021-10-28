const moment = require('moment')

let now = moment()

console.log(now.format('DD/MM/YYYY - HH:mm'))

// Para validad una fecha
console.log(moment('2020-04-11').isValid()); // Nos dara **true** o **false** dependiendo de si la fecha es valida o no

// Para encontrar cuanto tiempo ha pasado hasta hoy
console.log(moment('2017-07-12').fromNow()); // Hace 2 años

// Para agregar o eliminar años, días o meses
moment('2020-04-11').add(1, 'years'); // 2021-04-11
moment('2020-04-11').subtract(1, 'years'); // 2019-04-11