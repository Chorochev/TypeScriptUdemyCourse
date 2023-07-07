let id: symbol = Symbol("id");

const data_symbol = {
  [id]: 1,
};

console.log(data_symbol[id]);

let sym1 = Symbol();
let sym2 = Symbol("key"); // optional string key
let sym3 = Symbol("key");
console.log(sym2 === sym3); // false, symbols are unique
