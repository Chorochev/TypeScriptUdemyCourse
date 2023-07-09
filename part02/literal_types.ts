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
