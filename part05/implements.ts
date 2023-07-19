// implements
// class C implements A, B { ... }
{
  interface IUser {
    login: string;
    password: string;
    token?: number;
  }

  interface IValidation {
    valid: boolean;
    isValid: (data: string) => boolean;
  }

  class UserForm1 implements IUser, IValidation {
    login: string = "admin";
    password: string = "123";
    valid: boolean = false;

    isValid(login: string) {
      return login.length > 3;
    }
  }

  const user1 = new UserForm1();
  console.log(user1); // UserForm1 { login: 'admin', password: '123', valid: false }

  class UserForm2 implements IUser, IValidation {
    login: string = "admin";
    password: string = "123";
    valid: boolean = false;
    token?: number = 500;

    isValid(login: string) {
      return login.length > 3;
    }
  }

  const user2 = new UserForm2();
  console.log(user2); // UserForm2 { login: 'admin', password: '123', valid: false, token: 500 }
}

{
  interface IAnimal {}
  interface IOviparous {}

  class Bird implements IAnimal, IOviparous {}

  interface IFlyable {}

  class Eagle extends Bird implements IFlyable {}
}
