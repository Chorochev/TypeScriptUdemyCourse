// Promise, JSON
{
  const jsonTest = '{"name":"Test1", "data": 4}';
  const objFromJson = JSON.parse(jsonTest); // const objFromJson: any
  console.log(`${jsonTest}\n${objFromJson}`);
  console.log(`name: ${objFromJson.name}, data: ${objFromJson.data}`);
}

{
  const jsonTest = '{"name":"Test2", "data": 5}';
  interface IJSONTest {
    name: string;
    data: number;
  }
  const objFromJson: IJSONTest = JSON.parse(jsonTest); // const objFromJson: IJSONTest
  console.log(`${jsonTest}\n${objFromJson}`);
  console.log(`name: ${objFromJson.name}, data: ${objFromJson.data}`);
}

{
  const promise = new Promise<string>((resolve, reject) => {
    resolve("Test");
  });

  // (parameter) value: string
  promise.then((value) => {
    console.log(value.toLowerCase());
  });
}
