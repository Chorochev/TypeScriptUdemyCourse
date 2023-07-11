{
  const fetchData = (url: string, method: "GET" | "POST"): void => {
    console.log(method);
  };

  const reqOption = {
    url: "https://someurl.com",
    method: "GET",
  };

  fetchData("qqq", "GET");
  // fetchData(reqOption.url, reqOption.method); // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.ts(2345)
  fetchData(reqOption.url, reqOption.method as "GET"); // Ok

  const method = "GET";
  fetchData(reqOption.url, method); // Ok

  const methodStr: string = "GET";
  // fetchData(reqOption.url, methodStr); // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.ts(2345)
}

{
  const fetchData = (url: string, method: "GET" | "POST"): void => {
    console.log(method);
  };

  const reqOption = {
    url: "https://someurl.com",
    method: "GET",
  } as const; // !!!

  fetchData(reqOption.url, reqOption.method); // Ok
}

{
  const fetchData = (url: string, method: "GET" | "POST"): void => {
    console.log(method);
  };

  const reqOption = {
    url: "https://someurl.com",
    method: "GET" as "GET", // !!!
  };

  fetchData(reqOption.url, reqOption.method); // Ok
}

{
  const fetchData = (url: string, method: "GET" | "POST"): void => {
    console.log(method);
  };

  const reqOption = {
    url: "https://someurl.com",
    method: "GET", // !!!
  };

  fetchData(reqOption.url, reqOption.method as "GET"); // Ok
  fetchData(reqOption.url, <"GET">reqOption.method); // Ok
}

{
  let a = "value" as const; // let a: "value"
  let b = { f: 100 } as const; // let b: { readonly f: 100; }
  let c = [] as const; //let c: readonly []

  let value = "value";
  let arr = ["sd", "dff"];
  let obj = { f: 100 };
  let T0 = value; // OK
  // let T1 = value as const; // A 'const' assertions can only be applied to references to enum members, or string, number, boolean, array, or object literals.ts(1355)
  let T2 = obj; // Ok
  // let T3 = obj as const; // Error

  let T5 = Math.round(Math.random() * 1) ? "yes" : "no"; // let T5: string
  // let T6 = (Math.round(Math.random() * 1) ? "yes" : "no") as const; // Error
}
