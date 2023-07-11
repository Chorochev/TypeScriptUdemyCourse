{
  const num1 = 5; // const num1: 5
  const num2 = new Number(5); // const num2: Number
  console.log(num1 == num2); // true
  console.log(num1 === num2); // false

  let num3 = 5; // let num3: number
  let num4 = new Number(5); // let num4: Number
  console.log(num3 == num4); // true
  console.log(num3 === num4); // false

  let num5: Number = new Number(5);
  let num6: number = 5;
  num5 = num6; // Ok
  // num6 = num5; // Type 'Number' is not assignable to type 'number'.  'number' is a primitive, but 'Number' is a wrapper object. Prefer using 'number' when possible.ts(2322)
}
