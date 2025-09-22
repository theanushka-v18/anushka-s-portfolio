import { Group, Title } from "@mantine/core";

const About = () => {
  return (
    <Group
      id="about"
      h="100vh"
      px={"xl"}
      bd={"1px solid blue"}
      justify="center"
      align="center"
      w={"100%"}
      pos={"absolute"}
      mt={"100vh"}
    >
      <Title
        ta={"center"}
        order={1}
        tt={"uppercase"}
        style={{ borderBottom: "2px solid var(--mantine-color-text)" }}
      >
        About Me
      </Title>
    </Group>
  );
};

export default About;
