import BusinessTools from "./components/BusinessTools/BusinessTools";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Mentor from "./components/Mentor/Mentor";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mentor />
        <BusinessTools />
      </main>
      <Footer />
    </>
  );
}

export default App;
