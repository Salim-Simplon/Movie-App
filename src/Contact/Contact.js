import React from "react";
import Form from "./Form";
import Sign from './Sign';
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact-page">
      <div className="Contact">
        <Form />
        <Sign />
      </div>
    </div>
  );
}
export default Contact;
