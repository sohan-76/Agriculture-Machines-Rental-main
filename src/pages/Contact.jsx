import { useState } from "react";
import "./Contact.css";
import Navbar from "./Navbar";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We have received your message and will get back to you shortly.`);
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        We value your feedback and are here to assist you. Whether you have questions about our services, need technical support, or want to share your experience, feel free to reach out to us. Our team is ready to help!
      </p>
      <div className="contact-content">
        {/* Contact Details */}
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>Our team is available Monday to Friday, 9 AM to 6 PM, and Saturday, 10 AM to 4 PM. Reach us via:</p>
          <ul>
            <li><strong>Phone:</strong> +91 123456789</li>
            <li><strong>Email:</strong> ageirent@gmail.com</li>
            <li><strong>Address:</strong> 123, main road, city , India</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <p>Fill out the form below, and we’ll respond as soon as possible.</p>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
