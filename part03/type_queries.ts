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

  PI.toFixed();
  // PIClone.toFixed();
}
