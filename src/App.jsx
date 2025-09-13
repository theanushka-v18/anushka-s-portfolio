import { Box, Title, Button, useMantineColorScheme } from "@mantine/core";

const App = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        height: "100vh",
      }}
    >
      <Title order={1}>Anushka Verma</Title>
      <Title order={4}>Re-developing this portfolio website</Title>

      <Button
        onClick={() =>
          setColorScheme(colorScheme === "dark" ? "light" : "dark")
        }
      >
        Toggle {colorScheme === "dark" ? "Light" : "Dark"} Mode
      </Button>
    </Box>
  );
};

export default App;
