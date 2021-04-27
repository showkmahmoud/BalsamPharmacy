import React from "react";
import { Col, Row, Button, FormGroup, FormText } from "reactstrap";
// import './JopApplication.css'

import { AvForm, AvField } from "availity-reactstrap-validation";

const JopApplication = (props) => {
  return (
    <div className="container py-5">
      <h2 className="section_title my-5 ml-3">Jop Application</h2>
      <AvForm className="container my-5">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <AvField
              className='rounded-pill'
                name="name"
                
                type="text"
                pattern="^[[a-zA-Z]{3,}"
                placeholder="Enter Your Name"
                title="Only letters are allowed for this example"
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <AvField
                name="email"
                
                type="email"
                className="mr-sm-2 rounded-pill"
                placeholder=" Enter Your Mail : something@idk.cool"
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <AvField
           
            type="text"
            name="address"
            id="exampleAddress"
            // pattern="\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\."
            placeholder=" Enter your Adress : 61 Park Street"
            className='rounded-pill'
            required
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <AvField
              className='rounded-pill'
               
                type="text"
                name="Governorate"
                id="exampleGovernorate"
                placeholder="Governorate"
                pattern="^[[a-zA-Z]{4,}"
                required
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <AvField
              className='rounded-pill'
               
                type="text"
                name="city"
                id="exampleCity"
                placeholder="City"
                pattern="^[[a-zA-Z]{4,}"
                required
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <AvField
                className='rounded-pill'
                type="text"
                name="zip"
                id="exampleZip"
                placeholder="ZIP"
                pattern="^[[0-9]{5,}"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <AvField
                className='rounded-pill'
                type="text"
                name="faculty"
                id="exampleFaculity"
                placeholder="Faculty"
                pattern="^[[a-zA-Z]{4,}"
                required
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <AvField
                className='rounded-pill'
                type="text"
                name="graduation"
                id="exampleGraduation"
                placeholder="Graduation year"
                pattern="^\d{4}$"
                required
              />
            </FormGroup>
          </Col>

          <FormGroup>
            <AvField
            className="choose"
              
              type="file"
              name="file"
              id="exampleFile"
              required
            />
            <FormText color="muted">
              Please attach your CV here.. best wishes
            </FormText>
          </FormGroup>
        </Row>
        <button className='sec_btn d-block mt-3 mx-auto'>Submit</button>
      </AvForm>
    </div>
  );
};

export default JopApplication;
