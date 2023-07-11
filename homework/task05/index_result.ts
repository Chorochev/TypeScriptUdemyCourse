{
  // Request
  interface IRequest {
    animal: "cat" | "dog" | "bird";
    breed: string;
    sterilized?: string;
  }

  // Response #1
  interface IDataAvailable extends IRequest {
    location: string;
    age?: number;
  }

  // Response #2
  interface IDataNotAvailable {
    message: string;
    nextUpdateIn: Date;
  }

  interface IResponse {
    status: "available" | "not available";
    data: IDataAvailable | IDataNotAvailable;
  }

  function isDataAvailable(
    data: IDataAvailable | IDataNotAvailable
  ): data is IDataAvailable {
    return (data as IDataAvailable).location !== undefined;
  }

  function checkAnimalData(animal: IResponse): IDataAvailable | string {
    if (isDataAvailable(animal.data)) {
      return animal.data;
    } else {
      return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
    }
  }

  const response1: IResponse = {
    status: "available",
    data: {
      animal: "cat",
      breed: "breed",
      sterilized: "not",
      location: "some place",
      age: 10,
    },
  };

  const answer1 = checkAnimalData(response1); // const answer1: string | IDataAvailable
  console.log("*** answer1 ***");
  console.log(answer1);

  const response2: IResponse = {
    status: "available",
    data: {
      message: "Hello world!",
      nextUpdateIn: new Date(),
    },
  };

  const answer2 = checkAnimalData(response2); // const answer2: string | IDataAvailable
  console.log("*** answer2 ***");
  console.log(answer2);
}
