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

{
  const someValue: unknown = 10;
  // someValue.method(); // 'someValue' is of type 'unknown'.ts(18046)
}

{
  function fetchData(data: unknown): void {
    if (typeof data === "string") {
      console.log(data.toUpperCase());
    }
    if (typeof data === "number") {
      console.log(`${data}^2 = ${data * data}`);
    }
  }

  fetchData("test");
  fetchData(5);
}

{
  const userDate =
    '{"isBirthdayData": true, "ageDate": 40, "userNameData": "John"}';

  function safeParse(s: string): unknown {
    return JSON.parse(s);
  }

  const data = safeParse(userDate);

  function transferDate(d: unknown): void {
    if (typeof d === "string") {
      console.log(d.toUpperCase());
    } else if (typeof d === "object" && d) {
      console.log(data);
    } else {
      console.log("Some error...");
    }
  }

  transferDate(data);
}
