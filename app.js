// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//Imports variable och function
const names = require('./names');
const sayHi = require('./utils');
require('./utils')

sayHi("hanna och johannes")
sayHi(names.johannes)
sayHi(names.hanna)



setInterval(() => {
  console.log("hejsan")
}, 1000)