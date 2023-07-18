{
  interface IClass {
    name: string;
    startsAt: string;
    willStartsAt: string;
    duration: number;
  }

  interface IClient {
    name: string;
    age: "-" | number;
    gender: "male" | "female";
    timeLeft: string;
    makeCallFor: Date;
  }

  type TClasses = Omit<IClass, "willStartsAt">;
  type TFutureClasses = Omit<IClass, "startsAt">;
  type TCurrClients = Omit<IClient, "makeCallFor">;
  type TExClients = Omit<IClient, "timeLeft">;
  type TFutureClients = Pick<IClient, "name" | "makeCallFor">;

  interface IfitnessClubCenter {
    clubName: string;
    location: string;
    classes: TClasses[];
    futureClasses: TFutureClasses[];
    currClients: TCurrClients[];
    exClients: TExClients[];
    futureClients: TFutureClients[];
  }

  const fitnessClubCenter: IfitnessClubCenter = {
    clubName: "Fitness club Center",
    location: "central ave. 45, 5th floor",
    classes: [
      {
        name: "yoga",
        startsAt: "8:00 AM",
        duration: 60,
      },
      {
        name: "trx",
        startsAt: "11:00 AM",
        duration: 45,
      },
      {
        name: "swimming",
        startsAt: "3:00 PM",
        duration: 70,
      },
    ],
    futureClasses: [
      {
        name: "boxing",
        willStartsAt: "6:00 PM",
        duration: 40,
      },
      {
        name: "breath training",
        willStartsAt: "8:00 PM",
        duration: 30,
      },
    ],
    currClients: [
      {
        name: "John Smith",
        age: "-",
        gender: "male",
        timeLeft: "1 month",
      },
      {
        name: "Alise Smith",
        age: 35,
        gender: "female",
        timeLeft: "3 month",
      },
      {
        name: "Ann Sonne",
        age: 24,
        gender: "female",
        timeLeft: "5 month",
      },
    ],
    exClients: [
      {
        name: "Tom Smooth",
        age: 50,
        gender: "male",
        makeCallFor: new Date("2023-08-12"),
      },
    ],
    futureClients: [
      {
        name: "Maria",
        makeCallFor: new Date("2023-07-10"),
      },
    ],
  };
}
