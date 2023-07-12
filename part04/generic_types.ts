// Generic type
{
  // base construction:
  type Smth<T> = T;
  const num: Smth<number> = 5;
}

{
  type User<T> = {
    login: T;
    age: number;
  };

  const user1: User<string> = {
    login: "admin",
    age: 55,
  };

  const user2: User<"str"> = {
    login: "str",
    age: 55,
  };
}

{
  // Helper types
  type OrNull<Type> = Type | null;
  type OneOrMany<Type> = Type | Type[];

  const data1: OneOrMany<number[]> = [1, 5];
  const data2: OneOrMany<number> = [1, 5];
  console.log(data1); // [ 1, 5 ]
  console.log(data2); // [ 1, 5 ]
}

{
  interface User<ParentsData> {
    login: string;
    age: number;
    parents: ParentsData;
  }
  const user1: User<{ mother: string; father: string }> = {
    login: "admin",
    age: 55,
    parents: {
      mother: "Anna",
      father: "no data",
    },
  };

  const user2: User<string> = {
    login: "admin",
    age: 55,
    parents: "",
  };
}

{
  // Generic constraints
  interface IParentsOfUser {
    mother: string;
    father: string;
  }

  // Generic constraints
  interface User1<ParentsData extends IParentsOfUser> {
    login: string;
    age: number;
    parents: ParentsData;
  }

  const user1: User1<{ mother: string; father: string; isMarried: boolean }> = {
    login: "admin",
    age: 55,
    parents: {
      mother: "Anna",
      father: "Max",
      isMarried: true, // Ok
    },
  };

  interface User2 {
    login: string;
    age: number;
    parents: IParentsOfUser;
  }

  const user2: User2 = {
    login: "admin",
    age: 55,
    parents: {
      mother: "Anna",
      father: "no data",
      // married: true, // Error
    },
  };
}
