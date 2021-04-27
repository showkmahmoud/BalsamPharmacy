import React from "react";

import { Col, Row, Button, FormGroup, Input, Label } from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

const Contacts = () => {
  return (
    <div className="container pt-5">
      <h2 className="section_title my-5 ml-3">Contact us</h2>

      <AvForm className="container my-5">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <AvField
                name="name"
                className='rounded-pill'
                type="text"
                pattern="^[[a-zA-Z\s]{7,}"
                placeholder="First name"
                title="Enter your full name"
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <AvField
                name="name"
                className='rounded-pill'
                type="text"
                pattern="^[[a-zA-Z\s]{7,}"
                placeholder="Last name"
                title="Enter your full name"
                required
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
                name="Governorate"
                id="exampleGovernorate"
                title="Where you live now"
                placeholder="Governorate"
                pattern="^[[a-zA-Z]{4,}"
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <AvField
                className='rounded-pill'
                type="text"
                name="city"
                id="exampleCity"
                placeholder="City"
                title="Where you live now"
                pattern="^[[a-zA-Z]{4,}"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input
          className=' mb-5 '
            style={{height:'150px'}}
            type="textarea"
            name="text"
            id="exampleText"
            placeholder="Message.."
            required
          />
        </FormGroup>
        <button className="mt-5 m-auto d-block sec_btn" color="primary">
          Submit
        </button>
      </AvForm>
    </div>
  );
};

export default Contacts;
