import { Box } from "@mantine/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Box>
      <CursorGlow />
      <Navbar />
      <Box pos={"relative"}>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </Box>
    </Box>
  );
};

export default App;
