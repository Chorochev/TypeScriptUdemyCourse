{
  const box1 = document.querySelector(".box");
  // box1.style // Error
  box1?.classList; // Ok

  const box2 = document.querySelector(".box") as HTMLElement;
  box2.style; // Ok
  box2?.classList; // Ok
  console.log(box2);

  const input1 = document.querySelector("input") as HTMLInputElement;
  const someNumber1: number = +input1.value; // Ok
  console.log(someNumber1);
  console.log(someNumber1.toFixed());

  const someNumber2: number = input1.value as any as number; // Not recomended
  console.log(someNumber2 * 2); // Ok
  //console.log(someNumber2.toFixed()); // Runtime error: TypeError: someNumber2.toFixed is not a function

  //   Conversion of type 'string' to type 'number' may be a mistake
  //   because neither type sufficiently overlaps with the other.
  //   If this was intentional, convert the expression to 'unknown' first.ts(2352)
  // const someNumber3: number = input1.value as number; // Error

  const input2 = <HTMLInputElement>document.querySelector("input"); // It isn't work in REACT
  const someNumber3: number = +input2.value; // Ok
  console.log(someNumber3); // Ok
}
