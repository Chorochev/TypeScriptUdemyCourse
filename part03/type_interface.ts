{
  let salary; // let salary: any
  salary = 500; // let salary: any

  let salary2 = 500; // let salary2: number

  interface IUserData {
    isBirthdayData: boolean;
    ageDate: number;
    userNameData: string;
  }

  const userDate =
    '{"isBirthdayData": true, "ageDate": 40, "userNameData": "John"}';

  const userObj: IUserData = JSON.parse(userDate);
  console.log(userObj.userNameData);

  let isOkey = true;
  let movement: boolean | string;
  if (isOkey) {
    movement = "moving";
  }
}
