import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import About from '../components/about/about';
import Services from '../components/service/service';
import Experience from '../components/experience/experience';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';
import Education from '../components/education/education';
import Testimonial from '../components/testimonial/testimonial';
import Footer from '../components/footer/footer';

const Home = () => {
    return (
      <div>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Services />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    );
}

export default Home;
