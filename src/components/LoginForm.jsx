import React, { useState } from "react";

const LoginForm = ({saveUser}) => {
  const initialFormState = {
    userName: "",
    email: "",
    gender: "male",
    age: 18,
    country: "India",
  }
  const [formFields, setFormFields] = useState({...initialFormState});
  const [errorMsgs, setErrorMsgs] = useState({ userName: "" });

  const validateFields = (formFields) => {

    if (formFields.userName?.length < 5) {
      setErrorMsgs((errorMsgs) => ({
        ...errorMsgs,
        userName: "please enter >5 chars",
      }));
      return false
    }
    setErrorMsgs({ userName: "" });
    return true
  };
  const handleFormFields = (e) => {
    const { name, value } = e?.target;
    setFormFields((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(validateFields(formFields)) {
      saveUser(formFields)
      window.alert('user saved...')
      setFormFields({...initialFormState})
    }
    return
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            name="userName"
            value={formFields?.userName}
            onChange={handleFormFields}
          />
        </label>
        <span>{errorMsgs?.userName}</span>
      </div>
      <div>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formFields?.email}
            onChange={handleFormFields}
          />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <input
            type="radio"
            name="gender"
            value={"male"}
            onChange={handleFormFields}
            checked={formFields?.gender === "male"}
          />
          Male
          <input
            type="radio"
            name="gender"
            value={"female"}
            onChange={handleFormFields}
            checked={formFields?.gender === "female"}
          />
          Female
        </label>
      </div>
      <div>
        <label>
          Age:{" "}
          <input
            type="text"
            name="age"
            value={formFields?.age}
            onChange={handleFormFields}
          />
        </label>
      </div>
      <div>
        <label>
          Country:
          <select
            type="text"
            name="country"
            onChange={handleFormFields}
            selected={formFields?.coutry}
          >
            <option name="coutry" value="India">
              India
            </option>
            <option name="coutry" value="USA">
              USA
            </option>
            <option name="coutry" value="Australia">
              Australia
            </option>
          </select>
        </label>
      </div>
      <div>
        <button type="submit" name="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
