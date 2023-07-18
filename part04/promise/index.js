var toDoList1 = [];
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) { return response.json(); }) // (parameter) response: Response
    .then(function (json) {
    // (parameter) json: any
    if ("id" in json) {
        toDoList1.push(json);
    }
    console.log(toDoList1);
});
var toDoList2 = [];
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) { return response.json(); })
    .then(function (json) {
    if ("id" in json) {
        toDoList2.push(json);
    }
    else if (Array.isArray(json)) {
        toDoList2 = json;
    }
    else {
        console.log("JSON - is a string");
    }
    console.log(toDoList2);
});
// fetch(""); // function fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>
// fetch() return Promise<Response>
