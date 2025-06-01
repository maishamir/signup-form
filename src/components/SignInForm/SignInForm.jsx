import React, { useState } from "react";
import "./SignInForm.scss";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function SignInForm() {
  const [formData, setFormData] = useState(INITIAL_DATA);

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name cannot be empty";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name cannot be empty";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email cannot be empty";
    } else if (!formData.email.includes('@')) {
      newErrors.email = "Looks like this is not an email";
    }
    else formData.email = "";

    if (!formData.password.trim()) {
      newErrors.password = "Password cannot be empty";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Thank you! Please check your email for confirmation.");
      setFormData(INITIAL_DATA);
    }

    console.log(errors)
  }

  return (
    <div className="form__container">
      <div className="form__banner">
        <span className="form__banner--bold">Try it free 7 days</span> then
        $20/mo. thereafter
      </div>

      <form
        action=""
        autoComplete="off"
        className="form"
        onSubmit={handleSubmit}
      >
        <div className="form__input">
          <input
            className={`form__input-input ${errors.firstName ? 'form__input-input--error' : '' }`}
            type="text"
            autoFocus
            placeholder="First Name"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <small style={{ visibility: errors.firstName ? "visible" : "hidden"}}>{errors.firstName || 'placeholder'}</small>
        </div>


        <div className="form__input">
          <input
            className={`form__input-input ${errors.lastName ? 'form__input-input--error' : '' }`}
            type="text"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <small style={{ visibility: errors.lastName ? "visible" : "hidden"}}>{errors.lastName || 'placeholder'}</small>
        </div>


        <div className="form__input">
          <input
            className={`form__input-input ${errors.email ? 'form__input-input--error' : '' }`}
            type="text"
            placeholder="Email Address"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <small style={{ visibility: errors.email ? "visible" : "hidden"}}>{errors.email || 'placeholder'}</small>
        </div>
        <div className="form__input">
          <input
            className={`form__input-input ${errors.password ? 'form__input-input--error' : '' }`}
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />

          <small style={{ visibility: errors.password ? "visible" : "hidden"}}>{errors.password || 'placeholder'}</small>
        </div>
        <button type="submit" className="form__submitButton">
          Claim your free trial
        </button>
        <footer className="form__footer">
          By clicking the button, you are agreeing to our
          <span className="form__footer--span">Terms and Services</span>
        </footer>
      </form>
    </div>
  );
}

export default SignInForm;
