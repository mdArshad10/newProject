const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const confirmEmailInput = document.querySelector("#confirm-email");
const phoneNumberInput = document.querySelector("#phone");
const expectedSalaryInput = document.querySelector("#salary");
const startDateInput = document.querySelector("#startDate");
const resumeInput = document.querySelector("#resume");
const submitBtn = document.querySelector("form>button");

submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const confirmEmail = confirmEmailInput.value;
  const phoneNumber = phoneNumberInput.value;
  const expectedSalary = expectedSalaryInput.value;
  const startDate = startDateInput.value;
  const resume = resumeInput.value;

  if (email !== confirmEmail) {
    console.log("password is not matching");
  }

  console.log({
    firstname,
    lastName,
    email,
    confirmEmail,
    phoneNumber,
    expectedSalary,
    startDate,
    resume,
  });
});
