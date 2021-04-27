import React, { useEffect, useState, useContext } from "react";

import { handleFetchProduct } from "../firebase/product";
import { Store } from "../Context/Context";

import "./ProductDetails.css";
const ProductDetails = ({ match }) => {
  const [productItem, setProductItem] = useState({});
  const {
    productName,
    productImage,
    productPrice,
    productCategory,
    documentID,
  } = productItem;
  const store = useContext(Store);
  const handleProductItem = async (productId) => {
    productId = match?.params?.documentID;
    const dataItem = await handleFetchProduct(productId);
    setProductItem(dataItem);
  };

  useEffect(() => {
    handleProductItem();
  }, []);
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
    <div className="container product_details text-left mt-5 pt-5">
      <h2 className="section_title">Product Details </h2>
      <div
        md={4}
        key={documentID}
        className="bg-white product_card card pb-2 px-2 mx-auto my-5  col-9 col-sm-6 col-md-4"
      >
        <div className="product_card_img">
          <img className="d-block img-fluid" src={productImage} />
        </div>
        <div className="product_card_footer px-2 py-1 ">
          <div className="product_card_footer_title pl-3 my-2">
            <div className="product_card_footer_title_name">
              <h5 className="text-decoration-none  ">{productName}</h5>
            </div>
            <h6 className=""> {productCategory}</h6>
          </div>
          <div className="product_card_footer_btn pl-3 pt-1 pb-2 row no-gutters justify-content-between">
            <h6 className="price pt-2 ">$ {productPrice}</h6>
            <button
              onClick={() => handleAddToCart(productItem, documentID)}
              className="add_to_cart_btn mr-3 text-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
