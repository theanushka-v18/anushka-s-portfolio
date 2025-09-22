import { Box, Button, Group, Image, Text, Title } from "@mantine/core";
import avatar from "../../assets/avatar.png";

const Home = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Group
      id="home"
      h={"100vh"}
      px={"xl"}
      justify="space-between"
      align="center"
      w={"100%"}
      pos={"absolute"}
    >
      <Box px={"xl"}>
        <Text size="xl">👋 Hello I am,</Text>
        <Title
          order={1}
          fw={"normal"}
          size={"4rem"}
          lts={"5px"}
          c={"var(--secondary-theme-color)"}
        >
          Anushka Verma
        </Title>
        <Text size="xl" fw={"300"} w={450}>
          A Frontend Developer, trying to be good also at Backend Development
        </Text>
        <Button
          size="md"
          mr={"md"}
          mt={"md"}
          w={"150"}
          variant="outline"
          bd={"1px solid var(--secondary-theme-color)"}
          c={"var(--secondary-theme-color)"}
          onClick={() => handleScroll("contact")}
        >
          Contact Me
        </Button>
        <Button
          size="md"
          mt={"md"}
          w={"150"}
          variant="filled"
          bg={"var(--secondary-theme-color)"}
          c={"var(--mantine-color-body)"}
        >
          Resume
        </Button>
      </Box>
      <Box px={"xl"}>
        <Image src={avatar} />
      </Box>
    </Group>
  );
};

export default Home;
