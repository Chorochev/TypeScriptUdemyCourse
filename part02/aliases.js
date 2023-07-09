function createAnimation3(id, aniName, timeFunc, duration, iterCount) {
    if (timeFunc === void 0) { timeFunc = "ease"; }
    console.log("".concat(id, " ").concat(aniName, " ").concat(timeFunc, " ").concat(duration, " ").concat(iterCount));
}
createAnimation3("id123", "elementName", "ease-in", 5, "infinite");
