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
