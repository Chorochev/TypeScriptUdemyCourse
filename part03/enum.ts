{
  const RIGHT = "Right";

  function frame(elem: string, dir: string, tFunc: string): void {
    if (dir === RIGHT) {
      console.log(`elem=> ${elem}, dir=> ${dir}, tFunc=>${tFunc}`);
    } else {
      console.log("...");
    }
  }
  frame("id", RIGHT, "fast!");
}

{
  enum Directions {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM,
  }

  function frame(elem: string, dir: Directions, tFunc: string): void {
    if (dir === Directions.RIGHT) {
      console.log(`elem=> ${elem}, dir=> ${dir}, tFunc=>${tFunc}`);
    } else {
      console.log("...");
    }
  }
  frame("id", Directions.RIGHT, "fast!");
}
