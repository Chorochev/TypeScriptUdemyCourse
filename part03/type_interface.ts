{
  let salary; // let salary: any
  salary = 500; // let salary: any

  interface IUserData {
    isBirthdayData: boolean;
    ageDate: number;
    userNameData: string;
  }

  const userDate =
    '{"isBirthdayData": true, "ageDate": 40, "userNameData": "John"}';

  const userObj: IUserData = JSON.parse(userDate);
  console.log(userObj.userNameData);
}
