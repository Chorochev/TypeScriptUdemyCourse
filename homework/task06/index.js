var formData = {
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
document.querySelectorAll(".btn").forEach(function (item) {
    return item.addEventListener("click", function (e) {
        e.preventDefault(); // submit off
        collectData();
        if (validateFormData(formData) === false) {
            alert("Please, complete all fields!");
        }
        else {
            checkFormData(formData);
        }
        console.log(formData);
    });
});
function collectData() {
    formData.email = getValueFromInput("email");
    formData.title = getValueFromInput("title");
    formData.text = getValueFromInput("text");
    formData.checkbox = getValueFromCheckbox("checkbox");
}
function getValueFromInput(id) {
    var element = document.getElementById(id);
    if (element === null) {
        console.error("Element \"".concat(id, " is missing.\""));
        return "";
    }
    else {
        return element.value;
    }
}
function getValueFromCheckbox(id) {
    var element = document.getElementById(id);
    if (element === null) {
        console.error("Element \"".concat(id, " is missing.\""));
        return undefined;
    }
    else {
        return element.checked;
    }
}
function validateFormData(data) {
    var conditional = data.email.trim() !== "" &&
        data.text.trim() !== "" &&
        data.title.trim() !== "" &&
        data.checkbox !== undefined;
    if (conditional) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var _a;
    // const email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    var conditional = emails.filter(function (e) { return e == data.email; }).length;
    // Если email совпадает хотя бы с одним из массива
    if (conditional > 0) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
        alert("Everything alright.");
        (_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.submit();
    }
}
