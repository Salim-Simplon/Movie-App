import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form">
      <div>
        <h6>Name</h6>
        <input type="text" name="Name" placeholder="Name" required />
      </div>
      <div>
        <h6>Email</h6>
        <input
          type="text"
          name="Name"
          placeholder="example@mail.com"
          required
          minLength="6"
        />
      </div>
      <div>
        <h6>Pass Word</h6>
        <input type="text" name="Name" placeholder="*******" required />
      </div>
      <div>
        <button class="Send-btn" type="button">
          Send
        </button>
      </div>
    </div>
  );
}
export default Form;
