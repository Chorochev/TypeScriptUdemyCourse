// Interfaces
interface IConfig {
  protocol: "https";
  port: 3001;
}

const serverConfigI: IConfig = {
  protocol: "https",
  port: 3001,
};

// interface extends

interface IRole {
  role: string;
}

interface IConfigWithRole extends IConfig, IRole {
  test: string;
}

const serverConfig2: IConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "admin",
  test: "Hello world",
};

// *******************************************
// methods

interface IConfigWithRole3 extends IConfig, IRole {
  log: (msg: string) => void;
}

const serverConfig3: IConfigWithRole3 = {
  protocol: "https",
  port: 3001,
  role: "admin",
  log: (msg: string): void => console.log(msg),
};

// *******************************************
type StartFunction2 = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: Function // Not recomended
) => string;

const startServerNew2: StartFunction2 = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: Function // Not recomended
): "Server start" => {
  log(`Server started on ${protocol}://server:${port}`);
  return "Server start";
};

startServerNew2(serverConfig3.protocol, serverConfig3.port, serverConfig3.log);

// *******************************************
type StartFunction3 = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void // recomended
) => string;

const startServerNew3: StartFunction3 = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void // recomended
): "Server start" => {
  log(`Server started on ${protocol}://server:${port}`);
  return "Server start";
};

startServerNew3(serverConfig3.protocol, serverConfig3.port, serverConfig3.log);
