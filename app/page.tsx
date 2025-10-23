import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};
export default Home;
