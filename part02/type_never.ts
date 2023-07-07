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
