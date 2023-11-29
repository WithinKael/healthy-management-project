import AboutMe from "./components/AboutMe/AboutMe";
import AboutStudio from "./components/AboutStudio/AboutStudio";
import BusinessTools from "./components/BusinessTools/BusinessTools";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutStudio />
        <AboutMe />
        <BusinessTools />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
