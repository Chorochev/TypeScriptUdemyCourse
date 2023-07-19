"use strict";
var _Player_login;
// private
// tsconfig.json: "target": "ES2021" => _Player_login.set(this, "");
// tsconfig.json: "target": "ES2022" => #login = "";
// tsc
{
    class Player {
        constructor() {
            _Player_login.set(this, "");
            this.password = "";
            this.server = "";
        }
    }
    _Player_login = new WeakMap();
    const player = new Player();
    //player.#login; // Error: Property '#login' is not accessible outside class 'Player' because it has a private identifier.ts(18013)
}
