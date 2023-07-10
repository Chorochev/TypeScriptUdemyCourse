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
