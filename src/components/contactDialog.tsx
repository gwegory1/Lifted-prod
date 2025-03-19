import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { motion } from 'framer-motion';

interface ContactFormDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionTypography = motion(Typography);

const ContactFormDialog = ({ open, setOpen }: ContactFormDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => {
    setOpen(false);
    setError(null);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/abrahamvivien@lifted.hu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'Új Üzenet - Kapcsolatfelvétel',
          _captcha: 'false', // Disable FormSubmit CAPTCHA (see note below)
          _template: 'table',
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Hiba történt az üzenet küldésekor');
      }

      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSending(false);
      handleClose();
    } catch (err) {
      setError('Nem sikerült elküldeni az üzenetet. Próbálja újra később.');
      setIsSending(false);
      console.error(err);
    }
  };

  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.98 },
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
        },
      }}
    >
      <MotionBox variants={dialogVariants} initial="hidden" animate="visible" exit="exit">
        <DialogTitle>
          <MotionTypography
            variant="h5"
            align="center"
            sx={{
              color: '#FFC107',
              fontWeight: 'bold',
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Kapcsolatfelvétel
          </MotionTypography>
        </DialogTitle>

        <DialogContent>
          <MotionBox
            id="contact-form" // Add ID to link with submit button
            sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mt: 1, px: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <form id="contact-form" onSubmit={handleSubmit}>
            <TextField
              label="Teljes Név"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                  '&:hover fieldset': { borderColor: '#FFC107' },
                  '&.Mui-focused fieldset': { borderColor: '#FFC107' },
                },
                '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#FFC107' },
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                  '&:hover fieldset': { borderColor: '#FFC107' },
                  '&.Mui-focused fieldset': { borderColor: '#FFC107' },
                },
                '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#FFC107' },
              }}
            />
            <TextField
              label="Telefonszám"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                  '&:hover fieldset': { borderColor: '#FFC107' },
                  '&.Mui-focused fieldset': { borderColor: '#FFC107' },
                },
                '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#FFC107' },
              }}
            />
            <TextField
              label="Üzenet"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              placeholder="Meséljen a céljairól vagy kérdéseiről"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                  '&:hover fieldset': { borderColor: '#FFC107' },
                  '&.Mui-focused fieldset': { borderColor: '#FFC107' },
                },
                '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#FFC107' },
              }}
            />
            {error && (
              <Typography sx={{ color: '#FF5722', textAlign: 'center' }}>
                {error}
              </Typography>
            )}
          </form>
          </MotionBox>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'space-between', px: 3, pb: 2 }}>
          <MotionButton
            onClick={handleClose}
            color="inherit"
            disabled={isSending}
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              fontFamily: 'Montserrat, sans-serif',
              borderRadius: '20px',
              px: 3,
              py: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Mégse
          </MotionButton>
          <MotionButton
            type="submit"
            form="contact-form" // Match the form's ID
            variant="contained"
            disabled={isSending}
            sx={{
              backgroundColor: '#FFC107',
              color: '#1A1A1A',
              fontWeight: 'bold',
              fontFamily: 'Montserrat, sans-serif',
              borderRadius: '20px',
              px: 4,
              py: 1,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#FFCA28',
                boxShadow: '0 6px 14px rgba(0, 0, 0, 0.25)',
              },
              '&:disabled': {
                backgroundColor: '#757575',
                color: '#B0B0B0',
              },
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {isSending ? 'Küldés...' : 'Üzenet Küldése'}
          </MotionButton>
        </DialogActions>
      </MotionBox>
    </Dialog>
  );
};

export default ContactFormDialog;