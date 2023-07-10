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

  const basicPorts: readonly number[] = [3000, 3001, 3002];
  // basicPorts[0] = 5; // Index signature in type 'readonly number[]' only permits reading.ts(2542)
  // basicPorts.push(5); // Property 'push' does not exist on type 'readonly number[]'.ts(2339)
}

{
  const basicPorts: readonly [number, ...string[]] = [3000, "3001", "3002"];
  // basicPorts[0] = 5; // Cannot assign to '0' because it is a read-only property.ts(2540)
  // basicPorts.push(5); // Property 'push' does not exist on type 'readonly [number, ...string[]]'.ts(2339)
}

{
  interface IUser {
    readonly login: string;
    password: string;
    age: number;
    addr?: string;
    parents?: {
      mother?: string;
      father?: string;
    };
  }

  const userFreeze: Readonly<IUser> = {
    login: "first!",
    password: "123",
    age: 50,
  };

  // userFreeze.age = 77; // Cannot assign to 'age' because it is a read-only property.ts(2540)
}
