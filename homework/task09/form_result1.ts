{
  interface IForm {
    login: string;
    password: string;
  }

  interface IValidationData {
    isValid: boolean;
    errorMsg?: string;
  }

  type TValidationData = Record<keyof IForm, IValidationData>;

  const validationData: TValidationData = {
    login: { isValid: false, errorMsg: "At least 3 characters" },
    password: { isValid: true },
  };

  console.log(validationData);
}

{
  interface IForm {
    login: string;
    password: string;
    surname: string;
  }

  interface IValidationData {
    isValid: boolean;
    errorMsg?: string;
  }

  type TValidationData = Record<keyof IForm, IValidationData>;

  const validationData: TValidationData = {
    login: { isValid: false, errorMsg: "At least 3 characters" },
    password: { isValid: true },
    surname: { isValid: true },
  };

  console.log(validationData);
}
