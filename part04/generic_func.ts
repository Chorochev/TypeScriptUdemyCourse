// Generic function

{
  function genericFunc<T, S>(data: T, option: S): T {
    return data;
  }

  const val1 = genericFunc(100, "test"); // const val1: 100
  const val2 = genericFunc("100", true); // const val2: "100"
  const val3 = genericFunc<string, boolean>("100", true);
}

{
  function genericFunc<T, S>(data: T, option: S, dataArr: T[]): string {
    // data.length; // Error
    dataArr.length; // Ok
    switch (typeof data) {
      case "string":
        return `${data}, speed: ${option}`;
        break;
      case "number":
        return `${data.toFixed()}, speed: ${option}`;
        break;
      default:
        return "Not valid";
    }
  }

  const val1 = genericFunc<number, string>(100, "test", [1, 2, 3, 4]);
}

{
  interface IDataSarver {
    processing: <T>(data: T) => T;
  }

  const saver1: IDataSarver = {
    processing(data) {
      console.log(data);
      return data;
    },
  };
  // or
  const saver2: IDataSarver = {
    processing: <T>(data: T) => {
      return data;
    },
  };
  // or
  const saver3: IDataSarver = {
    processing: (data) => {
      return data;
    },
  };

  function processing<T>(data: T): T {
    return data;
  }

  // or
  const saver4: IDataSarver = {
    processing: processing,
  };
}

{
  function processing<T>(data: T): T {
    return data;
  }

  let newFunc1: <T>(data: T) => T = processing;

  interface IDataSaver {
    num: number;
    // processing: processing; // Error
    processing: typeof processing; // Ok
  }
  // ------------------------------
  interface IProcessingFn {
    <T>(data: T): T;
  }
  let newFunc2: IProcessingFn = processing;

  interface IDataSaver2 {
    processing: IProcessingFn; // Ok
  }
}
