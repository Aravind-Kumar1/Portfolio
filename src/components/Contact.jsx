import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contact.css"; // ✅ Make sure you have contact.css for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("⚠️ All fields are required!");
      return;
    }

    const templateParams = {
      from_name: formData.name, 
      from_email: formData.email, 
      message: formData.message,
    };

    emailjs
      .send(
        "service_ivdb4gl", // 🔴 Replace with EmailJS Service ID
        "template_twmzcac", // 🔴 Replace with EmailJS Template ID
        templateParams,
        "vXtL9yQyjd26p2tUU" // 🔴 Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Try again!");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-description">
        Feel free to reach out for collaborations, work inquiries, or general discussions. 😊
      </p>

      <div className="contact-container">
        {/* 📍 Contact Info */}
        <div className="contact-card">
          <h3>Contact Details</h3>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>+91 8897552877</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>aravindchamaakuri@gmail.com</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Hyderabad, India</p>
          </div>

          {/* 🌍 Follow Me */}
          <h3 className="follow-me-title">Follow Me</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a>
            <a href="https://www.linkedin.com/in/aravind-chamaakuri/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
          </div>
        </div>

        {/* ✉️ Contact Form */}
        <div className="contact-card">
          <h3>Send a Message</h3>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
