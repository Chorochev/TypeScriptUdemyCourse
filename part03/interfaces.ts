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
