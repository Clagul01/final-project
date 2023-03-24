import React from "react";
import { useNavigate } from "react-router";
import "./checkout.css"

export default function Checkout({ setDetails, details }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ details });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDetails({ ...details, [name]: value });
  };

  const navigate = useNavigate();

  const navigateToSummary = () => {
    navigate("/summary");
  };

  return (
    
<div class="checkout-box">
    
      <form
        onSubmit={handleSubmit}
        class="form-horizontal column is-three-fifths
is-offset-one-fifth columns "
      >
        <fieldset class="column is-6">
          <legend><strong>Delivery Information:</strong></legend>

          <div class="field">
            <label class="label is-family-monospace" for="textinput-0">
              Name
            </label>
            <div class="control">
              <input
                id="textinput-0"
                name="name"
                type="text"
                class="input is-family-monospace"
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="field">
            <label class="label is-family-monospace" for="textarea-0">
              Address
            </label>
            <div class="control">
              <textarea
                class="textarea is-family-monospace"
                id="textarea-0"
                name="address"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label is-family-monospace" for="textinput-2">
              Postcode
            </label>
            <div class="control">
              <input
                id="textinput-2"
                name="postcode"
                type="text"
                class="input is-family-monospace"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        <fieldset class="column is-6">
          <legend><strong>Payment details:</strong></legend>

          <div class="field">
            <label class="label is-family-monospace" for="textinput-0">
              Name on Card
            </label>
            <div class="control">
              <input
                id="textinput-0"
                name="cardName"
                type="text"
                class="input is-family-monospace"
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="field">
            <label class="label is-family-monospace" for="textinput-0">
              Card Number
            </label>
            <div class="control">
              <input
                id="textinput-0"
                name="cardNumber"
                type="text"
                class="input is-family-monospace"
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="field">
            <label class="label is-family-monospace" for="textinput-0">
              Expiry Date
            </label>
            <div class="control">
              <input
                id="textinput-0"
                name="expiryDate"
                type="text"
                class="input is-family-monospace"
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="field">
            <label class="label is-family-monospace" for="textinput-2">
              CVC
            </label>
            <div class="control">
              <input
                id="textinput-2"
                name="CVC"
                type="text"
                class="input is-family-monospace"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>
      </form>

      <button
        class="button column is-half
is-offset-one-quarter is-primary"
        onClick={navigateToSummary}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}
