import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
    { id: 2, day: "Tuesday", time: "12:00 PM - 12:00 AM" },
    { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { id: 5, day: "Friday", time: "3:00 PM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 3:00 PM" },
  ];

  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img src="/logo2.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/appointment">Appointment</Link>
              <Link to="/about">About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>
                1012-45454 <br />
                0560-45641
              </span>
            </div>
            <div>
              <MdEmail />
              <span>himinli@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>kochi, India</span>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3422212412987!2d75.78041!3d10.85052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65d3f0c000001!2sKochi%2C%20India!5e0!3m2!1sen!2sus!4v1626236422146!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </>
  );
};

export default Footer;
