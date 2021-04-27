import React, { useState, useEffect } from "react";
import './SignUp.css'
import { FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { BsFillPersonFill } from "react-icons/bs";
import { auth, handleUserProfile } from "../firebase/config";

const SignUp = (props) => {
  const initialValue = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialValue);
  const { displayName, email, password, confirmPassword } = formData;
  const [error, setError] = useState("");

  useEffect(() => {
    if (password !== confirmPassword) {
      setError("Not matching");
    } else {
      setError("");
    }
  }, [password, confirmPassword]);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    } else {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
    }
  };

  return (
    <div className='sign_up_page py-2'>
    <div className="container" style={{ marginTop: "90px" }}>
      <div className="card sign_up_card text-center mx-auto col-md-4 col-sm-10 col-9 mb-5 ">
      <h2 className="section_title mt-4">Sign up</h2>
        <div className='sign_in_card_icon pt-3  text-muted' >
            <BsFillPersonFill  style={{fontSize:'80px'}}/>
        </div>
        
        <AvForm className="container mb-4 mt-2" onSubmit={handleSubmit}>
          <FormGroup className='my-3'>
            <AvField
              name="displayName"
              onChange={handleFormChange}
              value={displayName}
              className=" rounded-pill"
              type="text"
              pattern="^[[a-zA-Z]{3,}"
              placeholder="Enter your name"
              title="Only letters are allowed"
              required
            />
          </FormGroup>
          <FormGroup className='my-3'>
            <AvField
              name="email"
              onChange={handleFormChange}
              value={email}
              
              type="email"
              className="mr-sm-2 rounded-pill"
              title="Enter valid email"
              placeholder="something@idk.cool"
              required
            />
          </FormGroup>
          <FormGroup className='my-3'>
            <AvField
              name="password"
              onChange={handleFormChange}
              value={password}
              className=" rounded-pill"
              type="password"
              pattern="^[a-zA-Z0-9]{8,}$"
              placeholder="Enter password (at least 8 digits)"
              title="Minimum eight characters"
              required
            />
          </FormGroup>
          <FormGroup className='my-3'>
            <AvField
              className=" rounded-pill"
              onChange={handleFormChange}
              value={confirmPassword}
              type="password"
              name="confirmPassword"
              id="examplePassword2"
              pattern="^[a-zA-Z0-9]{8,}$"
              placeholder="Confirm your password"
              title="Confirm your password"
              required
            />
          </FormGroup>

          <div className="text-danger mb-2">{error}</div>
          <button className=" main_btn w-100 mt-2"  type="submit">
            Register
          </button>
        </AvForm>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
