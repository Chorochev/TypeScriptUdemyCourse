// constructor (ts)
{
  class Box {
    width: number;
    height: number;

    // constructor Box(width: number, height: number): Box
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;

      // return "test"; // Error
      // return new Box(4, 7); // RangeError: Maximum call stack size exceeded
      // return this; // ok
    }
  }

  const firstBox = new Box(100, 200);
  console.log(firstBox);
}

{
  class Box {
    width: number;
    height: number;
    volume: string;

    constructor(volume: string);
    constructor(width: number);
    constructor(widthOrVolume: number | string) {
      if (typeof widthOrVolume === "number") {
        this.width = widthOrVolume;
        this.volume = "";
      } else {
        this.volume = widthOrVolume;
        this.width = 0;
      }
      this.height = 500;
    }
  }

  const firstBox1 = new Box(250);
  console.log(firstBox1);
  const firstBox2 = new Box("test");
  console.log(firstBox2);
}

{
  class Box<T> {
    width: T;
    height: number;

    constructor(width: T) {
      this.width = width;
      this.height = 500;
    }
  }

  const firstBox1 = new Box(100);
  console.log(firstBox1);
  const firstBox2 = new Box("100");
  console.log(firstBox2);
  const firstBox3 = new Box(true);
  console.log(firstBox3);
}
