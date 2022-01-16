const form = document.querySelector(".login-form");
const eventReset = () => {
  event.currentTarget.reset();
};

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
    eventReset();
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  eventReset();
};
form.addEventListener("submit", handleSubmit);
