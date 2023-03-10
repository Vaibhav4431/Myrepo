import React, { useState } from "react";

const EditForm = () => {
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
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    mNumber: "",
    password: "",
    confirmPassword: "",
    chooseState: "",
    gender: "",
    checkBox: "",
  });
  const [formData, setFormData] = useState(false);
  const [editForm, setEditForm] = useState(false);

  const handleChange = (event) => {
    if (event.target.type === "checkbox") {
      setInitialData({
        ...initialData,
        [event.target.name]: event.target.checked,
      });
    } else {
      setInitialData({
        ...initialData,
        [event.target.name]: event.target.value,
      });
    }
    setErrors({
      ...errors,
      [event.target.name]: "",
    });
  };

  let { fullname, email, mNumber, password , chooseState, gender } = initialData;

  const validate = () => {
    const newErrors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexNumber = /^[6-9]\d{9}$/;

    if (!initialData.fullname) {
      newErrors.fullname = "FullName is Required";
    }

    if (!initialData.email) {
      newErrors.email = "Email is Required";
    } else if (!regex.test(initialData.email)) {
      newErrors.email = "Email is Invalid";
    }

    if (!initialData.mNumber) {
      newErrors.mNumber = "Mobile Number is Required";
    } else if (!regexNumber.test(initialData.mNumber)) {
      newErrors.mNumber = "Mobile Number is Invaild";
    }

    if (!initialData.password) {
      newErrors.password = "Password is Required";
    } else if (initialData.password.length < 4) {
      newErrors.password = "Password min length is 4 char";
    } else if (initialData.password.length > 10) {
      newErrors.password = "Password max length is 10 char";
    }

    if (!initialData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is Required";
    } else if (!(initialData.password === initialData.confirmPassword)) {
      newErrors.confirmPassword = "Password and Confirm Password doesn't match";
    }

    if (!initialData.chooseState) {
      newErrors.chooseState = "Kindly Choose Your State";
    }

    if (!initialData.gender) {
      newErrors.gender = "Kindly Select Your Gender";
    }

    if (!initialData.checkBox) {
      newErrors.checkBox = "Please Agree Terms and Conditions";
    }

    return newErrors;
  };

  const onkeypressHandler = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleBlur = (event) => {
    if (!event.target.value && event.target.type !== "checkbox") {
      setErrors({
        ...errors,
        [event.target.name]: `${event.target.name} is required`,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setFormData(true);
    console.log(initialData);
  };

  const handleEdit = () => {
    setFormData(false);
    setEditForm(true);
  };
  const handleSave = () => {
    
    setEditForm(false);
  };

  return (
    <div>
      {!formData ? (
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Registration Form</h1>
                <label htmlFor="fullname">FullName :</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={initialData.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br></br>
                <p style={{ marginLeft: "75px", color: "red" }}>
                  {errors.fullname}
                </p>

                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={initialData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br></br>
                <p style={{ marginLeft: "45px", color: "red" }}>
                  {errors.email}
                </p>

                <label htmlFor="mobileNumber">Mobile Number :</label>
                <input
                  type="text"
                  name="mNumber"
                  id="mNumber"
                  value={initialData.mNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyPress={onkeypressHandler}
                />
                <br></br>
                <p style={{ marginLeft: "120px", color: "red" }}>
                  {errors.mNumber}
                </p>

                <label htmlFor="password">Password :</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={initialData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br></br>
                <p style={{ marginLeft: "75px", color: "red" }}>
                  {errors.password}
                </p>

                <label htmlFor="confirmPassword">Confirm Password :</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={initialData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br></br>
                <p style={{ marginLeft: "120px", color: "red" }}>
                  {errors.confirmPassword}
                </p>

                <label htmlFor="">Choose Your State :</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "50%" }}
                  name="chooseState"
                  value={initialData.chooseState}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option defaultValue value="">
                    ---Select Your State---
                  </option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Bihar">Bihar</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                <p style={{ color: "red" }}>{errors.chooseState}</p>

                <label htmlFor="gender">Gender :</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    checked={gender === "female"}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    checked={gender === "other"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
                <p style={{ color: "red" }}>{errors.gender}</p>

                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    //   style={{float:'none'}}
                    type="checkbox"
                    name="checkBox"
                    id="checkBox"
                    checked={initialData.checkBox}
                    // value="agree"
                    onChange={handleChange}
                    onBlur={handleBlur}

                    // onClick={handleCheck}
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I Agree all terms & conditions
                  </label>
                  <p style={{ color: "red" }}>{errors.checkBox}</p>
                </div>
                <button
                  type="submit"
                  onClick={handleSave}
                  className="btn btn-primary mx-3"
                >
                  Save
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : !editForm ? (
        <div className="mx-3">
          <p>
            <h2> Form Saved </h2>
          </p>

          <p>
            <b>Full Name:</b> {initialData.fullname}
          </p>
          <p>
            <b>Email:</b> {initialData.email}
          </p>
          <p>
            <b>Mobile Number:</b> {initialData.mNumber}
          </p>
          <p>
            <b>Password:</b> {initialData.password}
          </p>
          <p>
            <b>State:</b>
            {initialData.chooseState}
          </p>
          <p>
            <b>Gender:</b> {initialData.gender}
          </p>
          <button className="btn btn-primary mx-3" onClick={handleEdit}>
            
            Edit
          </button>
        </div>
      ) : (
        <div className="mx-3">
          <p>
            <h2> Form Submited </h2>
          </p>

          <p>
            <b>Full Name:</b> {initialData.fullname}
          </p>
          <p>
            <b>Email:</b> {initialData.email}
          </p>
          <p>
            <b>Mobile Number:</b> {initialData.mNumber}
          </p>
          <p>
            <b>Password:</b> {initialData.password}
          </p>
          <p>
            <b>State:</b>
            {initialData.chooseState}
          </p>
          <p>
            <b>Gender:</b> {initialData.gender}
          </p>
        </div>
      )}
    </div>
  );
};
export default EditForm;
