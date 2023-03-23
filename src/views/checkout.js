import React, { state } from "react";

export default function Checkout({setDetails, details}) {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({details});
      };
    
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDetails({ ...details, [name]: value });
      };
    
    return(
        <div>
            <form onSubmit={handleSubmit} class="form-horizontal column is-three-fifths
is-offset-one-fifth " >
<fieldset>


<legend>Delivery Information:</legend>


<div class="field">
  <label class="label" for="textinput-0">Name</label>
  <div class="control">
    <input id="textinput-0" name="name" type="text" class="input" onChange={handleChange}/>
  </div>
</div>


<div class="field">
  <label class="label" for="textarea-0">Address</label>
  <div class="control">                     
    <textarea class="textarea" id="textarea-0" name="address" onChange={handleChange}></textarea>
  </div>
</div>


<div class="field">
  <label class="label" for="textinput-2">Postcode</label>
  <div class="control">
    <input id="textinput-2" name="postcode" type="text" class="input" onChange={handleChange}/>
   
  </div>
</div>

<input class="input is-primary" type="submit" value="Sumbit"/>

</fieldset>
</form>

        </div>
    )
};