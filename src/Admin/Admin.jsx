import React, { useState, useEffect } from "react";
import "./Admin.css";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import {
  handleAddProduct,
  handleFetchProducts,
  handleDeleteProduct,
} from "../firebase/product";
import MainBtn from "../ProjectBtns/MainBtn";

const Admin = () => {
  const initialValue = {
    productCategory: "",
    productName: "",
    productImage: "",
    productPrice: 0,
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [productData, setProductData] = useState(initialValue);
  const {
    productCategory,
    productName,
    productImage,
    productPrice,
  } = productData;
  const [products, setProducts] = useState([]);

  const handleFormChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    handleAddProduct({
      productCategory,
      productName,
      productImage,
      productPrice,
      createdDate: date,
    });
    setModal(!modal);
  };

  useEffect(async () => {
    const data = await handleFetchProducts();
    setProducts(data);
  }, [products]);

  return (
    <div className="admin_page py-3">
      <div className="container   " style={{ marginTop: "90px" }}>
        <button className='sec_btn d-block m-auto'  onClick={toggle}>
          Add Product
        </button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}> Add Product </ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Product Categories </Label>
                <Input
                  type="select"
                  onClick={handleFormChange}
                  name="productCategory"
                >
                  <option name="Skin Care"> Skin Care </option>
                  <option name="Child Care"> Child Care </option>
                  <option name="Medicaments"> Medicaments </option>
                  <option name="Hair Care"> Hair Care </option>
                  <option name="Covid Products"> Covid Products </option>
                  <option name="Fitness"> Fitness </option>
                  <option name="Accrssory"> Accrssory </option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Product Name </Label>
                <Input
                  type="text"
                  name="productName"
                  onChange={handleFormChange}
                  value={productName}
                />
              </FormGroup>
              <FormGroup>
                <Label>Main Image </Label>
                <Input
                  type="url"
                  name="productImage"
                  onChange={handleFormChange}
                  value={productImage}
                />
              </FormGroup>
              <FormGroup>
                <Label> Product Price </Label>
                <Input
                  type="number"
                  name="productPrice"
                  onChange={handleFormChange}
                  value={productPrice}
                />
              </FormGroup>
              <Button className="w-100" type="submit">
                Add Product{" "}
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        <div className="container">
          <div className="row justify-content-center mt-5  mb-5 ">
            {products.map((product) => {
              const {
                productName,
                productImage,
                productPrice,
                productCategory,
                documentID,
              } = product;
              return (
                <div
                  key={documentID}
                  className="border mb-4 mx-3 p-4 card admin_card  bg-white col-9 col-sm-6 col-md-3 "
                >
                  <div className="admin_card_img">
                    <img
                      className="d-block img-fluid w-100"
                      src={productImage}
                    />
                  </div>
                  <div className="admin_card_info text-center mb-4 w-100">
                    <h5
                      style={{ color: "var(--blogs-title)" }}
                      className="text-center py-1"
                    >
                     
                      {productName}
                    </h5>
                    <h6>
                      <p className="d-inline text-muted  py-1 ">{productCategory}</p>
                    </h6>
                    <p
                      className="d-inline admin_card_info_price  py-1 "
                      style={{
                        marginBottom: "50px",
                        color: "var(--price-color)",
                      }}
                    >
                      <span>$</span> {productPrice}
                    </p>
                  </div>
                  <button
                    className="main_btn text-center  m-auto"
                    onClick={() => handleDeleteProduct(documentID)}
                  >
                    Delete{" "}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
