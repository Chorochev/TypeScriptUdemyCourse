// decorators in ts
{
  interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
  }

  // @ts-ignore comment
  @decorCloseCarGeneric
  class myCar implements ICar {
    fuel: string = "50%";
    open: boolean = true;
    freeSeats: number = 0;
    isOpen() {
      console.log(`fuel: ${this.fuel}`);
      return this.open ? "open" : "close";
    }
  }

  // @ts-ignore comment
  function decorCloseCarGeneric<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      open = false;
    };
  }

  const car = new myCar();
  console.log(car.isOpen());
  // fuel: 50%
  // close
}
