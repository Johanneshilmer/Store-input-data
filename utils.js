const sayHi = (name) => {
  console.log(`Hello there ${name}`);
}

// Exporterar default
module.exports = sayHi

const num1 = 5;
const num2 = 10;

const addVales = () => {
  console.log(`The sum is : ${num1 + num2}`);
}

addVales();