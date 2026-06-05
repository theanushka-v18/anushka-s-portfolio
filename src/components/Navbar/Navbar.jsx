import { Box, Flex, Button, UnstyledButton } from '@mantine/core';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 200,
        background: 'rgba(7, 7, 14, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        padding: '0.9rem 2.5rem',
      }}
    >
      <Flex justify="space-between" align="center" maw={1080} mx="auto">
        <Box
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1.4rem',
            letterSpacing: '0.06em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            cursor: 'pointer',
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{
              width: '12px',
              height: '12px',
              background: 'linear-gradient(135deg, var(--gold), var(--purple))',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              display: 'inline-block',
            }}
          />
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundImage: 'linear-gradient(270deg, var(--gold), #ffdf70, var(--purple), var(--gold))',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              textShadow: '0 0 20px rgba(240,192,64,0.3)',
            }}
          >
            AV
          </motion.span>
          <span style={{ fontSize: '0.6rem', color: 'var(--dim)' }}>·</span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ fontSize: '0.75rem', fontWeight: 400, fontFamily: 'Outfit, sans-serif', color: 'var(--text)' }}
          >
            Portfolio
          </motion.span>
        </Box>

        <Flex gap="2.5rem" style={{ listStyle: 'none' }} display={{ base: 'none', md: 'flex' }}>
          {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Box component="li" key={item}>
              <UnstyledButton
                component="a"
                href={`#${item.toLowerCase()}`}
                style={{
                  color: 'var(--muted)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--gold)';
                  e.currentTarget.children[0].style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--muted)';
                  e.currentTarget.children[0].style.width = '0';
                }}
              >
                {item}
                <Box
                  component="span"
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: '0',
                    height: '1px',
                    background: 'var(--gold)',
                    transition: 'width 0.25s',
                  }}
                />
              </UnstyledButton>
            </Box>
          ))}
        </Flex>

        <Button
          component="a"
          href="https://drive.google.com/file/d/1gyb2RwhckpEc2HXVr6Gj8Vr-Ui0lsuuz/view?usp=drivesdk"
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
          Hire Me →
        </Button>
      </Flex>
    </motion.div>
  );
};

export default Navbar;
