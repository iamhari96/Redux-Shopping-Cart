import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Cartitem from "./Cartitem";
import "../../styles/cart.css";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalItems, totalPrice, setTotalPrice, setTotalItems]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {cart.map((item) => (
              <Cartitem key={item.id} itemData={item} />
            ))}
          </div>
          <div className="col-md-6 cart-down">
            <div className="card m-3">
              <div className="card-body">
                <h1>Total: ({totalItems} items)</h1>
                <p className="display-6">$ {totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.allProducts.cart,
  };
};
export default connect(mapStateToProps)(Cart);
