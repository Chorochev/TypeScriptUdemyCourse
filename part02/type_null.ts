const test: null = null;
const test2: any = null;
// const test3: string = null; // Type 'null' is not assignable to type 'string'.ts(2322)
const test4: undefined = undefined;
const test5: any = undefined;
// const test6: string = undefined; //Type 'undefined' is not assignable to type 'string'.ts(2322)
let smth; // let smth: any

function getRndDate() {
  if (Math.random() < 0.5) {
    return null;
  } else {
    return "  Some data  ";
  }
}

const data: string | null = getRndDate();
const trimmerData = data ? data.trim() : null;

console.log(data + " => " + trimmerData);
