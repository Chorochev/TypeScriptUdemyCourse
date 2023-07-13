// Generic classes
{
  class User<T, S> {
    name: T;
    age: S;

    constructor(name: T, age: S) {
      this.name = name;
      this.age = age;
    }

    sayMyFullName<T>(surname: T): string {
      // if (typeof T !== "string") { // Error: 'T' only refers to a type, but is being used as a value here.ts(2693)
      if (typeof surname !== "string") {
        return `I have only name: ${this.name}`;
      } else {
        return `${this.name} ${surname}`;
      }
    }
  }

  const ivan = new User("Ivan", 30);
  console.log(ivan);
  console.log(ivan.sayMyFullName("Smith"));

  const alex = new User<string, number>("Alex", 45);
  console.log(alex);

  const nameDate = "Max";
  const ageDate = 54;
  const max = new User<string, number>(nameDate, ageDate);
  console.log(max);

  class AdminUser1<T, S> extends User<T, S> {}

  class AdminUser2 extends User<string, number> {}

  class AdminUser3<T> extends User<string, number> {
    rules: T;
    constructor(rules: T, age: number) {
      super("Admin", age); // Call User's construtor
      this.rules = rules;
    }
  }

  const admin = new AdminUser3<string>("some rules", 45);
  console.log(admin);
}
