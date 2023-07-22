// Decorators, termins
{
  interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
  }

  // composite functions => f1(f2(f3()))
  // changeDoorStatus(changeAmountOfFuel(myCar))
  // @ts-ignore comment
  @changeDoorStatus(true)
  // @ts-ignore comment
  @changeAmountOfFuel(95)
  class myCar implements ICar {
    fuel: string = "50%";
    open: boolean;
    freeSeats: number;
    isOpen() {
      console.log(`fuel: ${this.fuel}`);
      return this.open ? "open" : "close";
    }
  }

  function changeDoorStatus(status: boolean) {
    console.log("door init");
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
      console.log("door changed");
      return class extends constructor {
        open = status;
      };
    };
  }

  function changeAmountOfFuel(amount: number) {
    console.log("fuel init");
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
      console.log("fuel changed");
      return class extends constructor {
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
