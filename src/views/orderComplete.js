import React from 'react';

export default function OrderComplete({details}) {
        return(
            <>
            <section class="hero is-danger is-large">
  <div class="hero-body columns">
    <p class="title column is-family-monospace">
      {details.name}, thank you for your order! <br/>
We hope you enjoy your coffee :)
    </p>
          
    <p class="subtitle column">
      Please follow us on: <span><a href="https://github.com/Clagul01/final-project">Github</a></span><br/>
    <a href="https://bulma.io">
  <img
    src="https://bulma.io/images/made-with-bulma.png"
    alt="Made with Bulma"
    width="128"
    height="24"/>
</a>
    
    </p> 
  
  </div>
</section>
</>
        )
}