interface IFormData {
  email: string;
  title: string;
  text: string;
  checkbox: boolean | undefined;
}

const formData: IFormData = {
  email: "",
  title: "",
  text: "",
  checkbox: false,
};

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

document.querySelectorAll(".btn").forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault(); // submit off
    collectData();
    if (validateFormData(formData)) {
      checkFormData(formData);
    } else {
      alert("Please, complete all fields!");
    }
    console.log(formData);
  })
);

function collectData(): void {
  formData.email = getValueFromInput("email");
  formData.title = getValueFromInput("title");
  formData.text = getValueFromInput("text");
  formData.checkbox = getValueFromCheckbox("checkbox");
}

function getValueFromInput(id: string): string {
  const element = document.getElementById(id) as HTMLInputElement;
  if (element === null) {
    console.error(`Element "${id} is missing."`);
    return "";
  } else {
    return element.value;
  }
}

function getValueFromCheckbox(id: string): boolean | undefined {
  const element = document.getElementById(id) as HTMLInputElement;
  if (element === null) {
    console.error(`Element "${id} is missing."`);
    return undefined;
  } else {
    return element.checked;
  }
}

function validateFormData(data: IFormData) {
  const conditional =
    data.email.trim() !== "" &&
    data.text.trim() !== "" &&
    data.title.trim() !== "" &&
    data.checkbox !== undefined;
  if (conditional) {
    return true;
  } else {
    console.log("Please, complete all fields");
    return false;
  }
}

function checkFormData(data: IFormData) {
  const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
  const conditional = emails.filter((e) => e == data.email).length;
  if (conditional > 0) {
    console.log("This email is already exist");
  } else {
    console.log("Posting data...");
    console.log(data);
    alert("Everything alright.");
    document.querySelector("form")?.submit();
  }
}
