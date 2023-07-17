// Utility types: Pick, Omit, Extract, Exclude, Record
{
  interface Currencies {
    usa: "usd";
    china: "cny";
    ukraine: "uah";
    kz: "tenge";
  }
  // Omit
  type CurrWithoutUSA = Omit<Currencies, "usa">;
  //   type CurrWithoutUSA = {
  //     china: "cny";
  //     ukraine: "uah";
  //     kz: "tenge";
  //   }

  // Pick
  type CurrUSAAndUkraine = Pick<Currencies, "usa" | "ukraine">;
  //   type CurrUSAAndUkraine = {
  //     usa: "usd";
  //     ukraine: "uah";
  //   }
}

{
  // Exlude
  type MyAnimation = "fade" | "swipe"; // type MyAnimation = "fade" | "swipe"
  type ExludeMyType1 = Exclude<MyAnimation, "swipe">; // type ExludeMyType = "fade"

  type Direction = "In" | "Out"; // type Direction = "In" | "Out"
  type MyNewAnimation = `${MyAnimation}${Direction}`; // type MyNewAnimation = "fadeIn" | "swipeIn" | "fadeOut" | "swipeOut"

  type ExludeMyType2 = Exclude<MyNewAnimation, "fadeOut">; // type ExludeMyType2 = "fadeIn" | "swipeIn" | "swipeOut"
  type ExludeMyType3 = Exclude<MyNewAnimation, "fadeOut" | "swipeIn">; // type ExludeMyType3 = "fadeIn" | "swipeOut"
}

{
  // Exlude
  interface Currencies {
    usa: "usd";
    china: "cny";
    ukraine: "uah";
    kz: "tenge";
  }

  // Exclude: type Exclude<T, U> = T extends U ? never : T
  type CountriesWithoutUSA = Exclude<keyof Currencies, "usa">; // type CountriesWithoutUSA = "china" | "ukraine" | "kz"
}

{
  // Extract
  type MyAnimation = "fade" | "swipe"; // type MyAnimation = "fade" | "swipe"
  type ExtractType = Extract<MyAnimation, "swipe">; // type ExtractType = "swipe"
}

{
  // Extract
  type MyAnimation = "fade" | "swipe";
  type Direction = "In" | "Out" | "swipe";
  type ExtractType = Extract<MyAnimation | Direction, "swipe">; // type ExtractType = "swipe"
}

{
  interface Currencies {
    usa: "usd";
    china: "cny";
    ukraine: "uah";
    kz: "tenge";
  }
  type PlayersNames = "alex" | "john";
  type CreateCustomCurr<T> = {
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
  };
  type CustomCurrencies = CreateCustomCurr<Currencies>;
  // Record
  type GameDataCurr = Record<PlayersNames, CustomCurrencies>;

  const gameData: GameDataCurr = {
    alex: {
      customChina: "qqqq",
      customKz: "ww",
      customUkraine: "ttt",
      customUsa: "yyyy",
    },
    john: {
      customChina: "qqqq",
      customKz: "ww",
      customUkraine: "ttt",
      customUsa: "yyyy",
    },
  };
}
