// import { Link } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";


export default function Form() {
  const [initialData, setInitialData] = useState({
    fullname: "",
    email: "",
    mNumber: "",
    password: "",
    confirmPassword: "",
    chooseState: "",
    gender: "",
    checkBox: false,
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialData({ ...initialData, [name]: value , id : new Date().getTime().toString()});
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(initialData));
    setIsSubmit(true);   
   
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(initialData);
    }
  }, [formError]);

  const validate = (values) => {
    
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexNumber = /^[6-9]\d{9}$/;

    if (!values.fullname) {
      errors.fullname = "FullName is Required";
    }

    if (!values.email) {
      errors.email = "Email is Required";
    }
     else if (!regex.test(values.email)) {
      errors.email = "Email is Invalid";
    }

    if (!values.mNumber) {
      errors.mNumber = "Mobile Number is Required";
    } else if (!regexNumber.test(values.mNumber)) {
      errors.mNumber = "Mobile Number is Invaild";
    }

    if (!values.password) {
      errors.password = "Password is Required";
    }else if (values.password.length < 4) {
      errors.password ="Password min length is 4 char";
    }else if (values.password.length > 10) {
      errors.password ="Password max length is 10 char";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is Required";
    }else if (!(values.password === values.confirmPassword)) {
      errors.confirmPassword = "Password and Confirm Password doesn't match";
    }

    if (!values.chooseState) {
      errors.chooseState = "Kindly Choose Your State";
    }

    if (!values.gender) {
      errors.gender = "Kindly Select Your Gender";
    }

    if (!values.checkBox) {
      errors.checkBox = "Please Agree Terms and Conditions";
    }

    return errors;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Registration Form</h1>
            <h3>{(Object.keys(formError).length === 0 && isSubmit) ?
            <p>Submit Successfully </p> : <Fragment></Fragment>}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-2">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="fullname">FullName :</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={initialData.fullname}
                onChange={handleChange}
              />
              <br></br>
              <p style={{ marginLeft: "75px", color: "red" }}>
                {formError.fullname}
              </p>

              <label htmlFor="email">Email :</label>
              <input
                type="email"
                name="email"
                id="email"
                value={initialData.email}
                onChange={handleChange}
              />
              <br></br>
              <p style={{ marginLeft: "45px", color: "red" }}>
                {formError.email}
              </p>

              <label htmlFor="mobileNumber">Mobile Number :</label>
              <input
                type="text"
                name="mNumber"
                id="mobileNumber"
                value={initialData.mNumber}
                onChange={handleChange}
              
              />
              <br></br>
              <p style={{ marginLeft: "120px", color: "red" }}>
                {formError.mNumber}
              </p>

              <label htmlFor="password">Password :</label>
              <input
                type="password"
                name="password"
                id="password"
                value={initialData.password}
                onChange={handleChange}
              />
              <br></br>
              <p style={{ marginLeft: "75px", color: "red" }}>
                {formError.password}
              </p>

              <label htmlFor="confirmPassword">Confirm Password :</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={initialData.confirmPassword}
                onChange={handleChange}
              />
              <br></br>
              <p style={{ marginLeft: "120px", color: "red" }}>
                {formError.confirmPassword}
              </p>

              <label htmlFor="">Choose Your State :</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="chooseState"
                value={initialData.chooseState}
                onChange={handleChange}
              >
                <option defaultValue value="">---Select Your State---</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Bihar">Bihar</option>
                <option value="West Bengal">West Bengal</option>
              </select>
              <p style={{ color: "red" }}>{formError.chooseState}</p>

              <label htmlFor="gender">
                Gender :
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
              <p style={{ color: "red" }}>{formError.gender}</p>

              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkBox"
                  id="checkBox"
                  // value="agree"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="agree">
                  I Agree all terms & conditions
                </label>
                <p style={{ color: "red" }}>{formError.checkBox}</p>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


