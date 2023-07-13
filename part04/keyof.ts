// The keyof type operator
{
  interface ICommpany {
    name: string;
    debts: number;
  }

  type CompanyKeys = keyof ICommpany;
  const key1: CompanyKeys = "name"; // 'debts' or 'name'
  const key2: CompanyKeys = "debts"; // 'debts' or 'name'
  // const key3: CompanyKeys = "smth"; // Type '"smth"' is not assignable to type 'keyof ICommpany'.ts(2322)

  function printDebts<T, K extends keyof T, S extends keyof T>(
    company: T,
    name: K,
    debts: S
  ) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`);
  }

  const hh: ICommpany = {
    name: "HH",
    debts: 50000,
  };
  printDebts(hh, "name", "debts");

  const google = {
    name: "Google",
    open: "true",
  };
  printDebts(google, "name", "open");
}
