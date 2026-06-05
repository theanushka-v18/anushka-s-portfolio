import { Box } from '@mantine/core';

const Footer = () => {
  return (
    <Box
      component="footer"
      style={{
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        padding: '2.5rem',
        color: 'var(--dim)',
        fontSize: '0.8rem',
        letterSpacing: '0.04em',
      }}
    >
      Built with precision by <Box component="span" style={{ color: 'var(--gold)' }}>Anushka Verma</Box> · 2025 · Noida, India
    </Box>
  );
};

export default Footer;
