import React, { useState } from "react";
import { connect } from "react-redux";
import { adjustqty, deletefromcart } from "../../redux/actions/Productactions";

const Cartitem = ({ itemData, deletefromcart, adjustqty }) => {
  const [input, setInput] = useState(itemData.qty);

  const handleChange = (e) => {
    setInput(e.target.value);
    adjustqty(itemData.id, e.target.value);
  };
  return (
    <div className="container">
      <br />
      <br />
      <div className="card w-100 mt-5">
        <img
          src={itemData.image}
          alt={itemData.title}
          className="m-5"
          height="240px"
          width="240px"
        />
        <div className="card-body">
          <h4 className="text-uppercase text-black-50">{itemData.category}</h4>
          <h1 className="display-5">{itemData.title}</h1>
          <p className="lead">
            Rating {itemData.rating && itemData.rating.rate}
            <i className="fas fa-star"></i>
          </p>
          <label htmlFor="qty">Qty</label>
          <input
            type="number"
            min="1"
            id="qty"
            name="qty"
            value={input}
            onChange={handleChange}
          />
          <h3 className="display-6 fw-bold my-4">$ {itemData.price}</h3>
          <p className="lead">{itemData.description}</p>
          <button
            onClick={() => deletefromcart(itemData.id)}
            className="btn btn-outline-danger m-3"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => {
  return {
    deletefromcart: (id) => dispatch(deletefromcart(id)),
    adjustqty: (id, value) => dispatch(adjustqty(id, value)),
  };
};

export default connect(null, mapDispatchToprops)(Cartitem);
