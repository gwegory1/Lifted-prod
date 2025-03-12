
import {  Typography, Box, Avatar, Stack } from '@mui/material';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const AboutMe = () => {
    return (
        <Stack sx={{ backgroundColor: 'background.paper',  width: '100%', height: '100vh' }}>
            <Navbar />
            <Box sx={{ my: 4, textAlign: 'center', backgroundColor: 'background.paper', p: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="subtitle1">
                    A brief introduction about who I am and what I do. This is a great place to showcase your personality and skills.
                </Typography>
                <Typography variant="subtitle1">
                    Include some key highlights and experiences that define you. Feel free to add more details to engage your audience.
                </Typography>
            </Box>

            <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 2 }}>
                <Avatar alt="Image 1" src="https://source.unsplash.com/random/200x200?sig=1" sx={{ width: 100, height: 100 }} />
                <Avatar alt="Image 2" src="https://source.unsplash.com/random/200x200?sig=2" sx={{ width: 100, height: 100 }} />
                <Avatar alt="Image 3" src="https://source.unsplash.com/random/200x200?sig=3" sx={{ width: 100, height: 100 }} />
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 2 }}>
                <Avatar alt="Image 4" src="https://source.unsplash.com/random/200x200?sig=4" sx={{ width: 100, height: 100 }} />
                <Avatar alt="Image 5" src="https://source.unsplash.com/random/200x200?sig=5" sx={{ width: 100, height: 100 }} />
                <Avatar alt="Image 6" src="https://source.unsplash.com/random/200x200?sig=6" sx={{ width: 100, height: 100 }} />
            </Stack>
            <Footer />
        </Stack>
    );
};

export default AboutMe;