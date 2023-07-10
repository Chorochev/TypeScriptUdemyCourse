{
  interface User {
    login: string;
    password: string;
    age: number;
    addr?: string; // !!!
  }

  const user: User = {
    login: "first!",
    password: "123",
    age: 50,
  };
}

{
  interface User {
    login: string;
    password: string;
    age: number;
    addr: string | undefined; // !!!
  }

  const user: User = {
    login: "first!",
    password: "123",
    age: 50,
    addr: "tttttttt", // !!!
  };
}

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
    console.log(obj, db?.toLowerCase());
  }
}
