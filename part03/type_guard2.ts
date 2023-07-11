{
  function isNumber(n: string[] | number | boolean): n is number {
    return typeof n === "number";
  }

  function isNumber2(n: unknown): n is number {
    return typeof n === "number";
  }

  function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
      msg.forEach((m) => console.log(m)); // (parameter) msg: string[]
    } else if (isNumber(msg)) {
      console.log(msg.toFixed()); // (parameter) msg: number
    } else {
      console.log(msg); // (parameter) msg: boolean
    }
  }

  printMsg(4);
  printMsg(true);
  printMsg(["test1", "test2"]);
}
