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
}
