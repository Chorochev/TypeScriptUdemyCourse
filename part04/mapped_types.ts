// Mapped types
{
  type Currencies = {
    usa: "usd";
    china: "cny";
    ukraine: "uah";
    kz: "tenge";
  };

  type ReadOnlyCurr = Readonly<Currencies>;

  type CustomCurrencies = {
    usa: string;
    china: string;
    ukraine: string;
    kz: string;
  };

  // syntax of Mapped types
  //   type myType = {
  //     [id im array]: arrtypes;
  //   }

  type Keys = "name" | "age" | "role";
  type User = {
    [K in Keys]: string;
  };
  // =>
  //   type User = {
  //     name: string;
  //     age: string;
  //     role: string;
  //   }
  const alex: User = {
    name: "Alex",
    age: "25",
    role: "admin",
  };
}
