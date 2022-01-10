import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";

const ShowProducts = () => {
  const products = useSelector((state) => state.allProducts.product);

  return (
    <>
      {products.map((product) => {
        return (
          <div className="col-md-3 mb-4">
            {<Loading /> && (
              <div className="card h-100 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  className="card-img-top"
                  height="250px"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ShowProducts;
