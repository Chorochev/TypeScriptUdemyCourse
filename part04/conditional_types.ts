// Conditional types and infer
{
  const conditionalExample = 1 == 1 ? true : false;
  // SomeType extends OtherType ? TrueType : FalseType;
  type Example1 = "string" extends "Hello" ? string : number; // type Example = number
  type Example2 = "string" extends "string" ? string : number; // type Example2 = string

  const strType1: string = "string";
  const strType2: string = "Hello";
  // type Example3 = strType1 extends "Hello" ? string : number; // Error: 'strType1' refers to a value, but is being used as a type here. Did you mean 'typeof strType1'?ts(2749)
  // type Example4 = strType1 extends strType2 ? string : number; // Error
}

{
  interface IDataFromUser {
    weight: string;
  }

  interface IDataFromBase {
    calories: number;
  }

  type TFromUserOrFromBase<T extends string | number> = T extends string
    ? IDataFromUser
    : IDataFromBase;

  const data1: TFromUserOrFromBase<string> = {
    weight: "Admin",
  };

  const data2: TFromUserOrFromBase<number> = {
    calories: 200,
  };

  console.log(`${data1.weight} ${data2.calories}`);
}

{
  interface User<T extends "created" | Date> {
    created: T extends "created" ? "created" : Date;
  }

  const user1: User<"created"> = {
    created: "created",
  };

  const user2: User<Date> = {
    created: new Date(),
  };
}
