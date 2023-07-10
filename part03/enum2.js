{
    var RIGHT = "Right";
    var Directions = void 0;
    (function (Directions) {
        Directions[Directions["TOP"] = 0] = "TOP";
        Directions[Directions["RIGHT"] = 1] = "RIGHT";
        Directions[Directions["LEFT"] = 2] = "LEFT";
        Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
    })(Directions || (Directions = {}));
    function frame(elem, dir, tFunc) {
        if (dir === Directions.RIGHT) {
            console.log("elem=> ".concat(elem, ", dir=> ").concat(dir, ", tFunc=> ").concat(tFunc));
        }
        else {
            console.log("...");
        }
    }
    frame("id", Directions.RIGHT, "ease-in" /* TimingFunc.EASE_IN */);
}
