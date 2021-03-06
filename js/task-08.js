const formRef = document.querySelector(".login-form");

const handleSubmit = (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

  const dataEl = { mail: email.value, password: password.value };

  formRef.reset();

  console.log(dataEl);
};

formRef.addEventListener("submit", handleSubmit);
