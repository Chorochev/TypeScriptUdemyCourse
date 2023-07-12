{
  function simpleFunc(
    data: number | string | boolean
  ): number | string | boolean {
    // ...
    return data;
  }

  function genericFunc<T>(data: T): T {
    return data;
  }

  const val1 = genericFunc(100); // const val1: 100
  const val2 = genericFunc("100"); // const val2: "100"
  const val3 = genericFunc([1, 2, 3, 4]); // const val3: number[]
  const arr1: number[] = [1, 2, 3, 4]; // const arr1: number[]
  const val4 = genericFunc(arr1); // const val3: number[]

  let val11 = genericFunc(100); // let val11: number
  let val12 = genericFunc("100"); // let val12: string
  let val13 = genericFunc([1, 2, 3, 4]); // let val13: number[]
  let arr11: number[] = [1, 2, 3, 4]; // let arr11: number[]
  let val14 = genericFunc(arr1); // let val13: number[]
}
