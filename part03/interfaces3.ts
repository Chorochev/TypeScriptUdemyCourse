const serverNewConfig = {
  protocol: "https",
  port: 3001,
  role: "admin",
};

const backupNewConfig = {
  protocol: "http",
  port: 3000,
};

interface IBasicConfig {
  protocol: string;
  port: number;
}

const startNewServer = (config: IBasicConfig): "Server started" => {
  console.log(`Server started on ${config.protocol}://server:${config.port}`);
  return "Server started";
};

startNewServer(serverNewConfig);
startNewServer(backupNewConfig);
