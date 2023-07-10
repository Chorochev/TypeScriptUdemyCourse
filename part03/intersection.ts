type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

// old
// const serverConfig: { protocol: "http" | "https"; port: 3000 | 3001 } = {
//   protocol: "https",
//   port: 3001,
// };

// new
const serverConfig: Config = {
  protocol: "https",
  port: 3001,
};

const backupConfig: Config = {
  protocol: "http",
  port: 3000,
};
