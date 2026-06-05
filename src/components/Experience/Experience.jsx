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
    transition: { delay: custom * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const experiences = [
  {
    role: 'Software Engineer — Frontend',
    period: 'Oct 2024 – Present',
    company: 'Samta Infotech Pvt Ltd · Noida, India · Onsite',
    color: 'var(--gold)',
    glow: 'rgba(240,192,64,.15)',
    glowLight: 'rgba(240,192,64,.05)',
    bullets: [
      <>Built AI-powered conversational analytics platform (React, TypeScript, Turborepo) — natural-language DB queries, real-time chat with markdown + ECharts, PDF/PPTX export. <strong style={{ color: '#e8e0ff', fontWeight: 500 }}>93% time saving</strong> for end users.</>,
      <>Revamped cybersecurity platform with Redux Toolkit, styled-components & Highcharts. Dynamic compliance dashboard with range sliders saved <strong style={{ color: '#e8e0ff', fontWeight: 500 }}>3 days/quarter</strong> for 15+ security teams. <strong style={{ color: '#e8e0ff', fontWeight: 500 }}>40% faster task completion, 55% fewer tickets.</strong></>,
      <>Customizable analytics dashboard — drag-and-drop & resizable widgets (React Grid Layout) with memoization & debounced resize. <strong style={{ color: '#e8e0ff', fontWeight: 500 }}>45% fewer re-renders.</strong></>,
      <>Scalable data table (Mantine React Table) with infinite scroll — <strong style={{ color: '#e8e0ff', fontWeight: 500 }}>50K+ rows</strong>. Reusable overlays (React Portals), AI-assisted multi-step forms (Mantine Stepper + Yup). <strong style={{ color: '#e8e0ff', fontWeight: 500 }}>30% better form completion.</strong></>,
      <>Embeddable AI onboarding widget (Shadow DOM, Redux Toolkit) — voice STT/TTS, real-time face detection (MediaPipe), Aadhaar KYC. <strong style={{ color: '#e8e0ff', fontWeight: 500 }}>98.5% face-match accuracy.</strong> Reduced partner integration from 2 days to under 2 hours.</>,
    ]
  },
  {
    role: 'ReactJS Developer Intern',
    period: 'Jul – Oct 2024',
    company: 'Samta Infotech Pvt Ltd · Noida, India · Onsite',
    color: 'var(--purple)',
    glow: 'rgba(139,127,255,.15)',
    glowLight: 'rgba(139,127,255,.05)',
    bullets: [
      <>Built full-stack e-commerce platform (MERN stack) with JWT auth, role-based vendor admin panels, real-time form validation, and OTP-based recovery via Nodemailer + token verification.</>
    ]
  },
  {
    role: 'Frontend Developer Intern',
    period: 'Nov 2023 – Jun 2024',
    company: 'Indivue Technologies Pvt Ltd · New Delhi · Remote',
    color: 'var(--dim)',
    glow: 'transparent',
    glowLight: 'transparent',
    bullets: [
      <>Cut bug recurrence by <strong style={{ color: '#e8e0ff', fontWeight: 500 }}>35%</strong> and accelerated feature delivery by <strong style={{ color: '#e8e0ff', fontWeight: 500 }}>20%</strong> on EduTech platforms (Kademin, Learnify) via reusable React + Material UI components and systematic UI/UX fixes.</>
    ]
  }
];

const Experience = () => {
  return (
    <Box component="section" id="experience" style={{ padding: '6rem 2.5rem', maxWidth: '1080px', margin: '0 auto' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={slideUp} custom={0}>
        <SectionLabel number="02" title="Experience" />
        <Title style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          Where I've worked
        </Title>
        <Text style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '3.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
          Real products, real impact, measurable results.
        </Text>
      </motion.div>
      <Box style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)', marginBottom: '3.5rem' }} />

      <Box style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
        <Box style={{ content: '""', position: 'absolute', left: '19px', top: '20px', bottom: '20px', width: '1px', background: 'linear-gradient(to bottom, var(--gold), var(--border), transparent)' }} />
        
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={slideUp}
            style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '1.5rem', paddingBottom: '2rem' }}
          >
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '16px' }}>
              <Box style={{ width: '14px', height: '14px', borderRadius: '50%', background: exp.color, flexShrink: 0, boxShadow: `0 0 0 4px ${exp.glow}, 0 0 0 8px ${exp.glowLight}` }} />
            </Box>
            <Box
              style={{
                background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.8rem 2rem',
                transition: 'border-color 0.25s, transform 0.25s', willChange: 'transform'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateX(6px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
            >
              <Flex justify="space-between" align="flex-start" gap="1rem" mb="0.5rem" wrap="wrap">
                <Text style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>
                  {exp.role}
                </Text>
                <Box style={{ background: 'var(--gold-dim)', border: '1px solid rgba(240,192,64,.2)', color: 'var(--gold)', fontSize: '0.72rem', padding: '0.3rem 0.8rem', borderRadius: '2px', fontFamily: 'Syne, sans-serif', fontWeight: 600, letterSpacing: '0.04em', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {exp.period}
                </Box>
              </Flex>
              <Text style={{ color: exp.color === 'var(--gold)' ? 'var(--purple)' : exp.color, fontSize: '0.9rem', marginBottom: '1.2rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Box component="span" style={{ display: 'inline-block', width: '16px', height: '1px', background: exp.color === 'var(--gold)' ? 'var(--purple)' : exp.color }} />
                {exp.company}
              </Text>
              <Box component="ul" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {exp.bullets.map((bullet, idx) => (
                  <Box component="li" key={idx} style={{ color: 'var(--muted)', fontSize: '0.92rem', paddingLeft: '1.5rem', position: 'relative', lineHeight: 1.65 }}>
                    <Box component="span" style={{ position: 'absolute', left: 0, color: 'var(--gold)', fontSize: '0.75rem', top: '0.2rem' }}>▸</Box>
                    {bullet}
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
