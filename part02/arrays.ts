const departments: string[] = ["dev", "design", "marketing"];
console.log(departments);
const dep1 = departments[0];
console.log("departments.length = " + departments.length);
departments.push("testing");
console.log(departments);
console.log("departments.length = " + departments.length);
const report = departments.filter((d) => d !== "dev").map((d) => `${d} - done`);
console.log(report);
const report2 = departments
  .filter((d: string) => d === "dev")
  .map((d: string) => {
    return 4;
  })
  .map((d: number) => d + 5);
console.log(report2);

const nums: number[] = [3, 5, 6, 7];
// const nums2: number[] = [3, 5, 6, 7, true]; // Type 'boolean' is not assignable to type 'number'.ts(2322)
const anythings: any[] = ["test", 3, true];
const nums2D: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Destructuring
const [first] = report;
console.log("first => " + first);
const [second] = report;
console.log("second => " + second);
let [one, two] = report;
console.log(one + ", " + two);
// swap variables
[one, two] = [two, one];
console.log(one + ", " + two);

let [first1, ...rest] = [1, 2, 3, 4];
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
