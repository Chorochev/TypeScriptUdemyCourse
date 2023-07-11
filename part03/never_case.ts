{
  function func1(item: "true" | "false"): void {
    if (item === "false") {
      console.log("(parameter) item: false");
      // const smth: never = item; // Error
    } else if (item === "true") {
      console.log("(parameter) item: true");
      // const smth: never = item; // Error
    } else {
      console.log("(parameter) item: never");
      const smth: never = item; // Ok
    }
  }

  func1("true");
  func1("false");
  //   func1("something"); // Error
}

{
  function func1(item: "true" | "false"): string {
    if (item === "false") {
      return "(parameter) item: false";
    } else if (item === "true") {
      return "(parameter) item: true";
    } else {
      return "(parameter) item: never";
    }
    return "???";
  }
}
