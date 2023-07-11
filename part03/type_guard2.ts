{
  function isNumber(n: string[] | number | boolean): n is number {
    return typeof n === "number";
  }

  function isNumber2(n: unknown): n is number {
    return typeof n === "number";
  }

  function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
      msg.forEach((m) => console.log(m)); // (parameter) msg: string[]
    } else if (isNumber(msg)) {
      console.log(msg.toFixed()); // (parameter) msg: number
    } else {
      console.log(msg); // (parameter) msg: boolean
    }
  }

  printMsg(4);
  printMsg(true);
  printMsg(["test1", "test2"]);
}

{
  interface ICar {
    engine: string;
    wheels: number;
  }

  interface IShip {
    engine: string;
    sail: string;
  }

  function repairVehicle(vehicle: ICar | IShip) {
    if (isCar(vehicle)) {
      console.log("Car");
      console.log(vehicle.engine);
      console.log(vehicle.wheels);
    } else if (isShip(vehicle)) {
      console.log("Ship");
      console.log(vehicle.engine);
      console.log(vehicle.sail);
    } else {
      vehicle; // (parameter) vehicle: never
    }
  }

  function isCar(car: ICar | IShip): car is ICar {
    return "wheels" in car;
  }

  function isCar2(car: ICar | IShip): car is ICar {
    return (car as ICar).wheels !== undefined;
  }

  function isShip(car: ICar | IShip): car is IShip {
    return (car as IShip).sail !== undefined;
  }

  //   repairVehicle({})
}
