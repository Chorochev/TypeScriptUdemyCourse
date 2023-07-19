// extends
{
  class Box {
    width: number;
    height: number;

    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }

    message(msg: string): void {
      console.log(`class box: msg=${msg}`);
    }

    message2(msg: string): void {
      console.log(`class box message: msg=${msg}`);
    }

    message3(msg: string): void {
      console.log(`class box message: msg=${msg}`);
    }
  }

  class PresentBox extends Box {
    wrap: string;

    constructor(wrap: string, width: number) {
      super(width, width);
      this.wrap = wrap;
    }

    message(msg1: string, msg2?: string): void {
      console.log(`class PresentBox: msg1=${msg1}, msg2=${msg2}`);
    }

    override message2(msg1: string): void {
      console.log(`class PresentBox override message2: msg1=${msg1}`);
    }

    override message3(msg: string): void {
      super.message3(msg);
      console.log(`class PresentBox override message3: msg=${msg}`);
    }
  }

  const cl1 = new PresentBox("test wrap", 20);
  console.log(cl1); // PresentBox { width: 20, height: 20, wrap: 'test wrap' }
  cl1.message("test 1"); // class PresentBox: msg1=test 1, msg2=undefined
  cl1.message("test 1", "test 2"); // class PresentBox: msg1=test 1, msg2=test 2
  cl1.message2("test 2"); // class PresentBox override message2: msg1=test 2
  cl1.message3("test 33");
  // class box message: msg=test 33
  // class PresentBox override message3: msg=test 33
}

{
  class Animal {
    move() {
      console.log("Moving along!");
    }
  }

  class Dog extends Animal {
    woof(times: number) {
      for (let i = 0; i < times; i++) {
        console.log("woof!");
      }
    }
  }

  const d = new Dog();
  // Base class method
  d.move(); // Moving along!
  // Derived class method
  d.woof(3); // woof! woof! woof!
}
