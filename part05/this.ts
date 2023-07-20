// this (context)
{
  class Player {
    #login: string;

    constructor(login: string) {
      this.#login = login;
    }

    logIn1() {
      return `Player ${this.#login} online`;
    }

    // context
    logIn2(this: Player) {
      return `Player ${this.#login} online`;
    }

    logIn3 = () => {
      return `Player ${this.#login} online`;
    };
  }

  const player1 = new Player("Alex");
  console.log(player1.logIn1());

  const test1 = player1.logIn1; // const test: () => string
  // test1(); // TypeError: Cannot read private member from an object

  const test2 = player1.logIn1.bind(player1);
  test2(); // Ok

  const test3 = player1.logIn2;
  // test3(); // The 'this' context of type 'void' is not assignable to method's 'this' of type 'Player'.ts(2684)

  const test4 = player1.logIn2.bind(player1);
  test4(); // Ok

  const test5 = player1.logIn3;
  test5(); // Ok

  class CompetitivePlayer extends Player {
    rank: number;

    constructor(login: string, rank: number) {
      super(login);
      this.rank = rank;
    }

    checkLogin1() {
      return super.logIn3(); // will be an error
    }

    checkLogin2() {
      return this.logIn3(); // Ok
    }
  }

  const player2 = new CompetitivePlayer("Ivan", 5);
  // console.log(player2.checkLogin1()); // TypeError: (intermediate value).logIn3 is not a function
  console.log(player2.checkLogin2()); // Ok
}

{
  // chain
  class Player {
    #login: string;

    constructor(login: string) {
      this.#login = login;
    }

    logIn() {
      return `Player ${this.#login} online`;
    }

    connect1() {
      // Do smth
      return this;
    }

    // Bad sample
    connect2(): Player {
      // Do smth
      return this;
    }

    isPro(): this is CompetitivePlayer {
      return this instanceof CompetitivePlayer;
    }
  }

  const player1 = new Player("Alex2");
  console.log(player1.connect1().logIn()); // (method) Player.connect1(): Player
  console.log(player1.connect2().logIn()); // (method) Player.connect2(): Player
  console.log(player1.logIn());

  class CompetitivePlayer extends Player {
    rank: number;

    constructor(login: string, rank: number) {
      super(login);
      this.rank = rank;
    }

    checkLogin2() {
      return this.logIn(); // Ok
    }
  }

  const player2 = new CompetitivePlayer("Ivan2", 5);
  console.log(player2.connect1().logIn()); // (method) Player.connect1(): CompetitivePlayer
  console.log(player2.connect2().logIn()); // (method) Player.connect2(): Player
  console.log(player2.logIn());

  const somePlayer1: Player | CompetitivePlayer = new CompetitivePlayer(
    "player01",
    5
  );
  const somePlayer2: Player | CompetitivePlayer = new Player("player02");
  console.log(somePlayer1.isPro());
  console.log(somePlayer2.isPro());
  somePlayer1.isPro() ? somePlayer1 : somePlayer1;
}

{
  class MyClass {
    name = "MyClass";
    getName(this: MyClass) {
      return this.name;
    }
  }
  const c = new MyClass();
  // OK
  console.log(c.getName()); // MyClass

  // Error, would crash
  const g = c.getName;
  // console.log(g()); // Error
}
