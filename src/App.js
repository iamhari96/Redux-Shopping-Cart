import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ProductListing from "./components/productlisting/ProductListing";
import ProductDetail from "./components/productdetail/ProductDetail";
import Cart from "./components/cart/Cart";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productlisting" component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
