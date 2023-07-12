{
  // Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

  type THours<T> = {
    total: T;
    inMenu: T;
  };

  interface IPlayerData<T1, T2> {
    game: T1;
    hours: T2;
    server: string;
  }

  const player1: IPlayerData<string, number> = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
  };

  const player2: IPlayerData<number, string> = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
  };

  const player3: IPlayerData<string, THours<number>> = {
    game: "Chess",
    hours: {
      total: 500,
      inMenu: 50,
    },
    server: "chess",
  };
}
