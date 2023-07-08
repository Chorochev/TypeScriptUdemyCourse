const message1: string | number | boolean = 5;
const messages1: string[] | number[] = ["a", "b"];
// const messages2: string[] | number[] = ["a", "b", 3]; // Error
const dataUnion1: (string | number)[] = ["name", 5];
const dataUnion2: (string | number)[] = ["name", "name"];
const dataUnion3: (string | number)[] = [2, 3];
console.log("message1: " + message1);
console.log("messages1: " + messages1);
console.log("dataUnion1: " + dataUnion1);
console.log("dataUnion2: " + dataUnion2);
console.log("dataUnion3: " + dataUnion3);
// const dataUnion4: (string | number)[] = 7; // Error

function printMsg(msg: string | number | boolean): void {
  console.log(msg);
  // console.log(msg.toUpperCase()); // Error
}

printMsg(13);
printMsg("A test message.");
printMsg(true);
