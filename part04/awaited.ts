// Awaited
// This type is meant to model operations like await in async functions,
// or the .then() method on Promises - specifically, the way that
// they recursively unwrap Promises.
{
  // type FromPromise1 = Promise<number>
  type FromPromise1 = Promise<number>;
  // type FromPromise2 = number
  type FromPromise2 = Awaited<Promise<number>>;
  // type FromPromise3 = number
  type FromPromise3 = Awaited<Promise<Promise<number>>>;
}

{
  interface IUser {
    name: string;
  }

  async function fetchUsers(): Promise<IUser[]> {
    const users: IUser[] = [{ name: "Alex" }, { name: "John" }];
    return users;
  }
  // const users: Promise<IUser[]>
  const users = fetchUsers();
  // type FetchUsersReturnType = IUser[]
  type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
  // type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T
  type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
  // type FetchDataReturnType = IUser[]
  type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUsers>>;
}
