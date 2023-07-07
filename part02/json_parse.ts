const userDate =
  '{"isBirthdayData": true, "ageDate": 40, "userNameData": "John"}';

const userObj = JSON.parse(userDate);

console.log(userObj.testField); // undefined
// console.log(userObj.testFunc()); // TypeError: userObj.testFunc is not a function
console.log(userObj.userNameData); // John

const userObj2: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
} = JSON.parse(userDate);
console.log(userObj2.userNameData); // John
