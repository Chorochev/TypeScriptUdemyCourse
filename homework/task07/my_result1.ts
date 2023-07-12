{
  // Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

  type THours<T> = {
    total: T;
    inMenu: T;
  };

  interface IPlayerData<T1, T2, T3> {
    game: T1;
    hours: T2;
    server: T3;
  }

  const player1: IPlayerData<string, number, string> = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
  };

  const player2: IPlayerData<number, string, string> = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
  };

  const player3: IPlayerData<string, THours<number>, string> = {
    game: "Chess",
    hours: {
      total: 500,
      inMenu: 50,
    },
    server: "chess",
  };
}
