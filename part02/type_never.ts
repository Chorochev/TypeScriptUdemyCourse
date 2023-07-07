const createError = (msg: string) => {
  throw new Error(msg);
};

function getBrtMsg3(
  isBirthday: boolean,
  age: number,
  userName: string
): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
  } else {
    return createError("Error");
  }
}

console.log(getBrtMsg3(true, 40, "John"));
// console.log(getBrtMsg3(false, 43, "Sam")); // throw new Error(msg);

// const smth : never = undefined; // Type 'undefined' is not assignable to type 'never'.ts(2322)
// const smth: never = null; // Type 'null' is not assignable to type 'never'.ts(2322)
