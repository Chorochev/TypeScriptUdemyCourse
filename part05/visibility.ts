// visibility: public, protected, private
{
  class Player {
    public login: string;
    public password: string;
    public server: string;
  }

  const player = new Player();
  player.login = "dfgdkhjdkh";
}

{
  class User {
    public email: string;
    public name: string;

    constructor(email: string, name: string) {
      this.email = email;
      this.name = name;
    }
  }
}
// or
{
  class User {
    constructor(public email: string, public name: string) {}
  }
}

{
  class Player {
    private login: string;
    private _password: string;
    public server: string;
    protected consent: boolean;

    get password() {
      return this._password;
    }

    set password(newPass: string) {
      // Validation
      this._password = newPass;
    }
  }

  const player = new Player();
  // player.login = "dfgdkhjdkh"; // Error: Property 'login' is private and only accessible within class 'Player'.ts(2341)
  player.password = "123";
  //   player._password = "123"; // Error

  class CompetitivePlayer extends Player {
    rank: number;

    isConsented() {
      console.log(this.consent);
      return this.consent ? "Yes" : "No";
    }
  }

  const cl2 = new CompetitivePlayer();
  // cl2.consent // Error: Property 'consent' is protected and only accessible within class 'Player' and its subclasses.ts(2445)
  cl2.isConsented();
}
