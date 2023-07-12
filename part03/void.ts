{
  type voidFunc = () => void;

  const retString: voidFunc = () => {
    return "str";
  };

  const s = retString(); // const s: void
  console.log(s); // str

  const retNum: voidFunc = () => {
    return 5;
  };

  const n = retNum(); // const n: void
  console.log(n); // 5
}
