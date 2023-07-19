// methods (ts) getter, setter
{
  class Box {
    width: number;
    height: number;
    volume: number | undefined;
    content: string | undefined;

    constructor(width: number, volume?: number, content?: string) {
      this.width = width;
      this.height = 500;
      this.volume = volume;
      this.content = content;
    }

    calculateVolume(): void {
      if (!this.volume) {
        this.volume = this.width * this.height;
        console.log(`volume = ${this.volume}`);
      } else {
        console.log(`volume = ${this.volume}`);
      }
    }

    checkBoxSize(transport: number): string;
    checkBoxSize(transport: number[]): string;
    checkBoxSize(transport: number | number[]): string {
      if (typeof transport === "number") {
        return transport >= this.width ? "Ok" : "Not ok";
      } else {
        return transport.some((t) => t >= this.width) ? "Ok" : "Not ok";
      }
    }

    // get boxContent() {} // A 'get' accessor must return a value.ts(2378)
    get boxContent() {
      return this.content;
    }

    // async set boxContent(value) // error
    set boxContent(value) {
      //this.content = value;
      this.content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
    }

    async async_content(value: string) {
      const date = await new Date().toTimeString();
      this.content = `async Date: ${date}, Content: ${value}`;
      console.log(this.content);
    }
  }

  const firstBox1 = new Box(250);
  console.log(firstBox1.calculateVolume()); // volume = 125000
  console.log(firstBox1.checkBoxSize(240)); // Not ok
  console.log(firstBox1.checkBoxSize(270)); // Ok
  console.log(firstBox1.checkBoxSize([250, 270])); // Ok
  console.log(firstBox1.checkBoxSize([250, 270, 100])); // Ok
  firstBox1.volume = 50000;
  console.log(firstBox1.calculateVolume()); // volume = 50000
  console.log((firstBox1.boxContent = "Test")); // Test
  console.log(firstBox1.boxContent); // Test
  firstBox1.async_content("test2");
}
