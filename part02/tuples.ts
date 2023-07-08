const userDataTuple1 = [true, 40, "Jojn"];
userDataTuple1[0] = "true"; // OK

const userDataTuple2: [boolean, number, string] = [true, 40, "Jojn"];
// userDataTuple2[0] = "true"; // Type 'string' is not assignable to type 'boolean'.ts(2322)
// userDataTuple2[3] // Tuple type '[boolean, number, string]' of length '3' has no element at index '3'.ts(2493)
//userDataTuple2.push(50);
// userDataTuple2[3] // Tuple type '[boolean, number, string]' of length '3' has no element at index '3'.ts(2493)

const res = userDataTuple2.map((t) => `${t}-data`);
console.log(res);

// destructuring
const [t_isBirthday, t_age, t_userName] = userDataTuple2;
console.log(
  `isBirthday = ${t_isBirthday}; age = ${t_age}; userName = ${t_userName}`
);

// Type '[true, number, string, string, string]' is not assignable to type '[boolean, number, string]'.
//   Source has 5 element(s) but target allows only 3.ts(2322)
// const userDataTuple3: [boolean, number, string] = [true, 40, "Jojn", "Alex", "Anna"];

const userDataTuple4: [boolean, number, ...string[]] = [
  true,
  40,
  "Jojn",
  "Alex",
  "Anna",
];

const userDataTuple5: [...boolean[], number, string] = [
  true,
  false,
  true,
  40,
  "Test",
];

let v0: [string, number] = ["Dambo", 1]; // Ok
// let v1: [string, number] = [null, undefined]; // Error -> null не string, а undefined не number
// let v3: [string, number] = [1, 'Simba']; // Error -> порядок обязателен
// let v4: [string, number] = [, ,]; // Error -> пустые элементы массива приравниваются к undefined
