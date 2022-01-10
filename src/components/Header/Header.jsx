import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.allProducts.cart);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => (count += item.qty));
    localStorage.setItem("cartitems", setCount(count));
  }, [cart, count]);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-white navbar-dark shadow-sm py-3 fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Shopping-Cart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/productlisting" className="nav-link">
                  Products
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/cart" className="btn btn-outline-light">
                <i className="fas fa-shopping-cart"></i>Cart ({count})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
