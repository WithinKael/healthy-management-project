import AboutMe from "./components/AboutMe/AboutMe";
import AboutStudio from "./components/AboutStudio/AboutStudio";
import BusinessTools from "./components/BusinessTools/BusinessTools";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Mentor from "./components/Mentor/Mentor";
import ProjectSection from "./components/ProjectSection/ProjectSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutStudio />
        <AboutMe />
        <BusinessTools />
        <Mentor />
        <ProjectSection />
        <BusinessTools />
      </main>
       <Footer /> 
    </>
  );
}

export default App;
