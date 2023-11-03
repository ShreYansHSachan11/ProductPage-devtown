import React, { useRef, useEffect } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
 
  {
    path: "cart",
    display: "Cart",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);
  const navigate = useNavigate();
  

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigateToCart = () => {
    navigate("/cart");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  const handleHeart = () => {
    toast.success("Feature coming soon");
  };
  const stickyHeaderFun = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
 
  useEffect(() => {
    stickyHeaderFun();

    return () => document.removeEventListener("scroll", stickyHeaderFun);
  });
  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };

  const toggleProfileActions = () => {
    profileActionRef.current.style.display = "flex";
    // console.log(profileActionRef.current.style.display);
    // console.log(document.querySelector(".profile__actions").style.display);
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo" onClick={navigateToHome}>
              <img src={"https://assets-global.website-files.com/6077f96cf4fa19216396daaf/63f36981950c481a7701e95f_logo-p-500.png"} alt="logo" />
              <div>
               
               
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
              
              </ul>
            </div>
            <div className="nav__icons">
             
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
             
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
