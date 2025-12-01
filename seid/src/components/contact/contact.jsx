import React, { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await emailjs.sendForm(
        "service_vy9dq7v",
        "template_4r19t2s",
        e.target,
        "xR0W3D-T39I7vwprA"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>Plshireseid@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+251 929 075 365</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Addis Ababa, Ethiopia</p>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/seid-sualih-92b938370/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Seid-Sualeh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <form
            className="contact-form animate-on-scroll"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-field"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span className="error-message"></span>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="error-message"></span>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="input-field"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <span className="error-message"></span>
            </div>

            <button
              type="submit"
              id="submit-button"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                <i className="fas fa-paper-plane"></i>
              )}
              {isSubmitting ? " Sending..." : " Send Message"}
            </button>

            {submitStatus === "success" && (
              <div className="alert alert-success">
                <i className="fas fa-check-circle"></i> Thank you! Your message
                has been sent successfully.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="alert alert-error">
                <i className="fas fa-times-circle"></i> Failed to send message.
                Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
