import { Box, Title, Text, Flex, Button } from "@mantine/core";
import { motion } from "framer-motion";

const SectionLabel = ({ number, title }) => (
  <Box
    style={{
      fontSize: "0.7rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--gold)",
      marginBottom: "0.6rem",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      fontWeight: 600,
    }}
  >
    <Box
      component="span"
      style={{
        display: "block",
        width: "24px",
        height: "1px",
        background: "var(--gold)",
      }}
    />
    {number} — {title}
  </Box>
);

const slideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.07,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const contactLinks = [
  {
    icon: "✉",
    label: "Email",
    val: "anushkaverma779@gmail.com",
    href: "mailto:anushkaverma779@gmail.com",
  },
  {
    icon: "☎",
    label: "Phone",
    val: "+91 8081 066 188",
    href: "tel:+918081066188",
  },
  {
    icon: (
      <Box
        component="span"
        style={{
          fontFamily: "Syne, sans-serif",
          fontWeight: 800,
          fontSize: "0.85rem",
          color: "var(--gold)",
        }}
      >
        in
      </Box>
    ),
    label: "LinkedIn",
    val: "Connect with me",
    href: "https://www.linkedin.com/in/theanushka-v18/",
  },
  {
    icon: (
      <Box
        component="span"
        style={{
          fontFamily: "Syne, sans-serif",
          fontWeight: 800,
          fontSize: "0.9rem",
          color: "var(--gold)",
        }}
      >
        {"</>"}
      </Box>
    ),
    label: "GitHub",
    val: "View my repositories",
    href: "https://github.com/theanushka-v18",
  },
];

const Contact = () => {
  return (
    <Box
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}
    >
      <Box
        component="section"
        id="contact"
        style={{ padding: "6rem 2.5rem", maxWidth: "1080px", margin: "0 auto" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          custom={0}
        >
          <SectionLabel number="05" title="Contact" />
          <Title
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "var(--text)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Let's work together
          </Title>
          <Text
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              marginBottom: "3.5rem",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            Open to full-time roles, contract work, and interesting
            conversations.
          </Text>
        </motion.div>
        <Box
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, var(--border), transparent)",
            marginBottom: "3.5rem",
          }}
        />

        <Flex
          gap={{ base: "2.5rem", md: "5rem" }}
          direction={{ base: "column", md: "row" }}
          align="flex-start"
        >
          <motion.div
            style={{ flex: 1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
          >
            <Box
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--green-dim)",
                border: "1px solid rgba(74,222,128,.2)",
                color: "var(--green)",
                fontSize: "0.75rem",
                padding: "0.4rem 0.9rem",
                borderRadius: "2px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              <Box
                component="span"
                className="pulse-dot-anim"
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--green)",
                }}
              />
              Available for new roles
            </Box>
            <Title
              order={3}
              style={{
                fontSize: "1.5rem",
                color: "var(--text)",
                marginBottom: "1rem",
                fontWeight: 700,
              }}
            >
              I'd love to hear from you
            </Title>
            <Text
              style={{
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: "1.2rem",
                fontSize: "0.98rem",
              }}
            >
              Whether it's a full-time frontend role, a challenging product
              problem, or just a conversation about React performance and
              AI-powered UIs — my inbox is open.
            </Text>
            <Text
              style={{
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: "1.2rem",
                fontSize: "0.98rem",
              }}
            >
              Based in{" "}
              <strong style={{ color: "var(--text)" }}>Noida, India</strong> —
              available onsite locally and open to remote opportunities
              worldwide.
            </Text>
            <Button
              component="a"
              href="https://drive.google.com/file/d/1gyb2RwhckpEc2HXVr6Gj8Vr-Ui0lsuuz/view?usp=drivesdk"
              target={'_blank'}
              bg="var(--gold)"
              c="#07070e"
              radius="xs"
              mt="0.5rem"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
              styles={{
                root: {
                  transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    background: "#fff",
                    transform: "translateY(-2px)",
                  },
                },
              }}
            >
              My Resume
            </Button>
          </motion.div>

          <motion.div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem",
              width: "100%",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
          >
            {contactLinks.map((link, i) => (
              <Box
                key={i}
                component="a"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  padding: "1.1rem 1.3rem",
                  transition: "border-color 0.2s, transform 0.2s",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(240,192,64,.35)";
                  e.currentTarget.style.transform = "translateX(6px)";
                  e.currentTarget.querySelector(
                    ".c-link-arrow",
                  ).style.transform = "translateX(4px)";
                  e.currentTarget.querySelector(".c-link-arrow").style.color =
                    "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.querySelector(
                    ".c-link-arrow",
                  ).style.transform = "none";
                  e.currentTarget.querySelector(".c-link-arrow").style.color =
                    "var(--dim)";
                }}
              >
                <Box
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "var(--gold-dim)",
                    border: "1px solid rgba(240,192,64,.2)",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "1rem",
                  }}
                >
                  {link.icon}
                </Box>
                <Box style={{ flex: 1, minWidth: 0 }}>
                  <Text
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--dim)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {link.label}
                  </Text>
                  <Text
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text)",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {link.val}
                  </Text>
                </Box>
                <Box
                  component="span"
                  className="c-link-arrow"
                  style={{
                    color: "var(--dim)",
                    fontSize: "0.85rem",
                    transition: "transform 0.2s, color 0.2s",
                    flexShrink: 0,
                  }}
                >
                  →
                </Box>
              </Box>
            ))}
          </motion.div>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
