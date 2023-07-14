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

  interface User<T extends "created" | Date> {
    created: T extends "created" ? "created" : Date;
  }

  const user1: User<"created"> = {
    created: "created",
  };

  const user2: User<Date> = {
    created: new Date(),
  };

  function calculateDailyCalories(str: string): IDataFromUser;
  function calculateDailyCalories(num: number): IDataFromBase;
  function calculateDailyCalories(
    numOrStr: string | number
  ): IDataFromUser | IDataFromBase {
    if (typeof numOrStr === "string") {
      const obj: IDataFromUser = { weight: numOrStr };
      return obj;
    } else {
      const obj: IDataFromBase = { calories: numOrStr };
      return obj;
    }
  }

  function calculateDailyCalories2<T extends string | number>(
    numOrStr: T
  ): T extends string ? IDataFromUser : IDataFromBase {
    if (typeof numOrStr === "string") {
      const obj: IDataFromUser = { weight: numOrStr };
      return obj as T extends string ? IDataFromUser : IDataFromBase;
    } else {
      const obj: IDataFromBase = { calories: numOrStr };
      return obj as T extends string ? IDataFromUser : IDataFromBase;
    }
  }

  function calculateDailyCalories3<T extends string | number>(
    numOrStr: T
  ): T extends string ? IDataFromUser : IDataFromBase {
    if (typeof numOrStr === "string") {
      const obj: IDataFromUser = { weight: numOrStr };
      return obj as TFromUserOrFromBase<T>;
    } else {
      const obj: IDataFromBase = { calories: numOrStr };
      return obj as TFromUserOrFromBase<T>;
    }
  }
}

{
  type GetStringType<T extends "hello" | "world" | string> = T extends "hello"
    ? "hello"
    : T extends "world"
    ? "world"
    : string;

  type t1 = GetStringType<"hello">; // type t1 = "hello"
  type t2 = GetStringType<"world">; // type t2 = "world"
  type t3 = GetStringType<string>; // type t3 = string
}
