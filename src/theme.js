import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Outfit, sans-serif',
  headings: {
    fontFamily: 'Syne, sans-serif',
  },
  colors: {
    dark: [
      '#eeeaf8', // text
      '#9090b0', // muted
      '#55556a', // dim
      '#32324a', // border2
      '#252538', // border
      '#1a1a2e', // card2
      '#13131f', // card
      '#11111f', // bg3
      '#0c0c18', // bg2
      '#07070e', // bg
    ],
    gold: [
      '#fbf1d8',
      '#f6e2b0',
      '#f2d489',
      '#eec661',
      '#eab83a',
      '#d4a020',
      '#f0c040', // main
      '#b88a18',
      '#906c12',
      '#684e0c',
    ],
    purple: [
      '#e8e5ff',
      '#d1ccff',
      '#b9b2ff',
      '#a299ff',
      '#8b7fff', // main
      '#6f66cc',
      '#534c99',
      '#373366',
      '#1c1933',
      '#0e0c1a',
    ],
  },
  primaryColor: 'gold',
  primaryShade: 6,
  black: '#07070e',
  white: '#eeeaf8',
});
