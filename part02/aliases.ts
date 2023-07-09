// Type Aliases
type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
type AnimationID = string | number;

function createAnimation3(
  id: AnimationID,
  aniName: string,
  timeFunc: AnimationTimingFunc = "ease",
  duration: number,
  iterCount: "infinite" | number
): void {
  console.log(`${id} ${aniName} ${timeFunc} ${duration} ${iterCount}`);
}

createAnimation3("id123", "elementName", "ease-in", 5, "infinite");

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 101, y: 102 });
printCoord({ y: 103, x: 104 });
