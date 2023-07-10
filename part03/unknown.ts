{
  let smth: any;
  smth = "str";
  let data: string[] = smth;
  // Runtime error
  // data.find((e) => e); // TypeError: data.find is not a function
}

{
  let smth: unknown;
  smth = "str";
  //let data: string[] = smth; // Type 'unknown' is not assignable to type 'string[]'.ts(2322)
  let data: string[] = ["str1", "str2"]; // Ok
  console.log(data.find((e) => e)); // Ok
}

{
  const someValue: any = 10;
  // Runtime error
  // someValue.method(); // TypeError: someValue.method is not a function
}
