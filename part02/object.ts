const userData = {
  isBirthday: true,
  age: 40,
  userName: "John",
  smth: "test",
  messages: {
    error: "Error",
  },
};

function logBrthMsgObj(data: {
  isBirthday: boolean;
  age: number;
  userName: string;
}): string {
  if (data.isBirthday === true) {
    return `Congrats ${data.userName.toUpperCase()}, age ${data.age + 1}`;
  } else {
    return "Too bad";
  }
}

console.log(logBrthMsgObj(userData));

// Object destructuring
function logBrthMsgObj2({
  isBirthday,
  age,
  userName,
}: {
  isBirthday: boolean;
  age: number;
  userName: string;
}): string {
  if (isBirthday === true) {
    return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
  } else {
    return "Too bad";
  }
}

console.log(logBrthMsgObj2(userData));

function logBrthMsgObj3({
  isBirthday,
  age,
  userName,
  messages: { error },
}: {
  isBirthday: boolean;
  age: number;
  userName: string;
  messages: { error: string };
}): string {
  if (isBirthday === true) {
    return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
  } else {
    return error;
  }
}

console.log(logBrthMsgObj3(userData));

// *********************************************

let o: object;
let O: Object;

// o = 5; // Error
O = 5; // Ok

// o = ''; // Error
O = ""; // Ok

// o = true; // Error
O = true; // Ok

// o = null; // Error, strictNullChecks = true
// O = null; // Error, strictNullChecks = true

// o = undefined; // Error, strictNullChecks = true
// O = undefined; // Error, strictNullChecks = true
