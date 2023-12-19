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
import WorkPrinciples from "./components/WorkPrinciples/WorkPrinciples";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import Services from "./components/Services/Services";
import { useEffect } from "react";

function App() {
  const handleSetActiveLink = (link, event) => {
    event.preventDefault();

    const section = document.getElementById(link);
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      let targetOffset;
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        targetOffset = rect.top + scrollTop - 80;
      } else if (screenWidth <= 1440) {
        targetOffset = rect.top + scrollTop - 80;
      } else if (screenWidth <= 1920) {
        targetOffset = rect.top + scrollTop - 80;
      } else {
        targetOffset = rect.top + scrollTop - 60;
      }

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
        onComplete: () => {
          event.target.blur();
        },
      });
    }
  };

  useEffect(() => {
    fetch("https://healthy-management.onrender.com/api/wakeup");
  }, []);

  return (
    <>
      <Header handleSetActiveLink={handleSetActiveLink} />
      <main>
        <Hero handleSetLink={handleSetActiveLink} />
        <AboutStudio />
        <AboutMe />
        <WhyChooseUs />
        <WorkPrinciples />
        <Services handleSetActiveLink={handleSetActiveLink} />
        <Mentor handleSetLink={handleSetActiveLink} />
        <MentoringSession handleSetLink={handleSetActiveLink} />
        <PersonalSupport handleSetLink={handleSetActiveLink} />
        <ProjectSection handleSetActiveLink={handleSetActiveLink} />
        <BusinessTools />
        <ContactsForm />
        <ScrollToTop />
      </main>
      <Footer handleSetActiveLink={handleSetActiveLink} />
    </>
  );
}

export default App;
