import { Anchor, Group, Image, useMantineColorScheme } from "@mantine/core";
import avatar from "../../assets/avatar.png";
import { useActiveSection } from "../../useActiveSection";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const sectionIds = [
    "home",
    "about",
    "projects",
    "skills-certifications",
    "contact",
  ];
  const activeId = useActiveSection(sectionIds);
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Group w={"100%"} px={"xl"} pos={"fixed"} justify="space-between" mt={"xs"}>
      <Image w={30} src={avatar} />

      <Group spacing="xl" p="md" gap={"xl"} position="center">
        {sectionIds.map((id) => (
          <Anchor
            key={id}
            component="button"
            onClick={() => handleScroll(id)}
            style={{
              fontWeight: "bold",
              color:
                activeId === id ? "var(--secondary-theme-color)" : "inherit",
            }}
          >
            {id.replace("-", " & ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </Anchor>
        ))}
      </Group>

      {colorScheme === "light" ? (
        <FaMoon
          style={{ cursor: "pointer" }}
          onClick={() =>
            setColorScheme(colorScheme === "light" ? "dark" : "light")
          }
        />
      ) : (
        <FaSun
          style={{ cursor: "pointer" }}
          onClick={() =>
            setColorScheme(colorScheme === "light" ? "dark" : "light")
          }
        />
      )}
    </Group>
  );
};

export default Navbar;
