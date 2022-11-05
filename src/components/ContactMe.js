import React from "react";
import "../styles/contactme.css";
import Navigation from "./Navigation";

function ContactMe() {
  return (
    <div id="contactme-container">
      <Navigation />
      <div id="contactme-content">
        <h1>Contact Me</h1>
        <form>
          <div className="info-wrapper">
            <label for="name">Name</label>
            <input placeholder="John Paul" id="name" type="text" />
          </div>
          <div className="info-wrapper">
            <label for="email">Email Address</label>
            <input placeholder="johnpaul@gmail.com" id="email" type="email" />
          </div>
          <div className="info-wrapper">
            <label for="tel">Phone number</label>
            <input placeholder="08034455566" id="tel" type="tel" />
          </div>
          <div className="info-wrapper">
            <label for="message">Message</label>
            <textarea placeholder="Hello" id="message" type="text"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
