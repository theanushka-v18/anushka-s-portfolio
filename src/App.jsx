import { Box, Title } from "@mantine/core";

const App = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Title order={1}>Anushka Verma</Title>
      <Title order={4}>Re-developing this portfolio website</Title>
    </Box>
  );
};

export default App;
