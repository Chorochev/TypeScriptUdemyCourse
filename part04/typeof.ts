// typeof
{
  let s = "hello";
  let n: typeof s; // let n: string
}

{
  interface ICommpany {
    name: string;
    debts: number;
  }

  const google: ICommpany = {
    name: "Google",
    debts: 50000,
  };

  // type GoogleKeys = keyof google; // type google = /*unresolved*/ any
  type GoogleKeys = keyof typeof google;
  const keys: GoogleKeys = "debts"; // type GoogleKeys = keyof ICommpany
}

{
  const google = {
    name: "Google",
    debts: 50000,
  };
  type GoogleKeys = keyof typeof google; // type GoogleKeys = "name" | "debts"
  const keys: GoogleKeys = "debts"; // const keys: "name" | "debts"
}
