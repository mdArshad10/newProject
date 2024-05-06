import JustValidate from "just-validate";

const validate = new JustValidate("#user-form", {
  validateBeforeSubmitting: true,
});
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userPhone = document.querySelector("#userPhone");
const userAddress = document.querySelector("#userAddress");
const userSuburb = document.querySelector("#userSuburb");
const userPostCode = document.querySelector("#userPostCode");
const userState = document.querySelector("#customer_state");
const registrationForm = document.querySelector("#user-form");
let emailExistsErrorShown = false;

validate
  .addField(userName, [
    {
      rule: "required",
      errorMessage:
        "Oops! I think you missed something. We need your name to set up your account. Please fill out and we can set you up!",
    },
    {
      rule: "maxLength",
      value: 225,
      errorMessage: "user name is exceeded maximum length",
    },
  ])
  .addField(userEmail, [
    {
      rule: "required",
      errorMessage:
        "Hmm, doesn't look like you've put in a correct email address.Double check and try again",
    },
    {
      rule: "email",
      errorMessage: "invalid email address",
    },
    {
      rule: "maxLength",
      value: 225,
      errorMessage: "email is exceeded maximum length",
    },
  ])
  .addField(userPhone, [
    {
      rule: "required",
      errorMessage: "",
    },
    {
      rule: "maxLength",
      value: 14,
    },
    {
      rule: "customRegexp",
      value:
        /^((\+61\s?)?(\((0|02|03|04|07|08)\))?)?\s?\d{1,4}\s?\d{1,4}\s?\d{0,4}$/gm,
    },
  ])
  .addField(userAddress, [
    { rule: "required" },
    {
      rule: "maxLength",
      value: 225,
    },
  ])
  .addField(userSuburb, [
    { rule: "required" },
    { rule: "maxLength", value: 225 },
  ])
  .addField(userPostCode, [
    {
      rule: "required",
    },
    {
      rule: "integer",
      errorMessage: "Please enter a whole number for post code.",
    },
    {
      rule: "maxLength",
      value: 4,
    },
    {
      rule: "minLength",
      value: 4,
    },
  ])
  .addField(userState, [{ rule: "required" }, { rule: "maxLength", value: 3 }]);

// if message showing the email is already present
userEmail.addEventListener("input", (event) => {
  if (emailExistsErrorShown) {
    const errorElement = document.querySelector(".validation-error");
    if (errorElement) {
      errorElement.remove();
      emailExistsErrorShown = false; // Reset the flag
    }
  }
});

validate.onSuccess(async (event) => {
  // get all details
  const formFields = event.target.querySelectorAll("input, select");
  const formData = new FormData();
  for (let i = 0; i < formFields.length; i++) {
    formData.append(formFields[i].name, formFields[i].value);
  }
  formData.append("customer_labels", "Trade");
  formData.append("apikey", import.meta.env.VITE_API_KEY);

  try {
    const data = await fetch(
      "https://psm.cabinetry.online/api/addCustomer.php",
      {
        method: "POST",
        body: formData,
        redirect: "follow",
      }
    );
    const response = await data.json();
    console.log(response);
    if (response.status === "success") {
      const current = window.location.origin;
      window.location.href = `${current}/src/thank_you/index.html`;
    } else {
      if (!emailExistsErrorShown) {
        const emailField = document.getElementById("userEmail");
        const errorElement = document.createElement("div");
        errorElement.className = "validation-error";
        errorElement.textContent = "Email already exists";
        emailField.parentNode.appendChild(errorElement);
        emailExistsErrorShown = true;
      }
    }
  } catch (error) {
    console.error(error.message);
  }
});
