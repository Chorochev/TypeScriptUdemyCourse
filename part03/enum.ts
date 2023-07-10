{
  const RIGHT = "Right";

  function frame(elem: string, dir: string, tFunc: string): void {
    if (dir === RIGHT) {
      console.log(`elem=> ${elem}, dir=> ${dir}, tFunc=> ${tFunc}`);
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

  enum TimingFunc {
    EASE = 1,
    EASE_IN = 10,
    LINEAR = 30,
  }

  function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
    if (dir === Directions.RIGHT) {
      console.log(`elem=> ${elem}, dir=> ${dir}, tFunc=> ${tFunc}`);
    } else {
      console.log("...");
    }
  }
  frame("id", Directions.RIGHT, TimingFunc.LINEAR);
}

{
  enum Directions {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM,
  }

  enum TimingFunc {
    EASE = "ease",
    EASE_IN = "ease_in",
    LINEAR = "linear",
  }

  function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
    if (dir === Directions.RIGHT) {
      console.log(`elem=> ${elem}, dir=> ${dir}, tFunc=> ${tFunc}`);
    } else {
      console.log("...");
    }
  }
  frame("id", Directions.RIGHT, TimingFunc.LINEAR);
}
