// abstract
{
  interface IEngine {
    model: string;
    capacity: number;
    startEngine: (time: Date) => string;
  }
  class Vehicle implements IEngine {
    model: string = "car";
    capacity: number = 200;
    startEngine = (time: Date) => {
      return "Started";
    };
  }
}

{
  abstract class AbstractVehicle {
    model: string = "car";
    capacity: number = 100;
    abstract startEngine: (time: Date) => string;
    abstract printMessage: () => void;
    stopEngine(time: Date): string {
      this.printMessage();
      return "Engine Stopped";
    }
  }

  //   const absCar = new AbstractVehicle(); // Cannot create an instance of an abstract class.ts(2511)

  class Vehicle extends AbstractVehicle {
    printMessage = () => {
      console.log("This is class Vehicle");
    };

    startEngine = (time: Date) => {
      return "Started";
    };
  }

  const car1 = new Vehicle();
  console.log(`${car1.model}, ${car1.capacity}`); //   car, 100
  console.log(`${car1.startEngine(new Date())}`); //   Started
  console.log(`${car1.stopEngine(new Date())}`);
  //   This is class Vehicle
  //   Engine Stopped
}
