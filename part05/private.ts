// private
// tsconfig.json: "target": "ES2021" => _Player_login.set(this, "");
// tsconfig.json: "target": "ES2022" => #login = "";
// tsc
{
  class Player {
    #login: string = "";
    private password: string = "";
    public server: string = "";
  }

  const player = new Player();
  //player.#login; // Error: Property '#login' is not accessible outside class 'Player' because it has a private identifier.ts(18013)
}
