import SquareInput from "components/shared/SquareInput";
import style from "./index.module.scss";
import SquareButton from "components/shared/SquareButton";
import { ChangeEvent, useState } from "react";
import SquareDateInput from "components/shared/SquareDateInput";
import ReactFlagsSelect from "react-flags-select";
import { getCountryFullName } from "helpers/helpers";
import { validateFormStep } from "./validation"

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    country: "",
    countryFullName: "",
    date: "",
    email: "",
    phone: "",
    userName: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    country: "",
    date: "",
    email: "",
    phone: "",
    userName: "",
    password: ""
  });

  const submitFormStepChange = (event: any) => {
    event.preventDefault();
    const newErrors = validateFormStep(step, formData);
    if (Object.values(newErrors).every((error) => !error)) {
      setStep(step + 1);
    } else {
      setErrors(newErrors);
    }
  };

  const submitForm = (event: any) => {
    event.preventDefault();
    const newErrors = validateFormStep(step, formData);
    if (Object.values(newErrors).every((error) => !error)) {
      console.log(formData, "sd");
    } else {
      setErrors(newErrors);
    }
  };

  const handleInputChange = (event: any) => {
    const { target: { name, value } } = event;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ""
    });
  };
  return (
    <>
      {step === 1 ? (
        <form className={style.registrationForm}>
          <div className={style.registrationFormContainer}>
            <SquareInput
              onChange={handleInputChange}
              label="Name"
              name="name"
              value={formData.name}
							placeholder="Enter your Name"
            />
            {errors.name && <span className={style.errorBorder}>{errors.name}</span>}
          </div>
          <div className={style.registrationFormContainer}>
            <SquareInput
              onChange={handleInputChange}
              label="Surname"
              name="surname"
              value={formData.surname}
            />
            {errors.surname && (
              <span className={style.errorBorder}>{errors.surname}</span>
            )}
          </div>
					<div className={style.registrationFormContainer}>
						<label>Country</label>
						<ReactFlagsSelect
							className={style.countrySelect}
							selected={formData.country}
							onSelect={(code) =>
								setFormData({
									...formData,
									countryFullName: getCountryFullName(code),
									country: code
								})
							}
						/>
						{errors.country && !formData.country && (
							<span className={style.errorBorder}>{errors.country}</span>
						)}
					</div>
          <div className={style.registrationFormContainer}>
            <label>Birth of date</label>
            <SquareDateInput
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
            {errors.date && <span className={style.errorBorder}>{errors.date}</span>}
          </div>
          <SquareButton
            type="button"
            onClick={submitFormStepChange}
          >
            Next
          </SquareButton>
        </form>
      ) : (
        <form className={style.registrationForm}>
          <div className={style.registrationFormContainer}>
            <SquareInput
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className={style.errorBorder}>{errors.email}</span>}
          </div>
          <div className={style.registrationFormContainer}>
            <SquareInput
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <span className={style.errorBorder}>{errors.phone}</span>}
          </div>
          <div className={style.registrationFormContainer}>
            <SquareInput
              label="Username"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
            />
            {errors.userName && (
              <span className={style.errorBorder}>{errors.userName}</span>
            )}
          </div>
          <div className={style.registrationFormContainer}>
            <SquareInput
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className={style.errorBorder}>{errors.password}</span>
            )}
          </div>
          <div className={style.registrationFormButtons}>
            <SquareButton
              type="button"
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Previous
            </SquareButton>
            <SquareButton onClick={submitForm}>Submit</SquareButton>
          </div>
        </form>
      )}
    </>
  );
};

export default RegistrationForm;
