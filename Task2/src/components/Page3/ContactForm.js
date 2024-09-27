import React, { useState } from "react";
import '../../CSS/Page3/ContactForm.css'; 

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (name === "") {
      formErrors.name = "Please enter your name!";
      isValid = false;
    } else if (name.length <= 1 || name.length >= 50) {
      formErrors.name = "Name must be between 2 and 50 characters!";
      isValid = false;
    }

    if (email === "") {
      formErrors.email = "Please enter your email!";
      isValid = false;
    } else if (email.split("&").length > 1) {
      formErrors.email = "Incorrect email!";
      isValid = false;
    }

    if (message === "") {
      formErrors.message = "Please enter a message!";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("All correct!");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="contact-input"
      />
      {errors.name && <div id="name-error" className="error-message">{errors.name}</div>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="contact-input"
      />
      {errors.email && <div id="email-error" className="error-message">{errors.email}</div>}

      <textarea
        name="message"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="contact-textarea"
      />
      {errors.message && <div id="message-error" className="error-message">{errors.message}</div>}

      <button type="submit" className="contact-button">SEND MESSAGE</button>
    </form>
  );
};

export default ContactForm;
