import React, { useState } from "react";
import "./SignIn.css";
import {  FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";
import { signInWithGoogle, auth } from "../firebase/config";
import { BsFillPersonFill } from "react-icons/bs";
const SignIn = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialValue);
  const { email, password } = formData;

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(email, password);
  };
  return (
    <div className='sign_in_page py-2'>

    <div className="container" style={{ marginTop: "80px" }}>
      <div className='card sign_in_card text-center mx-auto col-md-4 col-sm-10 col-9 pt-4 pb-2 mb-5 mt-4'>        
      <h2 className="section_title mt-2">Sign in</h2>
        <div className='sign_in_card_icon pt-3  text-muted' >
            <BsFillPersonFill  style={{fontSize:'80px'}}/>
        </div>
        <AvForm className="container my-2" onSubmit={handleSubmit}>
          <FormGroup FormGroup className=" mr-sm-2 mb-sm-0 mb-md-4 mt-md-1 ">
            <AvField
              name="email"
              onChange={handleFormChange}
              value={email}
              type="email"
              className=" rounded-pill"
              placeholder="Enter your mail : something@idk.cool"
              title="Enter your email"
              required
            />
          </FormGroup>

          <FormGroup className=" mr-sm-2 mb-sm-0  my-md-4">
            <AvField
              className="rounded-pill"
              name="password"
              onChange={handleFormChange}
              value={password}
              type="password"
              pattern="^[a-zA-Z0-9]{8,}$"
              placeholder="Enter password"
              title="Minimum eight characters"
              required
            />
          </FormGroup>

          <p className="text-center mt-4 mb-2">
            Have no account yet{" "}
            <span className="">
              <Link to="SignUp" className='sign_up_link'>Sign Up</Link>
            </span>
          </p>

          <button className="sec_btn py-1 my-3 mb-sm-2 col-12 " type="submit">
            Sign in
          </button>
          <button className="btn btn-danger rounded-pill col-12 py-2 mt-4 " onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </AvForm>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
