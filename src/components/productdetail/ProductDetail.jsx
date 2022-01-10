import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShowProductDetail from "./ShowProductDetail";
import {
  fetchProduct,
  removeSelectedProducts,
} from "../../redux/actions/Productactions";
import "../../styles/cart.css";
import Loading from "../loading/Loading";

const ProductDetail = () => {
  const loading = useSelector((state) => state.product.loading);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);
  return (
    <div className="container">
      <div className="card cart-down">
        <div className="row">
          {loading ? <Loading /> : <ShowProductDetail />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
