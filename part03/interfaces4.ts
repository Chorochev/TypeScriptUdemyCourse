interface IBasicConfig2 {
  protocol: string;
  port: number;
}

const serverNewConfig2: IBasicConfig2 = {
  protocol: "https",
  port: 3001,
};

const backupNewConfig2: IBasicConfig2 = {
  protocol: "http",
  port: 3000,
};

const startNewServer2 = (config: IBasicConfig2): "Server started" => {
  console.log(`Server started on ${config.protocol}://server:${config.port}`);
  return "Server started";
};

startNewServer2(serverNewConfig2);
startNewServer2(backupNewConfig2);
