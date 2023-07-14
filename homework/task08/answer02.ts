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

  function filterPhonesByDate<T>(
    phones: T[],
    key: keyof T,
    initial: string
  ): Partial<IPhonesManufacturedAfterDate>[] {
    const localInitialDate = new Date(initial);
    return phones
      .filter((element) => {
        const currentKey = element[key];
        if (currentKey instanceof Date && currentKey > localInitialDate) {
          return element;
        }
      })
      .map((element) => {
        return {
          ...element,
          initialDate: initial,
        };
      });
  }

  console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));
}
