import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

import {
  Collapse,
  Navbar,
  Form,
  Button,
  Input,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";
import { FaUserCircle } from 'react-icons/fa';
import { MdAddShoppingCart, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { auth } from "./../firebase/config";
import { firestore } from "../firebase/config";
import { Store } from "../Context/Context";

const Navbari = ({ user }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [adminData, setAdminData] = useState("");
  const location = useLocation();
  const store = useContext(Store);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const Toggle = () => setDropdownOpen((prevState) => !prevState);
  const [name, setName] = useState("");
  useEffect(async () => {
    if (user.currentUser) {
      const userInfo = await firestore
        .doc(`users/${user.currentUser.id}`)
        .get();
      setName(userInfo.data().displayName);
      viewAdmin();
    }
  }, [user]);

  const viewAdmin = async () => {
    const doc = await firestore
      .collection("users")
      .doc(user.currentUser.id)
      .get();
    setAdminData(doc.data());
  };

  return (
    <div>
      <Navbar color="faded" light expand="md" className="fixed-top navbar">
        <Nav className="container d-flex justify-content-around">
          <NavbarBrand className="navbar_brand py-md-0 py-2 col-5 col-md-1">
            <Link to="/">
              <img />
              <span className='navbar_brand_letter mr-1'>B </span> alsam
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto col-md-7 " navbar>
              <Nav className="w-100 d-flex  justify-content-around p-0 mt-0">
                <NavItem>
                  <Link to="/Home">
                    <NavLink className="navbar_items">Home</NavLink>
                  </Link>
                </NavItem>
                {(location.pathname === "/Home" ||
                  location.pathname === "/") && (
                  <NavItem>
                    <HashLink smooth to="#Products">
                      <NavLink className="navbar_items">Products</NavLink>
                    </HashLink>
                  </NavItem>
                )}
                <NavItem>
                  <Link to="Checkout">
                    <NavLink className="navbar_items">
                      Order Prescription
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="About">
                    <NavLink className="navbar_items">About us</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/Contacts">
                    <NavLink className="navbar_items">Contacts</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </Nav>

            <Nav  className = 'd-flex '>
              {user.currentUser && ( ///////////////////
                <Dropdown className='mt-3' isOpen={dropdownOpen} toggle={Toggle}>
                  <DropdownToggle caret>
                    <FaUserCircle className="cartIcon mr-2" />
                    <span>{name}</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    {user.currentUser &&
                      adminData &&
                      adminData.userRoles.includes("admin") && (
                        <Link to="/admin">
                          <DropdownItem >Manage Products</DropdownItem>
                        </Link>
                      )}

                    <Link to="/OrdersHistory">
                      <DropdownItem>Orders History</DropdownItem>
                    </Link>

                    <DropdownItem  onClick={() => auth.signOut()}>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              )}

              {!user.currentUser && (
                <NavItem>
                  <Link to="/SignIn">
                    <NavLink className='navbar_items'> Sign in </NavLink>
                  </Link>
                </NavItem>
              )}

              <NavItem>
                <Link to="/Cart">
                  <NavLink>
                    <MdAddShoppingCart className="cartIcon navbar_items" />
                    <span className="pl-1 navbar_items">{store.cart.cartCounter}</span>
                  </NavLink>
                </Link>
              </NavItem>
            
            </Nav>
          </Collapse>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navbari;
