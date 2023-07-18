{
  interface IClass {
    name: string;
    startsAt: string;
    willStartsAt: string;
    duration: number;
    degree: number;
  }

  interface IClient {
    name: string;
    age: "-" | number;
    gender: "male" | "female";
    timeLeft: string;
    makeCallFor: Date;
    hobby: string;
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
        degree: 1,
      },
      {
        name: "trx",
        startsAt: "11:00 AM",
        duration: 45,
        degree: 1,
      },
      {
        name: "swimming",
        startsAt: "3:00 PM",
        duration: 70,
        degree: 1,
      },
    ],
    futureClasses: [
      {
        name: "boxing",
        willStartsAt: "6:00 PM",
        duration: 40,
        degree: 1,
      },
      {
        name: "breath training",
        willStartsAt: "8:00 PM",
        duration: 30,
        degree: 1,
      },
    ],
    currClients: [
      {
        name: "John Smith",
        age: "-",
        gender: "male",
        timeLeft: "1 month",
        hobby: "games",
      },
      {
        name: "Alise Smith",
        age: 35,
        gender: "female",
        timeLeft: "3 month",
        hobby: "games",
      },
      {
        name: "Ann Sonne",
        age: 24,
        gender: "female",
        timeLeft: "5 month",
        hobby: "games",
      },
    ],
    exClients: [
      {
        name: "Tom Smooth",
        age: 50,
        gender: "male",
        makeCallFor: new Date("2023-08-12"),
        hobby: "games",
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
