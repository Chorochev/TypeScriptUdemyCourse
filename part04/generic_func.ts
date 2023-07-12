{
  function genericFunc<T, S>(data: T, option: S): T {
    return data;
  }

  const val1 = genericFunc(100, "test"); // const val1: 100
  const val2 = genericFunc("100", true); // const val2: "100"
  const val3 = genericFunc<string, boolean>("100", true);
}

{
  function genericFunc<T, S>(data: T, option: S, dataArr: T[]): string {
    // data.length; // Error
    dataArr.length; // Ok
    switch (typeof data) {
      case "string":
        return `${data}, speed: ${option}`;
        break;
      case "number":
        return `${data.toFixed()}, speed: ${option}`;
        break;
      default:
        return "Not valid";
    }
  }

  const val1 = genericFunc<number, string>(100, "test", [1, 2, 3, 4]);
}
