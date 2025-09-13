import { Box, Title } from "@mantine/core";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Box>
        <Box id="home" h="100vh">
          <Title order={2}>Home Section</Title>
        </Box>
        <Box id="about" h="100vh">
          <Title order={2}>About Section</Title>
        </Box>
        <Box id="projects" h="100vh">
          <Title order={2}>Projects Section</Title>
        </Box>
        <Box id="skills-certifications" h="100vh">
          <Title order={2}>Skills & Certifications Section</Title>
        </Box>
        <Box id="contact" h="100vh">
          <Title order={2}>Contact Section</Title>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
