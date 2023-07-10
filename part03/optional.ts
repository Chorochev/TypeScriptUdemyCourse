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
