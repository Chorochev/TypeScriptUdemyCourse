// Template literal types
{
  type MyAnimation = "fade"; // type MyAnimation = "fade"
  type MyNewAnimation = `${MyAnimation}In`; // type MyNewAnimation = "fadeIn"
}

{
  type MyAnimation = "fade" | "swipe"; // type MyAnimation = "fade" | "swipe"
  type MyNewAnimation = `${MyAnimation}In`; // type MyNewAnimation = "fadeIn" | "swipeIn"
}

{
  type MyAnimation = "fade" | "swipe"; // type MyAnimation = "fade" | "swipe"
  type Direction = "In" | "Out"; // type Direction = "In" | "Out"
  type MyNewAnimation1 = `${MyAnimation}${Direction}`; // type MyNewAnimation1 = "fadeIn" | "swipeIn" | "fadeOut" | "swipeOut"
  type MyNewAnimation2 = `${MyAnimation}${Capitalize<Direction>}`; // type MyNewAnimation2 = "fadeIn" | "swipeIn" | "fadeOut" | "swipeOut"
}

{
  type MyAnimation = "fade" | "swipe"; // type MyAnimation = "fade" | "swipe"
  type Direction = "In" | 5; // type Direction = "In" | "Out"
  // !!! Capitalize - Only string
  // type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`; // Error
}

{
  interface Currencies {
    usa: "usd";
    china?: "cny";
    ukraine: "uah";
    kz: "tenge";
  }

  type MyAnimation = "fade" | "swipe";
  type CreateCustomCurr1<T> = {
    [P in keyof T as MyAnimation]: string;
  };
  type CustomCurrencies1 = CreateCustomCurr1<Currencies>;

  //   Error
  //   type CreateCustomCurr2<T> = {
  //     [P in keyof T as `custom${Capitalize<P>}}`]: string;
  //   };

  //Capitalize - Convert first character of string literal type to uppercase

  type CreateCustomCurr3<T> = {
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
  };
  type CustomCurrencies3 = CreateCustomCurr3<Currencies>;
  //   type CustomCurrencies3 = {
  //     "customUsa": string;
  //     "customChina"?: string | undefined;
  //     "customUkraine": string;
  //     "customKz": string;
  //   }
}

{
  type EmailLocaleIDs = "welcome_email" | "email_heading";
  type FooterLocaleIDs = "footer_title" | "footer_sendoff";

  type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
  // type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
}
