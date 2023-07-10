type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

// old
const serverConfigOld: { protocol: "http" | "https"; port: 3000 | 3001 } = {
  protocol: "https",
  port: 3001,
};

// new
const serverConfig: Config = {
  protocol: "https",
  port: 3001,
};

const backupConfig: Config = {
  protocol: "http",
  port: 3000,
};

type Role = {
  role: string;
};

// Intersection
type ConfigWithRole = Config & Role;

const serverConfigWithRole: ConfigWithRole = {
  protocol: "http",
  port: 3000,
  role: "admin",
};

// ************************************
const startServerold: (
  protocol: "http" | "https",
  port: 3000 | 3001
) => string = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server start" => {
  console.log(`Server started on ${protocol}://server:${port}`);
  return "Server start";
};

type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;

const startServerNew: StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server start" => {
  console.log(`Server started on ${protocol}://server:${port}`);
  return "Server start";
};
