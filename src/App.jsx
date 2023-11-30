import AboutMe from "./components/AboutMe/AboutMe";
import AboutStudio from "./components/AboutStudio/AboutStudio";
import BusinessTools from "./components/BusinessTools/BusinessTools";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Mentor from "./components/Mentor/Mentor";
import MentoringSession from "./components/MentoringSession/MentoringSession";
import PersonalSupport from "./components/PersonalSupport/PersonalSupport";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutStudio />
        <AboutMe />
        <WhyChooseUs />
        <Mentor />
        <MentoringSession />
        <PersonalSupport />
        <ProjectSection />
        <BusinessTools />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
