import React from "react";


const drinksList = [
    {bev: "Americano", price: "2.50", imgURL: "https://upload.wikimedia.org/wikipedia/commons/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg"},
    {bev: "Flat White", price: "3.00", imgURL: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg"},
    {bev: "Latte", price: "3.00", imgURL: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg"},
    {bev: "Mocha", price: "3.50", imgURL: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Mocha_coffee.jpg"},
    {bev: "Espresso", price: "2.00", imgURL: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg"},
    {bev: "Macchiato", price: "2.50", imgURL: "https://thelittlestcrumb.com/wp-content/uploads/espresso-macchiato-featured-image-1.jpg"},
    {bev: "Chai Latte", price: "3.00", imgURL: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chai-latte-4e5fe2f.jpg"}
]

function DrinksItem({setBasket, basket}) {
    function handleClick(name, price) {
        setBasket([...basket, {name, price: (price - 0)}]);
       // console.log(basket);
    }
    return(
        <>
            <div class= "card columns m-0 is-align-content-stretch block">
                {drinksList.map((index) => (
                    <div class="column is-one-twelf has-padding-frame" style={{width: 165 + "px", height: 165 + "px", margin: 0}}>
                    <div key={index}>
                        <div class="card-image">
                            <figure class="image" >
                                <img class="is-rounded" src={index.imgURL} alt={index.bev} style={{width: 150 + "px", height: 150 + "px"}}/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h6 class="title">{index.bev}</h6>
                                <p class="subtitle">£{index.price}</p>
                            </div>
                    </div>
                    <footer class="card-footer">
                        <button onClick={() => handleClick(index.bev, index.price)} class="button is-danger card-footer-item">Add to basket</button>
                    </footer>
                </div>
                </div>
                ))};
            </div>
            
        </>
    )  

};

export function ProductList({basket}) {


    const calculateTotal = () => {
        return basket.reduce((total, product) => (total) + (product.price), 0);
    };
        
    return(

    <div className="basket-container">
    <h2>Basket:</h2>
    <ul className="basket">
      {basket.map((product, index) => (
        <li key={index}>
        <p>{console.log(product)}</p>
          <p>{product.name}</p>
          <p>£{product.price}</p> 
        </li>
      ))}
      {basket.length === 0 && <p>Your basket is empty.</p>}
      {basket.length > 0 && (
        <>
          <li>
            <p>Total:</p>
            <p>£{calculateTotal()}</p>
          </li>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{ marginTop: "1rem" }}>Checkout</button>
        </>
      )}
    </ul>
  

  </div>
   
    );
};  


export default function Order({setBasket, basket}) {
    return(
        <div>
            <section class="section is-medium">
            <DrinksItem setBasket={setBasket} basket={basket}/>
            </section>
        </div>
    )
}