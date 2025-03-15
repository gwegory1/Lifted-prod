import { Typography, Link, Box, Container, IconButton, Stack, Divider, useMediaQuery, useTheme } from '@mui/material';
import { Phone, Email, Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <Box 
            component="footer" 
            sx={{
                background: "linear-gradient(135deg, #F8E5DE 0%, #ffffff 50%, #F8E5DE 100%)",
                color: 'black', 
                py: { xs: 4, md: 5 },
                width: '100%',
                boxShadow: '0px -2px 10px rgba(0,0,0,0.05)',
                position: 'relative',
                zIndex: 1
            }}
        >
            <Container maxWidth="lg">
                <Stack 
                    direction={{ xs: 'column', md: 'row' }} 
                    spacing={{ xs: 4, md: 3 }} 
                    justifyContent="space-between"
                    divider={isMobile ? <Divider flexItem sx={{ my: 1 }} /> : null}
                >
                    {/* Contact Section */}
                    <Box>
                        <Typography variant="h5" gutterBottom fontWeight="medium" sx={{ mb: 1.5 }}>
                            Keress bizalommal!
                        </Typography>
                        <Box>
                            <Link 
                                href="tel:+36301234567" 
                                color="inherit" 
                                display="flex" 
                                alignItems="center" 
                                mb={1}
                                sx={{ 
                                    transition: 'all 0.2s',
                                    '&:hover': { color: theme.palette.primary.main, transform: 'translateX(3px)' } 
                                }}
                            >
                                <Phone sx={{ mr: 1 }} />
                                +36 30 123 4567
                            </Link>
                            <Link 
                                href="mailto:abrahamvivien@lifted.hu" 
                                color="inherit" 
                                display="flex" 
                                alignItems="center"
                                sx={{ 
                                    transition: 'all 0.2s',
                                    '&:hover': { color: theme.palette.primary.main, transform: 'translateX(3px)' } 
                                }}
                            >
                                <Email sx={{ mr: 1 }} />
                                abrahamvivien@lifted.hu
                            </Link>
                        </Box>
                        
                        {/* Social Media */}
                        <Box mt={2} display="flex" gap={1}>
                            {[
                                { icon: <Facebook />, label: "facebook", url: "https://www.facebook.com" },
                                { icon: <Instagram />, label: "instagram", url: "https://www.instagram.com" },
                                { icon: <LinkedIn />, label: "linkedin", url: "https://www.linkedin.com" }
                            ].map((social, index) => (
                                <IconButton 
                                    key={index} 
                                    color="inherit" 
                                    aria-label={social.label} 
                                    href={social.url}
                                    sx={{ 
                                        transition: 'all 0.2s',
                                        '&:hover': { 
                                            color: theme.palette.primary.main,
                                            transform: 'translateY(-3px)' 
                                        } 
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Box>
                    
                    {/* Copyright Section */}
                    <Box textAlign={{ xs: 'center', md: 'center' }} alignSelf="center">
                        <Typography variant="body2">
                            &copy; {new Date().getFullYear()} Lifted. All rights reserved.
                        </Typography>
                    </Box>
                    
                    {/* Links Section */}
                    <Box textAlign={{ xs: 'center', md: 'right' }} alignSelf="center">
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 2 }} justifyContent="center">
                            <Link 
                                href="/privacy" 
                                color="inherit"
                                sx={{ 
                                    transition: 'all 0.2s',
                                    '&:hover': { color: theme.palette.primary.main } 
                                }}
                            >
                                Privacy Policy
                            </Link>
                            <Link 
                                href="/terms" 
                                color="inherit"
                                sx={{ 
                                    transition: 'all 0.2s',
                                    '&:hover': { color: theme.palette.primary.main } 
                                }}
                            >
                                Terms of Service
                            </Link>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
