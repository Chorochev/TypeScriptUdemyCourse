{
  interface User {
    login: string;
    password: string;
    age: number;
    addr?: string; // ? - Optional Properties
    parents?: // ? - Optional Properties
    {
      mother?: string; // ? - Optional Properties
      father?: string; // ? - Optional Properties
    };
  }

  const user: User = {
    login: "first!",
    password: "123",
    age: 50,
  };

  let dbName: string;
  sendUserData(user, "mydb");
  // console.log(dbName); // Variable 'dbName' is used before being assigned.ts(2454)
  console.log(dbName!); // Ok

  function sendUserData(obj: User, db?: string): void {
    dbName = "dijfhjdh";
    // obj.parents! - it always exists
    console.log(obj.parents!.father?.toLocaleUpperCase(), db?.toLowerCase());
  }
}
