// static
{
  class Player {
    static game: string = "COD";
    private static privat_game: string = "private COD";

    login: string = "";

    static getPrivateGame() {
      return Player.privat_game;
    }
  }

  Player.game; // Ok
  // Player.privat_game; // Error: Property 'privat_game' is private and only accessible within class 'Player'.ts(2341)
  // Player.login; // Error: // Property 'login' does not exist on type 'typeof Player'.ts(2339)
  // new Player().game; // Error
  // new Player().privat_game; // Error
  new Player().login; // Ok

  const game = Player.game;
  // const pgame = Player.privat_game; // Error: Property 'privat_game' is private and only accessible within class 'Player'.ts(2341)
  const pgame = Player.getPrivateGame(); // Ok

  console.log(`game="${game}"; pgame="${pgame}"`);

  // Example a static class
  console.log(`pi=${Math.PI}`);
}

{
  // static class Player {} // Error: Static classes does not exist in typescript
  // const myMath = new Math(); // Error

  class Player {
    private constructor() {}
  }
  //const player = new Player(); // Constructor of class 'Player' is private and only accessible within the class declaration.ts(2673)

  // class NewPlayer extends Player {} // Cannot extend a class 'Player'. Class constructor is marked as private.ts(2675)
}

{
  class Player {
    protected constructor() {}
  }
  //const player = new Player(); // Error
  class NewPlayer extends Player {} // Ok
}

{
  class Player {
    static game: string = "COD";

    constructor(game: string) {
      // this.game = game; // Error
      Player.game = game;
    }
  }

  const game1 = Player.game;
  const player = new Player("test");
  const game2 = Player.game;
  console.log(`game1="${game1}"; game2="${game2}"`); // game1="COD"; game2="test"
}

{
  // static block

  function setName() {
    return "COD";
  }

  class Player {
    static game: string;
    static {
      // this block runs only one time.
      Player.game = setName();
    }
  }

  const game1 = Player.game;
  const player = new Player();
  const game2 = Player.game;
  console.log(`game1="${game1}"; game2="${game2}"`); // game1="COD"; game2="COD"
}

{
  class Player {
    static game: string;
    static {
      // this block runs only one time.
      console.log("Run static block.");
      Player.game = "COD";
    }
    constructor() {
      console.log("Run constructor.");
    }
  }
  const player1 = new Player();
  const player2 = new Player();
  const player3 = new Player();
  console.log(`Player.game="${Player.game}"`);
  // Run static block.
  // Run constructor.
  // Run constructor.
  // Run constructor.
  // Player.game="COD"
}
