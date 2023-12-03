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

function App() {
  const handleSetActiveLink = (link, event) => {
    event.preventDefault();

    const section = document.getElementById(link);
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetOffset = rect.top + scrollTop - 60;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });

      setTimeout(() => {
        event.target.blur();
      }, 1000);
    }
  };

  return (
    <>
      <Header handleSetActiveLink={handleSetActiveLink} />
      <main>
        <Hero />
        <AboutStudio />
        <AboutMe />
        <WhyChooseUs />
        <WorkPrinciples />
        <Mentor />
        <MentoringSession />
        <PersonalSupport />
        <ProjectSection />
        <BusinessTools />
        <ContactsForm />
      </main>
      <Footer handleSetActiveLink={handleSetActiveLink} />
      <ScrollToTop />
    </>
  );
}

export default App;
