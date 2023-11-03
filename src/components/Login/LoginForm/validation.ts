export const validateLoginForm  = (data: any) => {
  const errors = {
		email: "",
		password: ""
  };
	if (data.email.trim() === "") {
		errors.email = "Email is required";
	}
	if (data.password.trim() === "") {
		errors.password = "Password is required";
	}
	console.log(errors)
	return errors;
}