
import { Typography, Link, Box, Container, IconButton, Stack } from '@mui/material';
import { Phone, Email, Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ background: "linear-gradient(to right, #F8E5DE, #ffffff, #F8E5DE)", color: 'black', py: 4 }}>
            <Container maxWidth="lg">
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography variant="h3" gutterBottom>
                            Keress bizalommal!
                        </Typography>
                        <Box>
                            <Link href="tel:+36301234567" color="inherit" display="flex" alignItems="center" mb={1}>
                                <Phone sx={{ mr: 1 }} />
                                +36 30 123 4567
                            </Link>
                            <Link href="mailto:abrahamvivien@lifted.hu" color="inherit" display="flex" alignItems="center">
                                <Email sx={{ mr: 1 }} />
                                abrahamvivien@lifted.hu
                            </Link>
                        </Box>
                        <Box mt={2}>
                            <IconButton color="inherit" aria-label="facebook" href="#">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit" aria-label="instagram" href="#">
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit" aria-label="tiktok" href="#">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box textAlign="center">
                        <Typography variant="body2">
                            &copy; {new Date().getFullYear()} Lifted. All rights reserved.
                        </Typography>
                    </Box>
                    <Box textAlign={{ xs: 'left', md: 'right' }}>
                        <Link href="/privacy" color="inherit" sx={{ mr: 2 }}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" color="inherit">
                            Terms of Service
                        </Link>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;