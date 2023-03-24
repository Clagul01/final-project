import React from 'react';

export default function OrderComplete({details}) {
        return(
            <>
            <section class="hero is-danger">
  <div class="hero-body colums">
    <p class="title column">
      {details.name}, thank you for your order! We hope you enjoy your coffee :)
    </p>
    <p class="subtitle column">
      Please follow us on: <span><a href="https://github.com/Clagul01/final-project">Github</a></span>
    </p>
  </div>
</section>
</>
        )
}