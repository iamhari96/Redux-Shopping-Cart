import React from 'react'
import cart from '../../images/cart.jpg'
const Home = () => {
    return (
        <div className="card bg-dark">
            <img src={cart} alt="cart" className="card-img-top cart-img" height="630px" />
            <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <div className="container">
                <h5 className="card-title display-3 fw-bold text-white ">Shop Now and get your order delivered at your door step</h5>
                </div>
            </div>
        </div>
    )
}

export default Home
