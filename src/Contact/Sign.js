import React from "react";
import "./Form.css";



class Sign extends React.Component{


  render() {
  return (
    <div className="form" id="dis">
      <h3>Sing In</h3>
    <div>
      <h6>Login</h6>
      <input
            type="text"
            id="text"
            placeholder="Pseudo"
            required
            onChange={this.props.setIdentity1}
          />
    </div>
    <div>
      <h6>Pass Word</h6>
      <input
            type="text"
            id="text"
            placeholder="*******"
            required
            minLength="8"
            onChange={this.props.setIdentity3}
          />
    </div>
    <div>
      <button class="Send-btn" type="button">
        Send
      </button>
    </div>
    </div>
    
  );
}
}
export default Sign;
