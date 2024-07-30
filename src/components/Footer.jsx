import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
    { id: 2, day: "Tuesday", time: "12:00 PM - 12:00 AM" },
    { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { id: 5, day: "Friday", time: "3:00 PM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 3:00 PM" },
  ];

  const footerStyle = {
    textAlign: "center",
    padding: "20px 0",
    backgroundColor: "#282c34",
    color: "#fff",
  };

  const hrStyle = {
    border: "1px solid #fff",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-around",
    padding: "20px 0",
  };

  const sectionStyle = {
    flex: 1,
    margin: "10px 0",
  };

  const ulStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const liStyle = {
    margin: "5px 0",
  };

  const linkStyle = {
    color: "#61dafb",
    textDecoration: "none",
  };

  const hoursListStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0",
  };

  const iframeStyle = {
    border: 0,
    width: "100%",
    height: "300px",
    maxWidth: "600px",
  };

  return (
    <>
      <footer style={footerStyle}>
        <hr style={hrStyle} />
        <div style={contentStyle}>
          <div style={sectionStyle}>
            <h4>Quick Links</h4>
            <ul style={ulStyle}>
              <li style={liStyle}>
                <Link to="/" style={linkStyle}>
                  Home
                </Link>
              </li>
              <li style={liStyle}>
                <Link to="/appointment" style={linkStyle}>
                  Appointment
                </Link>
              </li>
              <li style={liStyle}>
                <Link to="/about" style={linkStyle}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h4>Hours</h4>
            <ul style={ulStyle}>
              {hours.map((element) => (
                <li key={element.id} style={hoursListStyle}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={sectionStyle}>
            <h4>Contact</h4>
            <div style={{ margin: "10px 0" }}>
              <FaPhone style={{ marginRight: "8px" }} />
              <span>1012-45454</span>
              <br />
              <span>0560-45641</span>
            </div>
            <div style={{ margin: "10px 0" }}>
              <MdEmail style={{ marginRight: "8px" }} />
              <span>himinli@gmail.com</span>
            </div>
            <div style={{ margin: "10px 0" }}>
              <FaLocationArrow style={{ marginRight: "8px" }} />
              <span>Kochi, India</span>
            </div>
          </div>
        </div>
        <div>
          <h4>Location</h4>
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3422212412987!2d75.78041!3d10.85052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65d3f0c000001!2sKochi%2C%20India!5e0!3m2!1sen!2sus!4v1626236422146!5m2!1sen!2sus"
              style={iframeStyle}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
