import { createTheme } from '@mui/material/styles';

// Brand palette. Gold is a fill/accent on dark; goldInk is gold for text on light surfaces (≥4.8:1).
export const tokens = {
    gold: '#FFC056',
    goldHover: '#FFB23A',
    goldInk: '#8A5A00',
    peach: '#F8E5DE',
    cream: '#FFF5E6',
    blush: '#FFF5F5',
    ink: '#2A2A2A',
    inkSoft: '#4A4A4A',
    night: '#1F1F1F',
    nightRaised: '#2A2A2A',
};

// Shared ease-out (expo-like) for every motion on the site.
export const ease = [0.22, 1, 0.36, 1] as const;

// Display voice for h1/h2. Chloe ships one weight; it's patched with ő ű Ő Ű.
export const displaySx = {
    fontFamily: 'Chloe, serif',
    fontWeight: 400,
    lineHeight: 1.1,
    letterSpacing: '-0.005em',
} as const;

// Primary call-to-action: gold pill with dark text (10:1 contrast).
export const ctaButtonSx = {
    minHeight: 52,
    px: 4,
    borderRadius: 999,
    fontSize: '1rem',
    backgroundColor: tokens.gold,
    color: tokens.night,
    transition: 'background-color 150ms, transform 150ms ease-out',
    '&:hover': { backgroundColor: tokens.goldHover },
    '&:active': { transform: 'scale(0.97)' },
} as const;

const theme = createTheme({
    palette: {
        primary: {
            main: tokens.gold,
            dark: tokens.goldInk,
            contrastText: tokens.night,
        },
        secondary: {
            main: tokens.goldInk,
        },
        text: {
            primary: tokens.ink,
            secondary: tokens.inkSoft,
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { fontWeight: 700, letterSpacing: '0.02em' },
            },
        },
    },
});

export default theme;
