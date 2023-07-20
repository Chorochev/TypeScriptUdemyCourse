"use strict";
// abstract
{
    class Vehicle {
        constructor() {
            this.model = "car";
            this.capacity = 200;
            this.startEngine = (time) => {
                return "Started";
            };
        }
    }
}
{
    class AbstractVehicle {
        constructor() {
            this.model = "car";
            this.capacity = 100;
        }
        stopEngine(time) {
            this.printMessage();
            return "Engine Stopped";
        }
    }
    //   const absCar = new AbstractVehicle(); // Cannot create an instance of an abstract class.ts(2511)
    class Vehicle extends AbstractVehicle {
        constructor() {
            super(...arguments);
            this.printMessage = () => {
                console.log("This is class Vehicle");
            };
            this.startEngine = (time) => {
                return "Started";
            };
        }
    }
    const car1 = new Vehicle();
    console.log(`${car1.model}, ${car1.capacity}`); //   car, 100
    console.log(`${car1.startEngine(new Date())}`); //   Started
    console.log(`${car1.stopEngine(new Date())}`);
    //   This is class Vehicle
    //   Engine Stopped
}
