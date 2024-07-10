import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/; // Assuming a 10-digit phone number
    return re.test(String(phone));
  };

  const validateNIC = (nic) => {
    const re = /^[0-9]{9}[vVxX]$/; // Assuming NIC format is 9 digits followed by a letter
    return re.test(String(nic));
  };

  const handleMessage = async (e) => {
    e.preventDefault();

    // Validation check
    if (!firstName || !lastName || !email || !phone || !message) {
      alert("Please fill out all fields before submitting the form.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!validateNIC(nic)) { // Assuming NIC is part of your form data
      alert("Please enter a valid NIC.");
      return;
    }

    try {
      await axios
        .post(
          "https://backendhos.onrender.com/api/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container form-component message-form">
      <h2>Send Us A Message</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-field"
          />
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea-field"
        />
        <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Send</button>
          </div>
      </form>
      <img src="/Vector.png" alt="vector" className="vector-image" />
    </div>
  );
};

export default MessageForm;
