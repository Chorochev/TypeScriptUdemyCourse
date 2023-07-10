{
  const RIGHT = "Right";

  enum Directions {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM,
  }

  // !!! Do not use const enums at all.
  const enum TimingFunc {
    EASE = "ease",
    EASE_IN = "ease-in",
    LINEAR = "linear",
  }

  const enum TimingFuncN {
    EASE = 1,
    EASE_IN = 1,
    LINEAR = EASE * 2,
  }

  function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
    if (dir === Directions.RIGHT) {
      console.log(`elem=> ${elem}, dir=> ${dir}, tFunc=> ${tFunc}`);
    } else {
      console.log("...");
    }
  }
  frame("id", Directions.RIGHT, TimingFunc.EASE_IN);
}
