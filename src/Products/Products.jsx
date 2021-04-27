import React, { useEffect, useState, useContext } from "react";
import "./Products.css";
import classnames from "classnames";
import { handleFetchProducts, handleFilterProducts } from "../firebase/product";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Store } from "../Context/Context";
import { Link } from "react-router-dom";

const Products = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const store = useContext(Store);

  useEffect(async () => {
    const data = await handleFetchProducts();
    setProducts(data);
  }, []);

  const categories = [
    "Skin Care",
    "Child Care",
    "Medicaments",
    "Hair Care",
    "Covid Products",
    "Fitness",
    "Accrssory",
  ];

  const handleFilter = async (index, category) => {
    toggle(index);
    const data = await handleFilterProducts(category);
    setFilteredProducts(data);
  };

  const handleAddToCart = (product, documentID) => {
    const itemIndex = store.cart.cartItems.findIndex(
      (item) => item.documentID === documentID
    );
    console.log(itemIndex);
    if (itemIndex === -1) {
      store.setCart({
        ...store.cart,
        cartCounter: store.cart.cartCounter + 1,
        cartItems: [...store.cart.cartItems, { ...product, quantity: 1 }],
      });
    } else {
      const data = store.cart.cartItems.map((item) => {
        return item.documentID === documentID
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      store.setCart({
        ...store.cart,
        cartCounter: store.cart.cartCounter + 1,
        cartItems: [...data],
      });
    }
  };

  return (
    <div className="product_section py-1">
      <div className="container" id="Products">
        <h2 className="section_title pt-2 mb-3 mt-5 ml-3">Products</h2>
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => toggle("1")}
              >
                {" "}
                All
              </NavLink>
            </NavItem>
            {categories.map((category, index) => {
              const newIndex = (index + 2).toString();
              return (
                <NavItem key={index}>
                  <NavLink
                    className={classnames({
                      active: activeTab === { newIndex },
                    })}
                    onClick={() => handleFilter(newIndex, category)}
                  >
                    {" "}
                    {category}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>

          <TabContent activeTab={activeTab} className="mt-4">
            <TabPane tabId="1">
              <div className="row justify-content-center">
                {products &&
                  products.length > 0 &&
                  products.map((product) => {
                    const {
                      productName,
                      productImage,
                      productPrice,
                      productCategory,
                      documentID,
                    } = product;
                    return (
                      <div
                        md={4}
                        key={documentID}
                        className="bg-white product_card card pb-2 px-2 mt-1 mb-3 mx-4 col-9 col-sm-6 col-md-3"
                      >
                        <div className="product_card_img">
                          <Link to={`/Products/${documentID}`}>
                            <img
                              className="d-block img-fluid"
                              src={productImage}
                            />
                          </Link>
                        </div>
                        <div className="product_card_footer px-2 py-1 ">
                          <div className="product_card_footer_title pl-3 my-2">
                            <Link
                              className="product_card_footer_title_name"
                              to={`/Products/${documentID}`}
                            >
                              <h5 className="text-decoration-none  ">
                                {productName}
                              </h5>
                            </Link>
                            <h6 className=""> {productCategory}</h6>
                          </div>

                          <div className="product_card_footer_btn pl-3 pt-1 pb-2 row no-gutters justify-content-between">
                            <h6 className="price pt-2 ">$ {productPrice}</h6>
                            <button
                              className="add_to_cart_btn mr-3 text-center"
                              onClick={() =>
                                handleAddToCart(product, documentID)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </TabPane>

            {categories.map((category, index) => {
              const newIndex = (index + 2).toString();
              return (
                <TabPane key={index} tabId={newIndex}>
                  <div className="row justify-content-center">
                    {filteredProducts &&
                      filteredProducts.length > 0 &&
                      filteredProducts.map((product) => {
                        const {
                          productName,
                          productImage,
                          productPrice,
                          productCategory,
                          documentID,
                        } = product;
                        return (
                          <div
                          md={4}
                          key={documentID}
                          className="bg-white product_card card pb-2 px-2 mt-1 mb-3 mx-4 col-9 col-sm-6 col-md-3"
                        >
                          <div className="product_card_img">
                            <Link to={`/Products/${documentID}`}>
                              <img
                                className="d-block img-fluid"
                                src={productImage}
                              />
                            </Link>
                          </div>
                          <div className="product_card_footer px-2 py-1 ">
                            <div className="product_card_footer_title pl-3 my-2">
                              <Link
                                className="product_card_footer_title_name"
                                to={`/Products/${documentID}`}
                              >
                                <h5 className="text-decoration-none  ">
                                  {productName}
                                </h5>
                              </Link>
                              <h6 className=""> {productCategory}</h6>
                            </div>
  
                            <div className="product_card_footer_btn pl-3 pt-1 pb-2 row no-gutters justify-content-between">
                              <h6 className="price pt-2 ">$ {productPrice}</h6>
                              <button
                                className="add_to_cart_btn mr-3 text-center"
                                onClick={() =>
                                  handleAddToCart(product, documentID)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        );
                      })}
                  </div>
                </TabPane>
              );
            })}
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default Products;
