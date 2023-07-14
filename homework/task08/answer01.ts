{
  interface IPhone {
    company: string;
    number: number;
  }

  interface IMobilePhone extends IPhone {
    size: string;
    companyPartner: IPhone["company"];
    manufactured: Date;
  }

  const phones: IMobilePhone[] = [
    {
      company: "Nokia",
      number: 1285637,
      size: "5.5",
      companyPartner: "MobileNokia",
      manufactured: new Date("2022-09-01"),
    },
    {
      company: "Samsung",
      number: 4356637,
      size: "5.0",
      companyPartner: "SamMobile",
      manufactured: new Date("2021-11-05"),
    },
    {
      company: "Apple",
      number: 4552833,
      size: "5.7",
      companyPartner: "no data",
      manufactured: new Date("2022-05-24T12:00:00"),
    },
  ];

  interface IPhonesManufacturedAfterDate extends IMobilePhone {
    initialDate: string;
  }

  function filterPhonesByDate<T, K extends keyof T>(
    phones: T[],
    key: K,
    initial: string
  ): IPhonesManufacturedAfterDate[] {
    const result: IPhonesManufacturedAfterDate[] = [];
    // type TPhoneKeys = keyof IMobilePhone<T>;
    // const keyType: TPhoneKeys = keyof typeof key;
    // phones.forEach((element) => {
    //   console.log(element[key]);
    // });

    phones.forEach((e) => {
      if (e[key] == "2022-09-01T00:00:00.000Z") {
        console.log("Ok");
      }
      //   const dt = e[key];
      //   type tdt = typeof dt;
      console.log(`${e}  ${e[key]}  ${typeof key}`);
    });

    // const result = phones.filter((e) => e[key] == "2022-09-01T00:00:00.000Z");

    return result;
  }

  console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));
}
