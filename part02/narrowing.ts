function narrowing_PrintMsg(msg: string | number): void {
  if (typeof msg === "string") {
    console.log(msg.toUpperCase()); // (parameter) msg: string
  } else {
    console.log(msg.toExponential()); // (parameter) msg: number
  }
  console.log(msg); // (parameter) msg: string | number
}

narrowing_PrintMsg(13);
narrowing_PrintMsg("A test message.");
