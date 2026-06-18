import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".cnt-animate");
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const contactInfo = [
    {
      icon: "fa-solid fa-envelope",
      title: "Email Me",
      value: "Plshireseid@gmail.com",
      link: "mailto:Plshireseid@gmail.com",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Call Me",
      value: "+251 929 075 365",
      link: "tel:+251929075365",
    },
    {
      icon: "fa-solid fa-location-dot",
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      link: "https://maps.google.com/?q=Addis+Ababa,+Ethiopia",
    },
  ];

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header cnt-animate">
          <span className="section-eyebrow">
            <i className="fa-solid fa-paper-plane"></i> Contact
          </span>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, want to hire me, or just want to chat? Drop me
            a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-layout">
          {/* Info Side */}
          <div className="contact-info-col cnt-animate from-left">
            <h3 className="contact-col-title">Contact Information</h3>
            <p className="contact-col-desc">
              Feel free to reach out via direct channels or social media. I am
              always open to discussing new software development opportunities,
              freelance projects, or partnership possibilities.
            </p>

            <div className="contact-cards-wrap">
              {contactInfo.map((info, i) => (
                <a
                  href={info.link}
                  key={i}
                  className="contact-info-card"
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <div className="contact-card-icon-box">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">{info.title}</span>
                    <span className="contact-card-val">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Connect */}
            <div className="contact-socials-wrap">
              <span className="contact-socials-label">Connect with me:</span>
              <div className="contact-socials">
                <a
                  href="https://github.com/Seid-Sualeh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/seid-sualih-92b938370/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-col cnt-animate from-right">
            <form onSubmit={handleSubmit} className="premium-contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <div className="input-wrapper">
                    <i className="fa-regular fa-user input-icon"></i>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <i className="fa-regular fa-envelope input-icon"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <div className="input-wrapper">
                  <i className="fa-regular fa-comment input-icon message-icon"></i>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin"></i>
                    Sending message...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              {/* Toast Alerts */}
              {submitStatus === "success" && (
                <div className="form-alert alert-success">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
                    Thank you! Your message has been sent successfully. I'll get
                    back to you soon!
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="form-alert alert-error">
                  <i className="fa-solid fa-circle-xmark"></i>
                  <span>
                    Failed to send message. Please check your connection or email me
                    directly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
