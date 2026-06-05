import { Box, Title, Text } from '@mantine/core';
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

const skillsData = [
  { cat: 'Core', title: 'Frontend Stack', tags: ['ReactJS', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Mantine UI', 'shadcn/ui', 'Material UI', 'Socket.io', 'Axios'], tagClass: 'purple' },
  { cat: 'Backend', title: 'Familiar With', tags: ['Node.js', 'Express.js', 'MongoDB', 'Firebase'], tagClass: 'gold' },
  { cat: 'Architecture', title: 'Patterns & Tooling', tags: ['Microfrontend', 'Monorepo', 'Turborepo', 'Shadow DOM', 'Code Splitting', 'Lazy Loading', 'Error Boundaries'], tagClass: 'green' },
  { cat: 'Dev Tools', title: 'Workflow', tags: ['Git', 'Bitbucket', 'Husky', 'Prettier', 'Postman', 'Azure DevOps', 'Vitest'], tagClass: 'purple' },
  { cat: 'Design', title: 'UI & Visual', tags: ['Figma', 'SCSS', 'CSS Modules', 'Responsive Design', 'UI/UX'], tagClass: 'gold' },
  { cat: 'AI', title: 'AI-Assisted Dev', tags: ['Claude', 'ChatGPT', 'Deepseek', 'MediaPipe', 'Bolt', 'Antigravity'], tagClass: 'green' }
];

const getTagStyles = (type) => {
  if (type === 'purple') return { background: 'var(--purple-dim)', borderColor: 'rgba(139,127,255,.2)', color: '#c0b8ff' };
  if (type === 'gold') return { background: 'var(--gold-dim)', borderColor: 'rgba(240,192,64,.2)', color: '#e8c870' };
  if (type === 'green') return { background: 'var(--green-dim)', borderColor: 'rgba(74,222,128,.2)', color: '#86efac' };
  return {};
};

const Skills = () => {
  return (
    <Box style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <Box component="section" id="skills" style={{ padding: '6rem 2.5rem', maxWidth: '1080px', margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={slideUp} custom={0}>
          <SectionLabel number="03" title="Skills" />
          <Title style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Tools & technologies
          </Title>
          <Text style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '3.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
            What I reach for to get the job done.
          </Text>
        </motion.div>
        <Box style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)', marginBottom: '3.5rem' }} />

        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
          {skillsData.map((skill, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={slideUp}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem 1.6rem',
                transition: 'border-color 0.2s, transform 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
            >
              <Box style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold)', marginBottom: '0.2rem' }}>
                {skill.cat}
              </Box>
              <Text style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: '1rem' }}>
                {skill.title}
              </Text>
              <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {skill.tags.map((tag, idx) => {
                  const styles = getTagStyles(skill.tagClass);
                  return (
                    <Box key={idx} component="span" style={{ ...styles, fontSize: '0.75rem', padding: '0.28rem 0.65rem', borderRadius: '2px', fontWeight: 500, border: '1px solid', lineHeight: 1.4 }}>
                      {tag}
                    </Box>
                  );
                })}
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
