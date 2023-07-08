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

console.log("************************");

const printReadings1 = (a: number | string, b: number | boolean) => {
  if (a === b) {
    console.log(a, b);
  }
};

const printReadings2 = (a: number[] | string, b: number) => {
  console.log(a.slice(0, 3));
};

printReadings1(100, 100);
printReadings2("10000", 100);

console.log("************************");

function checkReadings(readings: { system: number } | { user: number }): void {
  if ("system" in readings) {
    console.log("readings.system => " + readings.system);
  } else {
    console.log("readings.user => " + readings.user);
  }
  console.log(readings); // (parameter) readings: { system: number;} | {user: number;}
}

checkReadings({ system: 4 });
checkReadings({ user: 13 });
