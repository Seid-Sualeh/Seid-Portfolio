import React, { useState, useEffect } from "react";
import "./testimonial.css";
import Manavatar from "../../../assets/image/Manavatar-d7e81aa6.jpg";
import Manavatars from "../../../assets/image/womanavatar-b4253128.jpg";
import tsegsh from "../../../assets/image/tsegish-ad0b00b4.jpg";

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Hailu Hailu",
      role: "Network & Cybersecurity Professional • California, USA",
      image: Manavatar,
      text: "I had the pleasure of working with Seid during our MERN Stack certification program. Despite coming from a non-IT background, he demonstrated remarkable dedication, fast learning ability, and a strong technical mindset. His teamwork, professionalism, and positive attitude made him an exceptional collaborator. Seid is truly an inspiring developer with great potential.",
    },
    {
      name: "Betty Basha",
      role: "Full-Stack Developer • Austin, TX",
      image: Manavatars,
      text: "Working with Seid at Evangadi Networks was an incredible experience. He's a highly skilled Full Stack Developer who consistently delivers clean, efficient, and reliable code. Seid has a great eye for detail and a unique ability to connect creative design ideas with solid technical solutions. He's approachable, team-oriented, and always willing to lend a hand.",
    },
    {
      name: "Mohammed Adem",
      role: "Full-Stack Developer (Peer)",
      image: Manavatar,
      text: "Working alongside Seid was an enriching experience. His deep curiosity, strong coding skills, and collaborative spirit made every project more efficient and enjoyable.",
    },
    {
      name: "Temsgen Abdisa",
      role: "CEO, Emamutech Solution • Addis Ababa, Ethiopia",
      image: Manavatar,
      text: "I had the privilege of working with Seid during our Full-Stack Web Development course. Throughout our collaboration, I was consistently impressed by his strong grasp of complex concepts and his initiative in introducing new challenges that encouraged our team's growth. He is a dedicated professional, an excellent communicator, and a collaborative leader.",
    },
    {
      name: "Tsegaw Kebede",
      role: "Software Engineer • Maryland, USA",
      image: tsegsh,
      text: "Working with Seid has been a real privilege. I can confidently say he is one of the most dedicated developers I've met. He is one of those people who you can always count on—no matter how tough the task or how close the deadline gets, he always approaches each challenge with focus and determination. I've seen him stay calm under pressure and focus on finding solutions.",
    },
    {
      name: "Emran Nasser",
      role: "Full-Stack Developer • Maryland, USA",
      image: Manavatar,
      text: "Seid has been a great teammate throughout my full-stack journey. He's always ready to help, easy to work with, and genuinely committed to learning. Whenever things got challenging, he stayed positive and encouraged the rest of us. I'm really glad I got the chance to learn alongside him.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

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
    const elements = document.querySelectorAll(".test-animate");
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="testimonials" className="testimonials-section section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header test-animate">
          <span className="section-eyebrow">
            <i className="fa-solid fa-comments"></i> Recommendation
          </span>
          <h2 className="section-title">
            Peer <span className="gradient-text">Endorsements</span>
          </h2>
          <p className="section-subtitle">
            What colleagues, team leaders, and peers say about my technical skills,
            work ethic, and collaboration.
          </p>
        </div>

        {/* Testimonial slider layout */}
        <div className="testimonial-wrapper test-animate">
          {/* Big Quote Backdrop */}
          <div className="quote-backdrop">
            <i className="fa-solid fa-quote-right"></i>
          </div>

          <div className="testimonial-track">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className={`testimonial-slide ${index === current ? "active" : ""}`}
              >
                <div className="testimonial-avatar-wrap">
                  <div className="avatar-ring"></div>
                  <img src={test.image} alt={test.name} className="testimonial-avatar" />
                </div>
                
                <p className="testimonial-quote">"{test.text}"</p>
                
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{test.name}</h4>
                  <span className="testimonial-job">{test.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="testimonial-pagination">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`testimonial-dot-btn ${index === current ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
