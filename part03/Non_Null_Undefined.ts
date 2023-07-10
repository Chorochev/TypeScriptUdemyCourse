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

  const dbName = "mydb";

  function sendUserData(obj: User, db?: string): void {
    // obj.parents! - it always exists
    console.log(obj.parents!.father?.toLocaleUpperCase(), db?.toLowerCase());
  }
}
