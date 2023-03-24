import React from "react";
import MainLogo from "../utils/kaffet-logo.PNG"
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const navigateToOrder = () => {
    
    navigate('/order')
};

return(
  <section class="hero is-medium is-warning">
  <div class="hero-body columns">
  <figure class="image column is-3" >
  <img class="" src={MainLogo} alt="{index.bev}" style={{width: 300 + "px", height: 300 + "px"}}/>
  </figure>
    <p class="title column is-9 is-family-monospace">
      Kaf-Fet (<i>Kah-Feht</i>):
      <hr/>
     <p class="subtitile is-family-sans-serif is-size-5">
      Coffee direct to your door, 24/7 365 days a year. <br/>
      Get your fix today!
    </p>
    <hr/>
    <span><button onClick={navigateToOrder}class="button is-danger">Order Now</button></span>    <span><button class="button is-primary"><a href="https://github.com/Clagul01/final-project">Discover More About Us</a></button></span>

    </p>
   
  </div>
</section>
);
}