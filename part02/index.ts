const str = "str";
console.log(str);

let userName: string = "Ivan";
// userName = 5; // Type 'number' is not assignable to type 'string'.ts(2322)
userName = "5";
// userName.isInteger(); // Property 'isInteger' does not exist on type 'string'.ts(2339)
