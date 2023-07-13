//  Indexed Access Types
{
  interface ICompany {
    name: string;
    debts: number;
  }
  //type CompanyDeptsType = typeof ICompany.debts; // 'ICompany' only refers to a type, but is being used as a value here.ts(2693)
  // Indexed Access Types:
  type CompanyDeptsType = ICompany["debts"]; // type CompanyDeptsType = number
}

{
  interface ICompany {
    name: string;
    debts: number;
    departments: IDepartment;
    management: {
      owner: string;
    };
  }

  interface IDepartment {
    [key: string]: string;
  }

  const google: ICompany = {
    name: "Google",
    debts: 50000,
    departments: {
      sales: "sales",
      developer: "dev",
    },
    management: {
      owner: "John",
    },
  };

  type CompanyDeptsType = ICompany["debts"]; // type CompanyDeptsType1 = number
  type CompanyOwnerType = ICompany["management"]["owner"]; // type CompanyOwnerType = string
  type CompanyDepartmentsType = ICompany["departments"]; // type CompanyDepartmentsType = IDepartment
  type GetAllTypes = ICompany[keyof ICompany]; // type Test = string | number | IDepartment | {  owner: string; }

  ///
}

{
  interface IDepartment {
    [key: string]: string;
  }

  interface ICompany {
    name: string;
    debts: number;
    departments: IDepartment[];
    management: {
      owner: string;
    };
  }
  type CompanyDepartmentsType1 = ICompany["departments"]; // type CompanyDepartmentsType1 = IDepartment[]
  type CompanyDepartmentsType2 = ICompany["departments"][number]; // type CompanyDepartmentsType = IDepartment

  const debts1 = "debts";
  // type CompanyDebtsType = ICompany[debts1]; // Type 'debts1' cannot be used as an index type.ts(2538)
  type CompanyDebtsType1 = ICompany[typeof debts1]; // type CompanyDebtsType = number

  let debts2 = "debts";
  // type CompanyDebtsType2 = ICompany[typeof debts2]; // Type 'ICompany' has no matching index signature for type 'string'.ts(2537)

  let debts3 = "debts" as "debts";
  type CompanyDebtsType3 = ICompany[typeof debts3]; // type CompanyDebtsType3 = number

  let debts4: "debts" = "debts";
  type CompanyDebtsType4 = ICompany[typeof debts4]; // type CompanyDebtsType4 = number
}
