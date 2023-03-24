import "./App.css";
import Home from "./views/home";
import Order, { ProductList } from "./views/order";
import Basket from "./views/basket";
import Checkout from "./views/checkout";
import MainLogo from "./utils/kaffet-logo.PNG";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Summary from "./views/summary";
import OrderComplete from "./views/orderComplete";

function Navbar() {
  return (
    <>
      <section class="hero is-success is-fullheight">
        {/*Hero head: will stick at the top*/}
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <div class="navbar-item">
                  <figure class="image is-square is-128x128">
                    <Link to="/home">
                      <img
                        src={MainLogo}
                        alt="Logo"
                        style={{ maxWidth: 400 + "px", maxHeight: 400 + "px" }}
                      />
                    </Link>
                  </figure>
                </div>
                <span class="navbar-burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                  <Link to="/home" class="navbar-item is-family-monospace">
                    Home
                  </Link>
                  <Link to="/order" class="navbar-item is-family-monospace">
                    Order
                  </Link>
                  <span class="navbar-item">
                    <div class="button navbar-basket is-primary is-family-monospace">
                      <Link to="/basket">Basket</Link>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Hero content: will be in the middle */}
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">
              As Gord Downie once said, life's too short for bad coffee.
            </p>
            <p class="title">
              Start your day the right way with a cup of our delicious coffee -
              it's like a warm hug in a mug!"
            </p>
          </div>
        </div>

        
        <Outlet />
      </section>
    </>
  );
}

function App() {
  const [basket, setBasket] = useState([]);
  const [details, setDetails] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/home" element={<Home />} />
        <Route
          path="/order"
          element={<Order setBasket={setBasket} basket={basket} />}
        />
        <Route path="/basket" element={<Basket basket={basket} />} />
        <Route
          path="/checkout"
          element={<Checkout setDetails={setDetails} details={details} />}
        />
        <Route
          path="/summary"
          element={<Summary details={details} basket={basket} />}
        />
        <Route
          path="/orderComplete"
          element={<OrderComplete details={details} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
