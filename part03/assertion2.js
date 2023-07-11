{
    var box1 = document.querySelector(".box");
    // box1.style // Error
    box1 === null || box1 === void 0 ? void 0 : box1.classList; // Ok
    var box2 = document.querySelector(".box");
    box2.style; // Ok
    box2 === null || box2 === void 0 ? void 0 : box2.classList; // Ok
    console.log(box2);
    var input1 = document.querySelector("input");
    var someNumber1 = +input1.value; // Ok
    console.log(someNumber1);
    console.log(someNumber1.toFixed());
    var someNumber2 = input1.value; // Not recomended
    console.log(someNumber2 * 2); // Ok
    //console.log(someNumber2.toFixed()); // Runtime error: TypeError: someNumber2.toFixed is not a function
    //   Conversion of type 'string' to type 'number' may be a mistake
    //   because neither type sufficiently overlaps with the other.
    //   If this was intentional, convert the expression to 'unknown' first.ts(2352)
    // const someNumber3: number = input1.value as number; // Error
    var input2 = document.querySelector("input"); // It isn't work in REACT
    var someNumber3 = +input2.value; // Ok
    console.log(someNumber3); // Ok
}
