import React from "react";
import "./Form.css";

/*
localStorage.setItem("age", "30");
localStorage.setItem("name", "salim");
console.log(localStorage.key(1));
*/

/*
const inpLogin = document.getElementById("inpLogin");
const inpMail = document.getElementById("inpMail");
const inpPass = document.getElementById("inpPass");
const btnLo = document.getElementById("btnLo");

btnLo.onclick = function(){
  const key = inpLogin.value;
  const mail = inpMail.value;
  const pass = inpPass.value;

  console.log(key)
  console.log(mail)
  console.log(pass)
}
*/

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <h3>Sing Up</h3>
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
          <h6>Email</h6>
          <input
            type="text"
            id="text"
            placeholder="example@mail.com"
            required
            onChange={this.props.setIdentity2}
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
          <button class="Send-btn" type="button" id="btnLo">
            Send
          </button>
        </div>
      </div>
    );
  }
}
export default Form;
