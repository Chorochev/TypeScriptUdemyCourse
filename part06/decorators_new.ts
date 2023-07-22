// Decorators, termins
// new style of decorators
// tsc .\decorators_new.ts
// node .\decorators_new.js
{
  interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
  }

  // composite functions => f1(f2(f3()))
  // changeDoorStatusNew(changeAmountOfFuelNew(myCar))
  @changeDoorStatusNew(true)
  @changeAmountOfFuelNew(95)
  class myCar implements ICar {
    fuel: string = "50%";
    open: boolean;
    freeSeats: number;
    isOpen() {
      console.log(`fuel: ${this.fuel}`);
      return this.open ? "open" : "close";
    }
  }

  function changeDoorStatusNew(status: boolean) {
    console.log("door init");
    return <T extends { new (...args: any[]): {} }>(
      target: T,
      context: ClassDecoratorContext<T>
    ) => {
      console.log("door changed");
      return class extends target {
        open = status;
      };
    };
  }

  function changeAmountOfFuelNew(amount: number) {
    console.log("fuel init");
    return <T extends { new (...args: any[]): {} }>(
      target: T,
      context: ClassDecoratorContext<T>
    ) => {
      console.log("fuel changed");
      return class extends target {
        fuel = `${amount}%`;
      };
    };
  }

  const car = new myCar();
  console.log(car.isOpen());
  //   door init
  //   fuel init
  //   fuel changed
  //   door changed
  //   fuel: 95%
  //   open
}
