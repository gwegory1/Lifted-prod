import { Stack, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/LOGO.svg";
import { Menu as MenuIcon } from '@mui/icons-material';

const Navbar: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navStackProps = {
        direction: "row" as const,
        alignItems: "center" as const,
        gap: 4,
        justifyContent: "space-around" as const,
    };

    const navStyles = {
        navbar: {
            background: "linear-gradient(to right, #F8E5DE, #ffffff, #F8E5DE)",
            padding: "1rem",
            top: 0,
            left: 0,
            right: 0,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: "1.5rem",
            width: "100%",
            position: "sticky" as "sticky",
            zIndex: 1000,
        },
        navList: {
            display: "flex",
            listStyle: "none",
            gap: "1rem",
            margin: 0,
            padding: 0,
            justifyContent: "space-around",
            fontFamily: 'Montserrat, sans-serif',
        },
        navItem: (isHovered: boolean) => ({
            padding: "0.5rem",
            borderRadius: "0.25rem",
            transition: "all 0.2s ease",
            fontFamily: 'Montserrat, sans-serif',
            transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        }),
        navLink: (isHovered: boolean) => ({
            textDecoration: "none",
            color: "#333",
            fontWeight: 500,
            transition: "color 0.3s ease",
            fontFamily: 'Montserrat, sans-serif',
            textShadow: isHovered ? "0 0 5px rgba(0, 0, 0, 0.1)" : "none",
        }),
        drawer: {
            backgroundColor: "#fff",
            fontFamily: 'Montserrat, sans-serif',
            fontSize: "1.2rem",
            width: 250,
            height: "100%",
        },
        drawerItem: {
            padding: "0.5rem 1rem", // Increased padding for touch targets
            
            transition: "background 0.3s ease, color 0.3s ease",
            "&:hover": {
                background: "#333",
                "& .MuiListItemText-primary": {
                    color: "#fff",
                },
            },
        },
        drawerLink: {
            textDecoration: "none",
            color: "#333",
            width: "100%",
            display: "block",
            fontWeight: 500,
            fontFamily: 'Montserrat, sans-serif',
        },
    };

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={navStyles.drawer}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {[
                    { text: 'Home', path: '/' },
                    { text: 'About', path: '/about' },
                    { text: 'Training', path: '/training' },
                    { text: 'Nutrition', path: '/nutrition' },
                ].map((item) => (
                    <ListItem
                        key={item.text}
                        sx={navStyles.drawerItem}
                        disablePadding
                    >
                        <Link to={item.path} style={navStyles.drawerLink}>
                            <ListItemText
                                primary={item.text}
                                primaryTypographyProps={{
                                    fontSize: "1.2rem",
                                    fontFamily: 'Montserrat, sans-serif',
                                    color: "#333",
                                }}
                            />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <nav style={navStyles.navbar}>
            {isMobile ? (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1 }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ p: 1, '&:hover': { background: 'rgba(0, 0, 0, 0.1)' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <Box
                        sx={{
                            height: "40px",
                            width: "100px",
                            backgroundImage: `url(${LOGO})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                    
                    <Box sx={{ width: 40 }} /> {/* Empty box for balance */}
                    
                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                        PaperProps={{ sx: { background: 'transparent' } }} // Transparent paper to show custom background
                    >
                        {drawerContent}
                    </Drawer>
                </Box>
            ) : (
                <ul style={navStyles.navList}>
                    <Stack {...navStackProps}>
                        <li
                            style={navStyles.navItem(hoveredItem === 0)}
                            onMouseEnter={() => setHoveredItem(0)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link style={navStyles.navLink(hoveredItem === 0)} to="/">
                                Home
                            </Link>
                        </li>
                        <li
                            style={navStyles.navItem(hoveredItem === 1)}
                            onMouseEnter={() => setHoveredItem(1)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link style={navStyles.navLink(hoveredItem === 1)} to="/about">
                                About
                            </Link>
                        </li>
                    </Stack>
                    <Box
                        sx={{
                            height: "40px",
                            width: "100px",
                            backgroundImage: `url(${LOGO})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                    <Stack {...navStackProps}>
                        <li
                            style={navStyles.navItem(hoveredItem === 2)}
                            onMouseEnter={() => setHoveredItem(2)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link style={navStyles.navLink(hoveredItem === 2)} to="/training">
                                Training
                            </Link>
                        </li>
                        <li
                            style={navStyles.navItem(hoveredItem === 3)}
                            onMouseEnter={() => setHoveredItem(3)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link style={navStyles.navLink(hoveredItem === 3)} to="/nutrition">
                                Nutrition
                            </Link>
                        </li>
                    </Stack>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;