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
