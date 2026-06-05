import { Box, Title, Text, Flex } from '@mantine/core';
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
    <Box component="span" style={{ display: 'block', width: '24px', height: '1px', background: 'var(--gold)' }} />
    {number} — {title}
  </Box>
);

const slideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const projectsData = [
  {
    icon: '⌨',
    name: 'Typing Test',
    desc: 'Full-featured typing speed test with multi-theme support (light/dark/custom) and three modes — timed, word-count, and infinite. Firebase auth stores 50+ test records per user including WPM, accuracy, and consistency scores.',
    tech: ['React.js', 'Firebase Auth', 'Firestore'],
    link: '#'
  },
  {
    icon: '💬',
    name: 'Orbither',
    desc: 'Real-time full-stack chat application with live messaging, typing indicators, and Web Push Notifications. Features secure JWT auth with refresh token rotation, HttpOnly cookies, Axios interceptors, optimistic UI with shimmer loading, and Nodemailer-based password reset.',
    tech: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Redux Toolkit', 'JWT'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <Box component="section" id="projects" style={{ padding: '6rem 2.5rem', maxWidth: '1080px', margin: '0 auto' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={slideUp} custom={0}>
        <SectionLabel number="04" title="Projects" />
        <Title style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          Things I've built
        </Title>
        <Text style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '3.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
          Personal projects exploring ideas beyond the day job.
        </Text>
      </motion.div>
      <Box style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)', marginBottom: '3.5rem' }} />

      <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projectsData.map((proj, i) => (
          <motion.div
            key={i}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={slideUp}
            style={{
              background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem',
              position: 'relative', overflow: 'hidden', transition: 'border-color 0.25s, transform 0.25s',
              display: 'flex', flexDirection: 'column', gap: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(240,192,64,.35)';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.children[0].style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.children[0].style.opacity = '0';
            }}
          >
            <Box style={{ content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold) 50%, transparent)', opacity: 0, transition: 'opacity 0.3s' }} />
            
            <Flex align="flex-start" justify="space-between" gap="1rem">
              <Box style={{ width: '44px', height: '44px', background: 'var(--gold-dim)', border: '1px solid rgba(240,192,64,.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                {proj.icon}
              </Box>
              <Box
                component="a"
                href={proj.link}
                style={{ width: '32px', height: '32px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dim)', fontSize: '0.8rem', transition: 'all 0.2s', flexShrink: 0 }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--dim)'; }}
              >
                ↗
              </Box>
            </Flex>
            
            <Text style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)' }}>
              {proj.name}
            </Text>
            <Text style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>
              {proj.desc}
            </Text>
            
            <Flex wrap="wrap" gap="0.4rem" mt="auto">
              {proj.tech.map((tech, idx) => (
                <Box key={idx} component="span" style={{ fontSize: '0.72rem', padding: '0.22rem 0.6rem', borderRadius: '2px', background: 'var(--purple-dim)', border: '1px solid rgba(139,127,255,.15)', color: '#b0a8f8', fontWeight: 500 }}>
                  {tech}
                </Box>
              ))}
            </Flex>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
