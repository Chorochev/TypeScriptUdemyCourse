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

  calcylateArea(3); // function calcylateArea(a: number, b?: number): ISquare | IRect
  calcylateArea(4, 5); // function calcylateArea(a: number, b?: number): ISquare | IRect
}

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

  function calcylateArea(side: number): ISquare;
  // function calcylateArea(side: string): ISquare; // Error
  function calcylateArea(a: number, b: number): IRect;
  function calcylateArea(a: number, b?: number): ISquare | IRect {
    if (b) {
      const rect: IRect = { a, b, area: a * b };
      return rect;
    } else {
      const square: ISquare = { side: a, area: a * a };
      return square;
    }
  }

  calcylateArea(3); // function calcylateArea(side: number): ISquare (+1 overload)
  calcylateArea(4, 5); // function calcylateArea(a: number, b: number): IRect (+1 overload)
}
