// Decorators, validations
// Parameter Decorators
{
  interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
  }
  // @ts-ignore comment
  @changeDoorStatus(false)
  // @ts-ignore comment
  @changeAmountOfFuel(95)
  class myCar implements ICar {
    fuel: string = "50%";
    open: boolean = true;
    errors: any;

    // @ts-ignore comment
    @checkNumberOfSeats(4)
    freeSeats: number = 2;

    // @ts-ignore comment
    @checkAmountOfFuel
    isOpen(value: string) {
      return this.open ? "open" : `close ${value}`;
    }
  }

  function checkNumberOfSeats(limit: number) {
    return function (target: Object, propertyKey: string | symbol) {
      let symbol = Symbol();

      const getter = function (this: any) {
        return this[symbol];
      };

      const setter = function (this: any, newAmount: number) {
        if (newAmount >= 1 && newAmount < limit) {
          this[symbol] = newAmount + 1;
        } else {
          console.log(`Больше ${limit} сидений быть не может`);
          Object.defineProperty(target, "errors", {
            value: `Больше ${limit} сидений быть не может`,
          });
        }
      };

      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
      });
    };
  }

  function checkAmountOfFuel(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void {
    const oldValue = descriptor.value;
    descriptor.value = function (this: any, ...args: any[]) {
      console.log(this.fuel);
      return oldValue.apply(this, args);
    };
  }

  function changeDoorStatus(status: boolean) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
      return class extends constructor {
        open = status;
      };
    };
  }

  function changeAmountOfFuel(amount: number) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
      return class extends constructor {
        fuel = `${amount}%`;
      };
    };
  }

  const car = new myCar();
  car.freeSeats = 3;
  console.log(car);
  console.log(car.errors);

  // f(x(y()));
}
