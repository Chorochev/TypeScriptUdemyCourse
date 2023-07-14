{
  interface IPhone<TCompany> {
    company: TCompany;
    number: number;
  }

  interface IMobilePhone<TCompany> extends IPhone<TCompany> {
    size: string;
    companyPartner: TCompany;
    manufactured: Date;
  }

  const phones: IMobilePhone<string>[] = [
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

  interface IPhonesManufacturedAfterDate<TCompany>
    extends IMobilePhone<TCompany> {
    initialDate: string;
  }

  function filterPhonesByDate<T, K extends keyof T>(
    phones: T[],
    key: K,
    initial: string
  ): IPhonesManufacturedAfterDate<T>[] {
    const result: IPhonesManufacturedAfterDate<T>[] = [];
    // type TPhoneKeys = keyof IMobilePhone<T>;
    // const keyType: TPhoneKeys = keyof typeof key;
    // phones.forEach((element) => {
    //   console.log(element[key]);
    // });

    phones.forEach((e) => {
      // if(e[key] == "2022-09-01T00:00:00.000Z"){
      //     result.push({
      //         company: e.company,
      //         number: 4552833,
      //         size: "5.7",
      //         companyPartner: "no data",
      //         manufactured: new Date("2022-05-24T12:00:00"),
      //         initialDate: "string"
      //     })
      // }
      const dt = e[key];
      type tdt = typeof dt;
      console.log(`${e}  ${e[key]}  ${typeof key} ${dt}`);
    });

    // const result = phones.filter((e) => e[key] == "2022-09-01T00:00:00.000Z");

    return result;
  }

  console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));
}
