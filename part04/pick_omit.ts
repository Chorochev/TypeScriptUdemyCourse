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
