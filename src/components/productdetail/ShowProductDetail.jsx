import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../redux/actions/Productactions";

const ShowProductDetail = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(product);

  return (
    <>
      <div className="col-md-6 mt-5">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid m-5"
          height="340px"
          width="340px"
        />
      </div>
      <div className="col-md-6 mt-5">
        <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead">
          Rating {product.rating && product.rating.rate}
          <i className="fas fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
        <p className="lead">{product.description}</p>
        <button
          onClick={() => dispatch(addtocart(product.id))}
          className="btn btn-outline-dark m-3 px-4 py-2"
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ShowProductDetail;
