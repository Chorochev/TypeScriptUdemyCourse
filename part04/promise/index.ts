interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

let toDoList1: ToDo[] = [];

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) // (parameter) response: Response
  .then((json) => {
    // (parameter) json: any
    if ("id" in json) {
      toDoList1.push(json);
    }
    console.log(toDoList1);
  });

let toDoList2: ToDo[] = [];
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    if ("id" in json) {
      toDoList2.push(json);
    } else if (Array.isArray(json)) {
      toDoList2 = json;
    } else {
      console.log("JSON - is a string");
    }
    console.log(toDoList2);
  });

// fetch(""); // function fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>
// fetch() return Promise<Response>
