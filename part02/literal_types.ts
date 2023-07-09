// Literal types
let msg4: "Hello" = "Hello";
msg4 = "Hello"; // Ok
// msg4 = "Test"; // Type '"Test"' is not assignable to type '"Hello"'.ts(2322)

function startServer(
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server start" {
  console.log(`Server started on ${protocol}://server:${port}`);
  return "Server start";
}

startServer("http", 3001);

const port3000: number = 3000;
const port3001: number = 3001;

function startServer2(
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server start" {
  if (port === port3000 || port === port3001) {
    console.log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.log("Invalid port");
  }
  return "Server start";
}

startServer2("http", 3001);
