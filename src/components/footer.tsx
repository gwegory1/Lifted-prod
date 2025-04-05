import { Typography, Link, Box, Container, IconButton, Stack, Divider, useMediaQuery, useTheme } from '@mui/material';
import { Email, Facebook, Instagram } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation(); // Assuming you have a translation function 
    
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
                        <Typography variant="h4" gutterBottom fontWeight="medium" sx={{ mb: 1.5 }}>
                            {t('GetIntTouch')}
                        </Typography>
                        <Box>
                            {/* Contact Email */}
                            <Link 
                                href="mailto:abrahamvivien@lifted.hu" 
                                color="inherit" 
                                display="flex" 
                                alignItems="center"
                                sx={{ 
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                    '&:hover': { color: theme.palette.primary.main, transform: 'translateX(5px)' } 
                                }}
                            >
                                <IconButton 
                                    color="inherit" 
                                    aria-label="email" 
                                    sx={{ mr: 2, p: 0 }}
                                >
                                    <Email fontSize="large" />
                                </IconButton>
                                <Typography variant="body1" fontWeight="medium">abrahamvivien@lifted.hu</Typography>
                            </Link>

                            {/* Social Media */}
                            <Box mt={1} display="flex" flexDirection="column" gap={1}>
                                {[
                                    { 
                                        icon: <Facebook fontSize="large" />, 
                                        label: "facebook", 
                                        url: "https://www.facebook.com/share/16GswaDzSP/?mibextid=wwXIfr", 
                                        username: "Vivien Ábrahám" 
                                    },
                                    { 
                                        icon: <Instagram fontSize="large" />, 
                                        label: "instagram", 
                                        url: "https://www.instagram.com/viviabraham?igsh=aGk5dnVpcHY5ZG5l&utm_source=qr", 
                                        username: "@viviabraham" 
                                    },
                                ].map((social, index) => (
                                    <Link 
                                        key={index} 
                                        href={social.url} 
                                        color="inherit" 
                                        display="flex" 
                                        alignItems="center" 
                                        sx={{ 
                                            textDecoration: 'none',
                                            transition: 'all 0.2s',
                                            '&:hover': { 
                                                color: theme.palette.primary.main, 
                                                transform: 'translateX(5px)' 
                                            } 
                                        }}
                                    >
                                        <IconButton 
                                            color="inherit" 
                                            aria-label={social.label} 
                                            sx={{ mr: 2, p: 0 }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                        <Typography variant="body1" fontWeight="medium">{social.username}</Typography>
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    
                    {/* Copyright Section */}
                    <Box textAlign={{ xs: 'center', md: 'center' }} alignSelf="center">
                        <Typography variant="body2">
                            &copy; {new Date().getFullYear()} Lifted. All rights reserved.
                        </Typography>
                    </Box>
                    
                    {/* 
                    Links Section 
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
                    */}
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
