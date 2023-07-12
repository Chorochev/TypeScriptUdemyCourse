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
