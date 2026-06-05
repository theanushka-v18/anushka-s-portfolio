import { Box, Flex, Text, Title, Button } from '@mantine/core';
import { motion } from 'framer-motion';

const SectionLabel = ({ number, title }) => (
  <Box
    style={{
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      marginBottom: '0.6rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontWeight: 600,
    }}
  >
    <Box
      component="span"
      style={{
        display: 'block',
        width: '24px',
        height: '1px',
        background: 'var(--gold)',
      }}
    />
    {number} — {title}
  </Box>
);

const slideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const About = () => {
  return (
    <Box style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <Box component="section" id="about" style={{ padding: '6rem 2.5rem', maxWidth: '1080px', margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={slideUp}>
          <SectionLabel number="01" title="About" />
          <Title
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--text)',
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            A bit about me
          </Title>
          <Text style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '3.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
            Engineer who cares about the craft — from architecture to animation.
          </Text>
        </motion.div>

        <Box style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)', marginBottom: '3.5rem' }} />

        <Flex gap={{ base: '2.5rem', md: '5rem' }} direction={{ base: 'column', md: 'row' }} align="flex-start">
          <motion.div style={{ flex: 3 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={slideLeft}>
            <Text style={{ color: 'var(--muted)', marginBottom: '1.2rem', fontSize: '1rem', lineHeight: 1.8 }}>
              I'm a <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Frontend Software Engineer</strong> at Samta Infotech with a deep focus on building AI-powered interfaces and scalable analytics platforms. I specialize in the React ecosystem — TypeScript, Redux Toolkit, Turborepo monorepos, and performance-first development.
            </Text>
            <Text style={{ color: 'var(--muted)', marginBottom: '1.2rem', fontSize: '1rem', lineHeight: 1.8 }}>
              From drag-and-drop dashboards to embeddable AI widgets using <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Shadow DOM</strong>, I care about the invisible details — memoization strategies, re-render budgets, and accessibility. I also bridge into the backend when needed (Node.js, MongoDB) to own the full delivery.
            </Text>
            <Text style={{ color: 'var(--muted)', marginBottom: '1.2rem', fontSize: '1rem', lineHeight: 1.8 }}>
              Currently building at Samta Infotech while exploring AI integration patterns, voice interfaces, and real-time systems on the side.
            </Text>

            <Flex gap="0.75rem" mt="2rem" wrap="wrap">
              <Button
                component="a"
                href="mailto:anushkaverma779@gmail.com"
                bg="var(--gold)"
                c="#07070e"
                radius="xs"
                style={{ fontSize: '0.82rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0.05em' }}
                styles={{ root: { transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)', '&:hover': { background: '#fff', transform: 'translateY(-2px)' } } }}
              >
                Email Me →
              </Button>
              <Button
                component="a"
                href="https://linkedin.com"
                variant="outline"
                color="var(--border2)"
                radius="xs"
                style={{ fontSize: '0.82rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text)' }}
                styles={{ root: { transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)', '&:hover': { borderColor: 'var(--gold)', color: 'var(--gold) !important', transform: 'translateY(-2px)' } } }}
              >
                LinkedIn ↗
              </Button>
              <Button
                component="a"
                href="https://github.com"
                variant="outline"
                color="var(--border2)"
                radius="xs"
                style={{ fontSize: '0.82rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text)' }}
                styles={{ root: { transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)', '&:hover': { borderColor: 'var(--gold)', color: 'var(--gold) !important', transform: 'translateY(-2px)' } } }}
              >
                GitHub ↗
              </Button>
            </Flex>
          </motion.div>

          <motion.div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={slideRight}>
            {[
              { num: 'Oct 2024', desc: 'Promoted to Software Engineer (Frontend) — full ownership of AI platform architecture', delay: 0.05 },
              { num: '3 Roles', desc: 'Indivue Technologies → Samta Infotech intern → full-time SWE in under 2 years', delay: 0.12 },
              { num: 'BCA', desc: 'Allenhouse Business School, Kanpur — Bachelor of Computer Application', delay: 0.19 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                custom={stat.delay}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (d) => ({ opacity: 1, y: 0, transition: { delay: d, duration: 0.5 } })
                }}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '1.4rem 1.6rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: 'var(--gold)' }} />
                <Text style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1, display: 'block' }}>
                  {stat.num}
                </Text>
                <Text style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.3rem', lineHeight: 1.4 }}>
                  {stat.desc}
                </Text>
              </motion.div>
            ))}
          </motion.div>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
