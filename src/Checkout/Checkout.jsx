import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Col, Row, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import "./Checkout.css";
import { Store } from "../Context/Context";
import { handlePlaceOrder } from "../firebase/order";

export const Checkout = ({ user }) => {
  let history = useHistory();
  const store = useContext(Store);

  useEffect(() => {
    !user.currentUser && history.push("/Home");
  }, []);

  const initialValue = {
    recipientName: "",
    line1: "",
    line2: "",
    city: "",
    prescription: "",
  };

  const [formData, setFormData] = useState(initialValue);
  const { recipientName, line1, line2, city, prescription } = formData;

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (recipientName && line1 && line2 && city) {
      await handlePlaceOrder(
        formData,
        user.currentUser.id,
        store.cart.cartItems
      );
      history.push("/OrderSuccess");
      store.setCart({
        ...store.cart,
        cartCounter: 0,
        cartItems: [],
      });
    }
  };

  return (
    <div className="container my-5 pt-2">
      <Row>
        <Col md={8}>
          <AvForm className="container" onSubmit={handleFormSubmit}>
            <h2 className="payment_header section_sub_title  my-5">
              {" "}
              Shipping Address{" "}
            </h2>
            <FormGroup>
              <AvField
                className="rounded-pill"
                value={recipientName}
                name="recipientName"
                required
                onChange={handleFormChange}
                type="text"
                placeholder="Recipient Name"
              />
              <AvField
                className="rounded-pill"
                value={line1}
                name="line1"
                required
                onChange={handleFormChange}
                type="text"
                placeholder="line 1"
              />
              <AvField
                className="rounded-pill"
                value={line2}
                name="line2"
                required
                onChange={handleFormChange}
                type="text"
                placeholder="line 2"
              />
              <AvField
                className="rounded-pill"
                value={city}
                name="city"
                required
                onChange={handleFormChange}
                type="text"
                placeholder="City"
              />
              <label className="mb-3 text-muted font-weight-bold">
                Attach your prescription
              </label>
              <AvField
                value={prescription}
                onChange={handleFormChange}
                className="choose mb-5"
                type="file"
                name="prescription"
              />
            </FormGroup>
                <button className=" mx-auto d-block sec_btn" type="submit">
                      Place Order
                </button>
          </AvForm>
        </Col>
        <Col md={4}>
          {
            <div>
              {store.cart.cartCounter ? (
                <div>
                  <h2 className="payment_header section_sub_title  my-5">
                    {" "}
                    Card Details{" "}
                  </h2>
                  <ListGroup flush>
                    {store.cart.cartItems.map((item) => {
                      const {
                        productName,
                        productImage,
                        productPrice,
                        productCategory,
                        documentID,
                        quantity,
                      } = item;
                      return (
                        <ListGroupItem>
                          {productName} × {quantity}
                        </ListGroupItem>
                      );
                    })}
                    <ListGroupItem className="font-weight-bold">
                      Total cost ={" "}
                      <span style={{ color: "var(--price-color)" }}>
                        $
                        {store.cart.cartItems.reduce((prev, item) => {
                          return prev + item.quantity * item.productPrice;
                        }, 0)}
                      </span>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              ) : null}
            </div>
          }
        </Col>
        
      </Row>
    </div>
  );
};
