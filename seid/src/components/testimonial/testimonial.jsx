import React, { useState, useEffect } from "react";
import "./testimonial.css";
import Manavatar from "../../../assets/image/Manavatar-d7e81aa6.jpg";
import Manavatars from "../../../assets/image/womanavatar-b4253128.jpg";
import tsegsh from "../../../assets/image/tsegish-ad0b00b4.jpg";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Hailu Hailu",
      role: "Network & Cybersecurity Professional • California, USA",
      image: Manavatar,
      text: "I had the pleasure of working with Seid during our MERN Stack certification program. Despite coming from a non-IT background, he demonstrated remarkable dedication, fast learning ability, and a strong technical mindset. His teamwork, professionalism, and positive attitude made him an exceptional collaborator. Seid is truly an inspiring developer with great potential in the tech industry.",
    },
    {
      name: "Betty Basha",
      role: "Full-Stack Developer Austin TX.",
      image: Manavatars,
      text: "Working with Seid at Evangadi Networks was an incredible experience. He's a highly skilled Full Stack Developer who consistently delivers clean, efficient, and reliable code. Seid has a great eye for detail and a unique ability to connect creative design ideas with solid technical solutions. He's approachable, team-oriented, and always willing to lend a hand when challenges arise. Any project benefits from his talent, professionalism, and positive attitude.",
    },
    {
      name: "Mohammed Adem",
      role: "Full-Stack Developer (Peer)",
      image: Manavatar,
      text: "Working alongside Seid was an enriching experience. His deep curiosity, strong coding skills, and collaborative spirit made every project more efficient and enjoyable.",
    },
    {
      name: "Temsgen Abdisa",
      role: "CEO, Emamutech Solution, Addis Ababa Ethiopia",
      image: Manavatar,
      text: "I had the privilege of working with Seid during our Full-Stack Web Development course. Throughout our collaboration, which spanned four sessions each week, I was consistently impressed by his strong grasp of complex concepts and his initiative in introducing new challenges that encouraged our team's growth. He is a dedicated professional, an excellent communicator, and a collaborative leader who values innovation and teamwork.",
    },
    {
      name: "Tsegaw Kebede",
      role: "Software Engineer Maryland, USA",
      image: tsegsh,
      text: "Working with Seid has been a real privilege. I can confidently say he is one of the most dedicated developers I've met. He is one of those people who you can always count on—no matter how tough the task or how close the deadline gets, he always approaches each challenge with focus and determination. I've seen him stay calm under pressure, focus on finding solutions, and push through challenges with real dedication.",
    },
    {
      name: "Emran Nasser",
      role: "full-stack developer United States, Maryland.",
      image: Manavatar,
      text: "Seid has been a great teammate throughout my full-stack journey. He's always ready to help, easy to work with, and genuinely committed to learning. Whenever things got challenging, he stayed positive and encouraged the rest of us. I'm really glad I got the chance to learn alongside him.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Testimonials</h2>
        <div className="testimonial-container">
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${
                  index === currentTestimonial ? "active" : ""
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-img"
                />
                <p className="testimonial-text">{testimonial.text}</p>
                <h4 className="testimonial-author">{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            ))}
          </div>
          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`testimonial-dot ${
                  index === currentTestimonial ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
