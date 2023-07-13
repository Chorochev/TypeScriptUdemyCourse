// Readonly, Partial, Required, Pick, Record
// Immutability in TypeScript
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

{
  // Generic partial

  interface IState {
    // (property) IState.data: { name: string; }
    data: {
      name: string;
    };
    tag: string; // (property) IState.tag: string
  }

  const state: IState = {
    data: { name: "str1" },
    tag: "tag1",
  };

  state.data;
  state.tag;

  const statePartial1: Partial<IState> = {
    // (property) data?: { name: string;} | undefined
    data: {
      name: "John",
    },
  };
  statePartial1.data; // data?
  statePartial1.tag; // tag?

  const statePartial2: Partial<IState> = {};
  statePartial2.data; // data?
  statePartial2.tag; // tag?
}

{
  // Generic Required
  interface IState {
    data: {
      name: string;
    };
    tag?: string; // (property) IState.tag?: string | undefined
  }

  const strictState: Required<IState> = {
    data: { name: "Max" },
    tag: "str", // (property) tag: string
  };
}
