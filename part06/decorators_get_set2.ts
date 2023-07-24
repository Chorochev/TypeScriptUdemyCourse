// Decorators, getters, setters
// ts-node .\decorators_get_set2.ts
{
  class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }

    // @ts-ignore comment
    @configurableGS(false)
    get x() {
      return this._x;
    }

    // @ts-ignore comment
    @configurableGS(false)
    get y() {
      return this._y;
    }
  }

  function configurableGS(value: boolean) {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      console.log(`invoking configurableGS(${value})`);
      descriptor.configurable = value;
    };
  }

  const p = new Point(100, 200);
  console.log(p);
  console.log(p.x);
  console.log(p.y);
  //   invoking configurableGS(false)
  //   invoking configurableGS(false)
  //   Point { _x: 100, _y: 200 }
  //   100
  //   200
}
