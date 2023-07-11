{
  const fetchData = (url: string, method: "GET" | "POST"): void => {
    console.log("Retched!");
  };

  const reqOption = {
    url: "https://someurl.com",
    method: "GET",
  };

  fetchData("qqq", "GET");
  // fetchData(reqOption.url, reqOption.method); // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.ts(2345)
  const method = "GET";
  fetchData(reqOption.url, method); // Ok

  const methodStr: string = "GET";
  // fetchData(reqOption.url, methodStr); // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.ts(2345)
}
