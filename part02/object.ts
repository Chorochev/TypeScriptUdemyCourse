const userData = {
  isBirthday: true,
  age: 40,
  userName: "John",
  smth: "test",
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
