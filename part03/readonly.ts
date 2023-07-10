{
  interface User {
    readonly login: string;
    password: string;
    age: number;
    addr?: string;
    parents?: {
      mother?: string;
      father?: string;
    };
  }

  const user: User = {
    login: "first!",
    password: "123",
    age: 50,
  };

  // user.login = "Ivan"; // Cannot assign to 'login' because it is a read-only property.ts(2540)
  user.password = "test"; // Ok

  class Animal {
    readonly name: string = "cat";
  }
}
