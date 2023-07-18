// Utility: ReturnType, Parameters, ConstructorParameters
{
  function calculate(a: number, b: number): number {
    return a * b;
  }
  // ReturnType - Obtain the return type of a function type
  type CalculateRT = ReturnType<typeof calculate>; // type CalculateRT = number

  let anotherRes: CalculateRT = 5; // let anotherRes: number

  // Parameters - Obtain the parameters of a function type in a tuple
  type CalculateParamT = Parameters<typeof calculate>; // type CalculateParamT = [a: number, b: number]

  type PT1 = Parameters<(a: number) => number>; // type PT1 = [a: number]
  type PT2 = Parameters<<T>(arg: T) => T>; // type PT2 = [arg: unknown]

  class Example {
    constructor(a: number) {}
  }

  // ConstructorParameters - Obtain the parameters of a constructor function type in a tuple
  type T0 = ConstructorParameters<typeof Example>; // type T0 = [a: number]
}

{
  function calculate(a: number, b: number): number {
    return a * b;
  }
  type CalculateRT = ReturnType<typeof calculate>;
  type CalculateParamT = Parameters<typeof calculate>; // type CalculateParamT = [a: number, b: number]
  const param1: CalculateParamT = [100, 99];
  // console.log(CalculateRT); // 'CalculateRT' only refers to a type, but is being used as a value here.ts(2693)
  console.log(param1);
}

{
  // Type 'string' does not satisfy the constraint '(...args: any) => any'.ts(2344)
  // type T7 = ReturnType<string>;
  //
  // Type 'Function' does not satisfy the constraint '(...args: any) => any'.
  // Type 'Function' provides no match for the signature '(...args: any): any'.ts(2344)
  // type T8 = ReturnType<Function>;
}
