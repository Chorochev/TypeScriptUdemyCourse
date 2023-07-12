{
  type voidFunc = () => void;

  const retString: voidFunc = () => {
    return "str";
  };

  const s = retString(); // const s: void
  console.log(s); // str

  const retNum: voidFunc = () => {
    return 5;
  };

  const n = retNum(); // const n: void
  console.log(n); // 5

  const names = ["Anna", "John"]; // const names: string[]
  const newArr = names.slice(); // const newArr: string[]

  // !!! forEach: void
  // (method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
  // (parameter) arr: string[]
  // !!! (method) Array<string>.push(...items: string[]): number
  names.forEach((name, i, arr) => arr.push("Hey!"));
}
