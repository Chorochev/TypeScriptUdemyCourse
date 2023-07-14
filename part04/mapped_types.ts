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

{
  type Currencies = {
    usa: "usd";
    china: "cny";
    ukraine: "uah";
    kz: "tenge";
  };

  type CreateCustomCurr<T> = {
    [P in keyof T]: string;
  };

  type CustomCurrencies = CreateCustomCurr<Currencies>;
  // =>
  //   type CustomCurrencies = {
  //     usa: string;
  //     china: string;
  //     ukraine: string;
  //     kz: string;
  //   }

  const curr1: CustomCurrencies = {
    usa: "usd",
    china: "cny",
    ukraine: "uah",
    kz: "tenge",
  };
}

{
  interface Currencies {
    usa: "usd";
    china: "cny";
    ukraine: "uah";
    kz: "tenge";
  }

  type CreateCustomCurr<T> = {
    [P in keyof T]: string;
  };
  type CustomCurrencies = CreateCustomCurr<Currencies>;

  // readonly
  type CreateCustomCurrReadOnly1<T> = {
    readonly [P in keyof T]: string;
  };
  type CustomCurrenciesReadOnly1 = CreateCustomCurrReadOnly1<Currencies>;

  // readonly ?
  type CreateCustomCurrReadOnly2<T> = {
    readonly [P in keyof T]?: string;
  };
  type CustomCurrenciesReadOnly2 = CreateCustomCurrReadOnly2<Currencies>;

  // + readonly ?
  type CreateCustomCurrReadOnly3<T> = {
    +readonly [P in keyof T]+?: string;
  };
  type CustomCurrenciesReadOnly3 = CreateCustomCurrReadOnly3<Currencies>;
}

{
  interface Currencies {
    usa: "usd";
    china?: "cny";
    ukraine: "uah";
    readonly kz: "tenge";
  }
  // - readonly ?
  type CreateCustomCurrReadOnly<T> = {
    -readonly [P in keyof T]-?: string;
  };
  type CustomCurrenciesReadOnly = CreateCustomCurrReadOnly<Currencies>;
  const curr1: CustomCurrenciesReadOnly = {
    usa: "usd",
    china: "cny",
    ukraine: "uah",
    kz: "tenge",
  };
}
