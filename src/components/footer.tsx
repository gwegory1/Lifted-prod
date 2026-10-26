import { Typography, Link, Box, Container, Stack } from '@mui/material';
import { Email, Facebook, Instagram } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tokens } from '../theme/theme';

const linkSx = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1.5,
    minHeight: 44,
    color: tokens.ink,
    fontWeight: 500,
    textDecoration: 'none',
    textUnderlineOffset: '4px',
    transition: 'color 150ms',
    '&:hover': { color: tokens.goldInk, textDecoration: 'underline' },
};

const Footer = () => {
    const { t } = useTranslation();

    const contacts = [
        { icon: <Email />, label: 'abrahamvivien@lifted.hu', url: 'mailto:abrahamvivien@lifted.hu' },
        { icon: <Facebook />, label: 'Vivien Ábrahám', url: 'https://www.facebook.com/share/16GswaDzSP/?mibextid=wwXIfr' },
        { icon: <Instagram />, label: '@viviabraham', url: 'https://www.instagram.com/viviabraham' },
    ];

    const pages = [
        { label: t('home'), url: '/' },
        { label: t('training'), url: '/training' },
        { label: t('nutrition'), url: '/nutrition' },
        { label: t('about'), url: '/about' },
    ];

    return (
        <Box
            component="footer"
            sx={{
                background: `linear-gradient(135deg, ${tokens.peach} 0%, #ffffff 50%, ${tokens.peach} 100%)`,
                color: tokens.ink,
                py: { xs: 4, md: 5 },
                borderTop: '1px solid rgba(42, 42, 42, 0.06)',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr 1fr' },
                        gap: { xs: 4, md: 6 },
                        alignItems: 'start',
                    }}
                >
                    <Box>
                        <Typography component="h2" sx={{ fontSize: { xs: '1.6rem', md: '1.9rem' }, fontWeight: 500, mb: 1.5 }}>
                            {t('GetIntTouch')}
                        </Typography>
                        <Stack component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
                            {contacts.map((c) => (
                                <li key={c.url}>
                                    <Link
                                        href={c.url}
                                        sx={linkSx}
                                        {...(c.url.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                                    >
                                        <Box component="span" aria-hidden sx={{ display: 'inline-flex' }}>{c.icon}</Box>
                                        {c.label}
                                    </Link>
                                </li>
                            ))}
                        </Stack>
                    </Box>

                    <Box component="nav" aria-label={t('Navigation')}>
                        <Typography component="h2" sx={{ fontSize: { xs: '1.6rem', md: '1.9rem' }, fontWeight: 500, mb: 1.5 }}>
                            {t('Navigation')}
                        </Typography>
                        <Stack component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
                            {pages.map((p) => (
                                <li key={p.url}>
                                    <Link component={RouterLink} to={p.url} sx={linkSx}>
                                        {p.label}
                                    </Link>
                                </li>
                            ))}
                        </Stack>
                    </Box>

                    <Box sx={{ alignSelf: { md: 'end' }, textAlign: { xs: 'left', md: 'right' }, color: tokens.inkSoft }}>
                        <Typography variant="body2">
                            © {new Date().getFullYear()} Lifted. {t('rights')}
                        </Typography>
                        <Typography variant="body2" mt={0.5}>
                            Budapest
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
