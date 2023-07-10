interface IStyles {
  [key: string]: string;
}

const styles: IStyles = {
  position: "absolute",
  top: "20px",
  left: "50px",
  // aling: 50, // Type 'number' is not assignable to type 'string'.ts(2322)
};
