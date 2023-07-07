const num1: bigint = 1n;
const num2: bigint = 2n;
// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);
// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;
let bigInt: bigint = BigInt(Number.MAX_VALUE) + BigInt(Number.MAX_VALUE);

console.log(num1 + num2);
// console.log(num1 + 3); // Operator '+' cannot be applied to types 'bigint' and '3'.ts(2365)
console.log(bigInt);
