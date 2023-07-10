{
  let smth: any;
  smth = "str";
  let data: string[] = smth;
  // Runtime error
  // data.find((e) => e); // TypeError: data.find is not a function
}
