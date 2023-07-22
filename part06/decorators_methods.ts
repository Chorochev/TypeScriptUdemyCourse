// Decorators, methods, this
{
  interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
  }

  // @ts-ignore comment
  @changeDoorStatus5(false)
  // @ts-ignore comment
  @changeAmountOfFuel5(95)
  class myCar implements ICar {
    fuel: string = "50%";
    open: boolean = true;
    freeSeats: number;

    // @ts-ignore comment
    @checkAmountOfFuel5
    isOpen(value: string) {
      return this.open ? "open" : `close ${value}`;
    }
  }

  function checkAmountOfFuel5(
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

  function changeDoorStatus5(status: boolean) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
      return class extends constructor {
        open = status;
      };
    };
  }

  function changeAmountOfFuel5(amount: number) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
      return class extends constructor {
        fuel = `${amount}%`;
      };
    };
  }

  const car = new myCar();
  console.log(car.isOpen("checked"));

  // f(x(y()));
}
