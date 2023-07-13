// Readonly, Partial, Required, Pick, Record
{
  const arr1: Array<number> = [1, 2, 3]; // const arr1: number[]
  const arr2: number[] = [1, 2, 3]; //const arr2: number[]

  const roarr: ReadonlyArray<string> = ["str1", "str2", "str3"];
  // roarr[0] = "test1"; // Index signature in type 'readonly string[]' only permits reading.ts(2542)

  interface IState {
    data: {};
    tag: string;
  }

  function action(state: IState) {
    state.data = "abc"; // ok
  }

  function actionReadonly(state: Readonly<IState>) {
    //state.data = "abc"; // Cannot assign to 'data' because it is a read-only property.ts(2540)
  }
}

{
  interface IState {
    data: {
      name: string;
    };
    tag: string;
  }

  function action(state: IState) {
    state.data.name = "abc"; // Ok
  }

  function actionReadonly(state: Readonly<IState>) {
    state.data.name = "abc"; // Ok
  }
}
