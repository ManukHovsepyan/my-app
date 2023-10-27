// validation.js

export function validateFormStep(step: any, data : any) {
  const errors = {
    name: "",
    surname: "",
    country: "",
    date: "",
    email: "",
    phone: "",
    userName: "",
    password: "",
  };

  if (step === 1) {
    if (data.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (data.surname.trim() === "") {
      errors.surname = "Surname is required";
    }
    if (!data.country) { // Check if country is empty
      errors.country = "Country is required";
    }
    if (data.date.trim() === "") {
      errors.date = "Date of birth is required";
    }
  } else if (step === 2) {
    if (data.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
    if (data.phone.trim() === "") {
      errors.phone = "Phone is required";
    }
    if (data.userName.trim() === "") {
      errors.userName = "Username is required";
    }
    if (data.password.trim() === "") {
      errors.password = "Password is required";
    }
  }

  return errors;
}

export function isValidEmail(email : any) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
