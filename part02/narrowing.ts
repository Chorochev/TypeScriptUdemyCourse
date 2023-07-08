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

console.log("************************");

function narrowing_PrintMsg2(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m)); // (parameter) msg: string[]
  } else if (typeof msg === "number") {
    console.log(msg.toFixed()); // (parameter) msg: number
  } else {
    console.log(msg); // (parameter) msg: boolean
  }
}

narrowing_PrintMsg2(["msg1", "msg2", "msg3"]);
narrowing_PrintMsg2(13);
narrowing_PrintMsg2(true);
