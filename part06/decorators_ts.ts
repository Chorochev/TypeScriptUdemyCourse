// decorators in ts
// tsconfig.json => "strict": false /* Enable all strict type-checking options. */,
{
  interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
  }

  // @ts-ignore comment
  @decorCloseCar
  class myCar implements ICar {
    fuel: string = "50%";
    open: boolean;
    freeSeats: number;
    isOpen() {
      console.log(`fuel: ${this.fuel}`);
      return this.open ? "open" : "close";
    }
  }

  // decorator of class
  function decorCloseCar(constructor: Function) {
    constructor.prototype.open = false;
  }

  const car = new myCar();
  console.log(car.isOpen());
}
