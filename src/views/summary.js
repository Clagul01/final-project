import React from 'react';
import { useNavigate } from 'react-router';

export default function Summary({details, basket}) {
    const navigate = useNavigate();
    const basketArray = basket;
    function navigateToComplete() {
        navigate('/orderComplete');
    }
    const calculateTotal = () => {
        return basket.reduce((total, product) => (total) + (product.price), 0);
    };
    return(
        <>
        <section class="hero is-warning is-medium is-family-monospace">
        <div class= "card columns m-0 is-align-content-stretch block">
                <div class="column is-one-twelf has-padding-frame" style={{width: 165 + "px", height: 165 + "px", margin: 0}}>
                <div>
                    <div class="card-content columns">
                        <div class="content column">
                            <h6 class="title">Please Check Your Details:</h6>
                            <p class="subtitle">{details.name}</p>
                            <p class="subtitle is-size-6">{details.address}</p>
                            <p class="subtitle is-size-6">{details.postcode}</p>
                            <p>Name of Account Holder: {details.cardName}</p>
                            <p>Card Number: {details.cardNumber}</p>
                            <p>Expiry Date: {details.expiryDate}</p>
                            <p>CVC: ***</p>
                        </div>
                        <div class="content column">
                        <h6 class="title">Order Summary:</h6>
                            { basketArray.map((index) => (
                                <li key={index}>
                                {<span>{index.name}</span>} {"  =  £"} {<span>{index.price}</span>}
                                </li>
                            ))}
                            <hr/>
                            <p>Total to be paid: £{calculateTotal()}</p>
                        </div>
                </div>
                <footer class="card-footer">
                    <button onClick={navigateToComplete} class="button is-danger card-footer-item">Complete Order</button>
                </footer>
            </div>
            </div>
            ))
        </div>
        </section>
        
    </>
    )
    
}