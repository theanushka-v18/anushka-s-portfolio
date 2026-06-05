import { Box, Title, Text, Button, Flex } from '@mantine/core';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;
    const duration = 1800;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target]);

  return <>{count}</>;
};

const Home = () => {
  return (
    <Box style={{ position: 'relative', overflow: 'hidden' }}>
      <Box className="hero-grid-bg" />
      <Box
        component="section"
        id="home"
        style={{
          minHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '5rem 2.5rem 4rem',
          maxWidth: '1080px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <motion.div custom={0.1} initial="hidden" animate="visible" variants={slideUp}>
          <Box
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'var(--gold-dim)',
              border: '1px solid rgba(240, 192, 64, 0.25)',
              color: 'var(--gold)',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0.45rem 1rem',
              borderRadius: '2px',
              marginBottom: '2rem',
              fontWeight: 600,
            }}
          >
            <Box
              component="span"
              className="pulse-dot-anim"
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }}
            />
            Software Engineer · Noida, India · Open to Work
          </Box>
        </motion.div>

        <motion.div custom={0.25} initial="hidden" animate="visible" variants={slideUp}>
          <Title
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 7rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '0.4rem',
              lineHeight: 1.0,
            }}
          >
            Anushka
            <br />
            <Box
              component="span"
              style={{ color: 'var(--gold)', position: 'relative', display: 'inline-block' }}
            >
              Verma.
              <Box
                component="span"
                style={{
                  position: 'absolute',
                  bottom: '4px',
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'var(--gold-dim)',
                  borderRadius: '2px',
                }}
              />
            </Box>
          </Title>
        </motion.div>

        <motion.div custom={0.4} initial="hidden" animate="visible" variants={slideUp}>
          <Text
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              fontWeight: 600,
              color: 'var(--purple)',
              marginBottom: '1.5rem',
              letterSpacing: '0.02em',
            }}
          >
            Frontend Engineer & AI Interface Specialist
          </Text>
        </motion.div>

        <motion.div custom={0.55} initial="hidden" animate="visible" variants={slideUp}>
          <Text
            style={{
              fontSize: '1.05rem',
              color: 'var(--muted)',
              maxWidth: '520px',
              marginBottom: '2.5rem',
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            I build intelligent, high-performance web interfaces — from AI-powered analytics platforms to embeddable
            onboarding widgets. 2+ years crafting experiences that just work.
          </Text>
        </motion.div>

        <motion.div custom={0.7} initial="hidden" animate="visible" variants={slideUp}>
          <Flex gap="1rem" wrap="wrap">
            <Button
              component="a"
              href="#experience"
              bg="var(--gold)"
              c="#07070e"
              radius="xs"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0.05em' }}
              styles={{
                root: {
                  transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    background: '#fff',
                    transform: 'translateY(-2px)',
                  },
                },
              }}
            >
              View My Work
            </Button>
            <Button
              component="a"
              href="#contact"
              variant="outline"
              color="var(--border2)"
              radius="xs"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text)' }}
              styles={{
                root: {
                  transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    borderColor: 'var(--gold)',
                    color: 'var(--gold) !important',
                    transform: 'translateY(-2px)',
                  },
                },
              }}
            >
              Get In Touch ↗
            </Button>
          </Flex>
        </motion.div>

        <motion.div custom={0.9} initial="hidden" animate="visible" variants={slideUp}>
          <Flex
            gap="3rem"
            wrap="wrap"
            style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}
          >
            {[
              { target: 93, suffix: '%', label: 'Time saved on AI platform' },
              { target: 45, suffix: '%', label: 'Re-render reduction' },
              { target: 98, suffix: '.5%', label: 'Face match accuracy' },
              { target: 50, suffix: 'K+', label: 'Rows handled in data table' },
            ].map((metric, i) => (
              <Flex key={i} direction="column" gap="0.2rem">
                <Box>
                  <Text component="span" style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>
                    <AnimatedCounter target={metric.target} />
                  </Text>
                  <Text component="span" style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>
                    {metric.suffix}
                  </Text>
                </Box>
                <Text style={{ fontSize: '0.78rem', color: 'var(--dim)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {metric.label}
                </Text>
              </Flex>
            ))}
          </Flex>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
