import { Box } from "@mantine/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import SkillsCertifications from "./components/SkillsCertifications/SkillsCertifications";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Box pos={"relative"}>
        <Home />
        <About />
        <Projects />
        <SkillsCertifications />
        <Contact />
      </Box>
    </Box>
  );
};

export default App;
