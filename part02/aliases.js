function createAnimation3(id, aniName, timeFunc, duration, iterCount) {
    if (timeFunc === void 0) { timeFunc = "ease"; }
    console.log("".concat(id, " ").concat(aniName, " ").concat(timeFunc, " ").concat(duration, " ").concat(iterCount));
}
createAnimation3("id123", "elementName", "ease-in", 5, "infinite");
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 101, y: 102 });
printCoord({ y: 103, x: 104 });
