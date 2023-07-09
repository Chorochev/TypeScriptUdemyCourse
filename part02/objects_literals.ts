const serverConfig31 = {
  protocol: "https",
  port: 3001,
};

function startServer31(
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server start" {
  console.log(`Server started on ${protocol}://server:${port}`);
  return "Server start";
}

// Argument of type 'string' is not assignable to parameter of type '"https" | "http"'.ts(2345)
// startServer31(serverConfig31.protocol, serverConfig31.port); // Error

// Object literal type
const serverConfig32: { protocol: "http" | "https"; port: 3000 | 3001 } = {
  protocol: "https",
  port: 3001,
};

function startServer32(
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server start" {
  console.log(`Server started on ${protocol}://server:${port}`);
  return "Server start";
}

startServer32(serverConfig32.protocol, serverConfig32.port); // Ok

// // Property 'start' is missing in type
// const serverConfig33: {
//   protocol: "http" | "https";
//   port: 3000 | 3001;
//   start: () => {};
// } = {
//   protocol: "https",
//   port: 3001,
// };

const serverConfig33: { protocol: "http" | "https"; port: 3000 | 3001 } = {
  protocol: "https",
  port: 3001,
};

const startServer33: (
  protocol: "http" | "https",
  port: 3000 | 3001
) => string = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server start" => {
  console.log(`Server started on ${protocol}://server:${port}`);
  return "Server start";
};

startServer33(serverConfig32.protocol, serverConfig32.port); // Ok
