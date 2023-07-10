{
  const dataFromControl = {
    water: 200,
    el: 350,
  };

  function checkReadings(data: typeof dataFromControl): boolean {
    const dataFromUser = {
      water: 200,
      el: 350,
    };

    if (data.el === dataFromUser.el && data.water === data.water) {
      return true;
    } else {
      return false;
    }
  }

  console.log(checkReadings(dataFromControl));
}

{
  const PI = 3.14;
  let PIClone: typeof PI;

  function showPI(num: typeof PI): void {
    console.log(`PI => ${num}`);
  }

  function showPIClone(num: typeof PIClone): void {
    console.log(`PIClone => ${num}`);
  }

  showPI(PI);
  showPIClone(PI);
  // showPIClone(PIClone); // Variable 'PIClone' is used before being assigned.ts(2454)
  PIClone = 3.14;
  showPIClone(PIClone); // Ok
}
