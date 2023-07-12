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
