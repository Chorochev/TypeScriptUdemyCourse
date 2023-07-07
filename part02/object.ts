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
