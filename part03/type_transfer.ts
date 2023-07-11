{
  const num1 = 5; // const num1: 5
  const num2 = new Number(5); // const num2: Number
  console.log(num1 == num2); // true
  console.log(num1 === num2); // false

  let num3 = 5; // let num3: number
  let num4 = new Number(5); // let num4: Number
  console.log(num3 == num4); // true
  console.log(num3 === num4); // false

  let num5: Number = new Number(5); // let num5: Number
  let num6: number = 5; // let num6: number
  let num7 = Number(5); // let num7: number
  num5 = num6; // Ok
  // num6 = num5; // Type 'Number' is not assignable to type 'number'.  'number' is a primitive, but 'Number' is a wrapper object. Prefer using 'number' when possible.ts(2322)

  const num = 5;
  const strNum: string = num.toString();
  const str = "5";
  const numStr: number = +str;

  const department = {
    name: "web-dev",
    budget: 50000,
  };

  interface Project {
    name: string;
    projectBudget: number;
  }

  const mainProject: Project = {
    ...department,
    projectBudget: 50000,
  };
}
