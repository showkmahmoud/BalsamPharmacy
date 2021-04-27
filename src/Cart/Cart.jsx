import './Cart.css'
import React, { useContext } from "react";
import { Table } from "reactstrap";
import { Store } from "../Context/Context";
import { useHistory } from "react-router-dom";

const Cart = ({ user }) => {
    
    let history = useHistory();
    const checkingOut = () => {
        (!user.currentUser) ? (history.push('/SignIn')) : history.push('/Checkout')
    }

    const store = useContext(Store);

    const increaseCart = (documentID) => {
        const data = store.cart.cartItems.map(item => {
            return item.documentID === documentID ? { ...item, quantity: item.quantity + 1 } : item
        })
        store.setCart({
            ...store.cart,
            cartCounter: store.cart.cartCounter + 1,
            cartItems: [...data]
        })
    }


    const decreaseCart = (documentID, quant) => {
        if (quant > 1) {
            const data = store.cart.cartItems.map(item => {
                return item.documentID === documentID ? { ...item, quantity: item.quantity - 1 } : item
            })
            store.setCart({
                ...store.cart,
                cartCounter: store.cart.cartCounter - 1,
                cartItems: [...data]
            })
        }
        else if (quant === 1) {
            const data = store.cart.cartItems.filter(item => item.documentID !== documentID)
            store.setCart({
                ...store.cart,
                cartCounter: store.cart.cartCounter - 1,
                cartItems: [...data]
            })
        }
    }

    const deleteCartItem = (documentID, quant) => {
        const data = store.cart.cartItems.filter(item => item.documentID !== documentID)
        store.setCart({
            ...store.cart,
            cartCounter: store.cart.cartCounter - quant,
            cartItems: [...data]
        })
    }

    const clearCart = () => {
        store.setCart({
            ...store.cart,
            cartCounter: 0,
            cartItems: []
        })
    }

    const renderTableData = () => {
        return store.cart.cartItems.map((product) => {
            const { productName, productImage, productPrice, productCategory, documentID, quantity } = product;
            return (
                <tr className='border-bottom' key={documentID}>
                    <td className='pt-4 '>{productName}</td>
                    <td className='pt-4 '>{productCategory}</td>
                    <td className='pt-4 '> {productPrice} </td>
                    <td className='d-flex pt-4 justify-content-center align-items-center'>
                        <button onClick={() => decreaseCart(documentID, quantity)} className='quantity_btn mb-1'>-</button>
                        <p className='col-4 text-center'> {quantity} </p>
                        <button onClick={() => increaseCart(documentID)} className='quantity_btn mb-1'>+</button>
                    </td>
                    <td>
                        <button onClick={() => deleteCartItem(documentID, quantity)} className='sec_btn mt-2'>Delete</button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className='mt-5 py-5  col-md-12'>
            {store.cart.cartCounter ?
                <div className='container'>
                    <div className='d-flex justify-content-between  my-4'>
                        <h3 className='section_title col-9 col-md-3 col-sm-9'>Your cart :</h3>
                        <button onClick={checkingOut} className="col-5 col-md-3 col-sm-4 btn btn-dark rounded-pill text-light d-block ">Check Out</button>
                    </div>

                    <Table className='text-center '>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>product Price</th>
                                <th className='text-center'>quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData()}
                        </tbody>
                    </Table>
                    <div className='d-flex justify-content-between align-items-center px-5 pt-3 mt-5'>
                        <button onClick={clearCart} className='main_btn col-12 col-md-2 col-sm-4'>clear cart</button>
                        <h5 className=' text-right col-12 col-md-4 col-sm-4'>
                            Total cost =  <span style={{color:'var(--price-color)'}}>${store.cart.cartItems.reduce((prev, item) => {
                            return prev + (item.quantity * item.productPrice)
                        }, 0)}</span>

                        </h5>
                    </div>
                </div>
                : <div><h3 className='section_title py-5'>Your cart is empty</h3></div>}
        </div>
    )




};

export default Cart;