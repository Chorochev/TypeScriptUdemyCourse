{
  interface ISquare {
    side: number;
    area: number;
  }

  interface IRect {
    a: number;
    b: number;
    area: number;
  }

  function calcylateArea(a: number, b?: number): ISquare | IRect {
    if (b) {
      const rect: IRect = { a, b, area: a * b };
      return rect;
    } else {
      const square: ISquare = { side: a, area: a * a };
      return square;
    }
  }
}
