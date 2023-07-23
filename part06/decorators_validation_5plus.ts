// Decorators, validations 5+
// f(x(y()));
// Parameter Decorators
// Everything works here (ts 5+)
// ts-node .\decorators_validation_5plus.ts
{
  interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
  }

  @changeDoorStatus5plus(false)
  @changeAmountOfFuel5plus(95)
  class myCar implements ICar {
    fuel: string = "50%";
    open: boolean = true;
    errors: any;

    @checkNumberOfSeats5plus(4)
    freeSeats: number = 3; // will be error if number > 4

    @checkAmountOfFuel5plus
    isOpen(value: string) {
      return this.open ? "open" : `close ${value}`;
    }
  }

  function checkNumberOfSeats5plus(limit: number) {
    return function (target: undefined, context: ClassFieldDecoratorContext) {
      return function (this: any, newAmount: number) {
        if (newAmount >= 1 && newAmount < limit) {
          return newAmount;
        } else {
          throw Error(`Больше ${limit} сидений быть не может, меньше 1 тоже`);
        }
      };
    };
  }

  function checkAmountOfFuel5plus<T, A extends any[], R>(
    target: (this: T, ...args: A) => R,
    context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
  ) {
    return function (this: T, ...args: A): R {
      // console.log(this.fuel);
      console.log(`${String(context.name)} был запущен`);
      return target.apply(this, args);
    };
  }

  function changeDoorStatus5plus(status: boolean) {
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

  function changeAmountOfFuel5plus(amount: number) {
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
  car.freeSeats = -1;
  console.log(car);
  console.log(car.errors);
  // door init
  // fuel init
  // fuel changed
  // door changed
  // myCar { fuel: '95%', open: false, freeSeats: -1 }
  // undefined
}
