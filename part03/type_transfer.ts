{
  const num1 = 5; // const num1: 5
  const num2 = new Number(5); // const num2: Number
  console.log(num1 == num2); // true
  console.log(num1 === num2); // false

  let num3 = 5; // let num3: number
  let num4 = new Number(5); // let num4: Number
  console.log(num3 == num4); // true
  console.log(num3 === num4); // false

  let num5: Number = new Number(5); // let num5: Number
  let num6: number = 5; // let num6: number
  let num7 = Number(5); // let num7: number
  num5 = num6; // Ok
  // num6 = num5; // Type 'Number' is not assignable to type 'number'.  'number' is a primitive, but 'Number' is a wrapper object. Prefer using 'number' when possible.ts(2322)

  const num = 5;
  const strNum: string = num.toString();
  const str = "5";
  const numStr: number = +str;

  const department = {
    name: "web-dev",
    budget: 50000,
  };

  interface IProject {
    name: string;
    projectBudget: number;
  }

  const mainProject1: IProject = {
    ...department,
    projectBudget: 50000,
  };
  console.log("mainProject1");
  console.log(mainProject1); // { name: 'web-dev', budget: 50000, projectBudget: 50000 }
  console.log(mainProject1.name);
  // console.log(mainProject1.budget); // Property 'budget' does not exist on type 'Project'.ts(2339)
  console.log(mainProject1.projectBudget);

  const mainProject2 = {
    ...department,
    projectBudget: 50000,
  };
  console.log("mainProject2");
  console.log(mainProject2); // { name: 'web-dev', budget: 50000, projectBudget: 50000 }
  console.log(mainProject2.name);
  console.log(mainProject2.budget); // Ok
  console.log(mainProject2.projectBudget);
}

{
  interface IDepartment {
    name: string;
    budget: number;
  }

  const department: IDepartment = {
    name: "web-dev",
    budget: 50000,
  };

  interface IProject {
    name: string;
    projectBudget: number;
  }

  function transformDepartment(
    department: IDepartment,
    amount: number
  ): IProject {
    return {
      name: department.name,
      projectBudget: amount,
    };
  }

  const mainProject: IProject = transformDepartment(department, 400);
  console.log("mainProject");
  console.log(mainProject); // { name: 'web-dev', projectBudget: 400 }
}
