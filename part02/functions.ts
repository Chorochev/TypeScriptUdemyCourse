const isBirthdayData: boolean = true;
let ageDate: number = 40;
const userNameData: string = "John";

function logBrtMsg(isBirthday: boolean, age: number, userName: string) {
  if (isBirthday) {
    console.log(`Congrats ${userName.toUpperCase()}, age ${age + 1}`);
  }
}

function logBrtMsg2(isBirthday: boolean, age: number, userName: string): void {
  if (isBirthday) {
    console.log(`Congrats ${userName.toUpperCase()}, age ${age + 1}`);
  }
  return undefined;
}

function getBrtMsg(isBirthday: boolean, age: number, userName: string): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
  } else {
    return "Error";
  }
}

const getBrtMsg2 = (
  isBirthday: boolean,
  age: number,
  userName: string
): string => {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
  } else {
    return "Error";
  }
};

logBrtMsg(isBirthdayData, ageDate, userNameData);
// ts-node .\functions.ts
// logBrtMsg("yes", ageDate, userNameData); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'boolean'.
logBrtMsg2(isBirthdayData, ageDate, userNameData);
console.log(getBrtMsg(isBirthdayData, ageDate, userNameData));
console.log(getBrtMsg2(isBirthdayData, ageDate, userNameData));
