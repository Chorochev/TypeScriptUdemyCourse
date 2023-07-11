{
  //     Providing Fallback Values with the ?? Operator
  // The ?? operator can be used to provide a fallback value in case another value is null or undefined.
  // It takes two operands and is written like this:
  // If the left operand is null or undefined, the ?? expression evaluates to the right operand:
  console.log(null ?? "n/a"); // "n/a"
  console.log(undefined ?? "n/a"); // "n/a"

  // Otherwise, the ?? expression evaluates to the left operand:
  console.log(false ?? true); // false
  console.log(0 ?? 100); // 0
  console.log("" ?? "n/a"); // ""
  console.log(NaN ?? 0); // NaN

  // Notice that all left operands above are falsy values.
  // If we had used the || operator instead of the ?? operator,
  // all of these expressions would've evaluated to their respective right operands:
  console.log(false || true); // true
  console.log(0 || 100); // 100
  console.log("" || "n/a"); // "n/a"
  console.log(NaN || 0); // 0
}
