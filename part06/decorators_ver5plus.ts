// decorators 5+ and above
// tsc .\decorators_ver5plus.ts
// node .\decorators_ver5plus.js
{
  interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
  }

  @changeDoorStatus5(false)
  @changeAmountOfFuel5(95)
  class myCar implements ICar {
    fuel: string = "50%";
    open: boolean = true;
    errors: any;
    _weight: number = 1000;

    @logOnSet5
    set weight(num: number) {
      this._weight = this._weight + num;
    }

    @logOnGet5
    get weight() {
      return this._weight;
    }

    @checkNumberOfSeats5(4)
    freeSeats: number = 3;

    @checkAmountOfFuel5
    isOpen(value: string) {
      return this.open ? "open" : `close ${value}`;
    }
  }

  function logOnSet5<T, R>(
    target: (this: T, value: number) => R,
    context: ClassSetterDecoratorContext<T, number>
  ) {
    return function (this: T, ...args: any): R {
      console.log(`Изменяем значение на ${[...args]}`);
      return target.apply(this, args);
    };
  }

  function logOnGet5<T, R>(
    target: (this: T) => R,
    context: ClassGetterDecoratorContext<T, number>
  ) {
    return function (this: T): R {
      console.log(`Test`);
      return target.apply(this);
    };
  }

  function checkNumberOfSeats5(limit: number) {
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

  function checkAmountOfFuel5<T, A extends any[], R>(
    target: (this: T, ...args: A) => R,
    context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
  ) {
    return function (this: T, ...args: A): R {
      // console.log(this.fuel);
      console.log(`${String(context.name)} был запущен`);
      return target.apply(this, args);
    };
  }

  function changeDoorStatus5(status: boolean) {
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

  function changeAmountOfFuel5(amount: number) {
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
  car.weight = 3;
  console.log(car.weight);
}
