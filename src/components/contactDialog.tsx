import { useRef, useState } from 'react';
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
import emailjs from  '@emailjs/browser'
import { useTranslation } from 'react-i18next';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { t } = useTranslation();

  const dialogVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.03, boxShadow: '0 8px 20px rgba(255, 193, 7, 0.3)' },
    tap: { scale: 0.97 },
  };

  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      // Replace these with your actual EmailJS service, template and public key
      const serviceId = 'service_ck1xfpd';
      const templateId = 'template_zwfqnn4';
      const publicKey = 'FgEUG9Bwf0goqiuAV';

      if (formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          handleClose();
        }, 2000);
      }
    } catch (err) {
      setError('Nem sikerült elküldeni az üzenetet. Próbálja újra később.');
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
      sx: {
        background: 'linear-gradient(145deg, #2A2A2A 0%, #1F1F1F 100%)',
        borderRadius: '20px',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
        border: '1px solid rgba(255, 193, 7, 0.1)',
        overflow: 'hidden',
      },
      }}
    >
      <MotionBox variants={dialogVariants} initial="hidden" animate="visible" exit="exit">
      <DialogTitle sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', py: 3 }}>
        <MotionTypography
        variant="h5"
        align="center"
        sx={{
          color: '#FFC107',
          fontWeight: 700,
          fontFamily: 'Montserrat, sans-serif',
          letterSpacing: '0.5px',
          background: 'linear-gradient(90deg, #FFC107, #FFECB3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        >
        {t('contactForm.title')}
        </MotionTypography>
      </DialogTitle>

      <DialogContent sx={{ px: 4, py: 3 }}>
        <Box
        component="form"
        id="contact-form"
        ref={formRef}
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
        >
        <MotionBox variants={fieldVariants} sx={{ mt: 2 }}>
          <TextField
          label={t('contactForm.nameLabel')}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#E0E0E0',
            fontFamily: 'Montserrat, sans-serif',
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
            '&:hover fieldset': { borderColor: '#FFC107' },
            '&.Mui-focused fieldset': { borderColor: '#FFC107', borderWidth: 2 },
            },
            '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.6)', fontFamily: 'Montserrat, sans-serif' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#FFC107' },
          }}
          />
        </MotionBox>
        <MotionBox variants={fieldVariants}>
          <TextField
          label={t('contactForm.emailLabel')}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#E0E0E0',
            fontFamily: 'Montserrat, sans-serif',
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
            '&:hover fieldset': { borderColor: '#FFC107' },
            '&.Mui-focused fieldset': { borderColor: '#FFC107', borderWidth: 2 },
            },
            '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.6)', fontFamily: 'Montserrat, sans-serif' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#FFC107' },
          }}
          />
        </MotionBox>
        <MotionBox variants={fieldVariants}>
          <TextField
          label={t('contactForm.phoneLabel')}
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#E0E0E0',
            fontFamily: 'Montserrat, sans-serif',
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
            '&:hover fieldset': { borderColor: '#FFC107' },
            '&.Mui-focused fieldset': { borderColor: '#FFC107', borderWidth: 2 },
            },
            '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.6)', fontFamily: 'Montserrat, sans-serif' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#FFC107' },
          }}
          />
        </MotionBox>
        <MotionBox variants={fieldVariants}>
          <TextField
          label={t('contactForm.messageLabel')}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder={t('contactForm.messagePlaceholder')}
          sx={{
            '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#E0E0E0',
            fontFamily: 'Montserrat, sans-serif',
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
            '&:hover fieldset': { borderColor: '#FFC107' },
            '&.Mui-focused fieldset': { borderColor: '#FFC107', borderWidth: 2 },
            },
            '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.6)', fontFamily: 'Montserrat, sans-serif' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#FFC107' },
          }}
          />
        </MotionBox>
        {error && (
          <MotionTypography
          sx={{ color: '#FF6E40', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          >
          {t('contactForm.errorMessage')}
          </MotionTypography>
        )}
        {success && (
          <MotionTypography
          sx={{ color: '#4CAF50', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          >
          {t('contactForm.successMessage')}
          </MotionTypography>
        )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'space-between', px: 4, py: 3 }}>
        <MotionButton
        onClick={handleClose}
        disabled={isSending}
        sx={{
          color: '#E0E0E0',
          fontWeight: 600,
          fontFamily: 'Montserrat, sans-serif',
          borderRadius: '12px',
          px: 3,
          py: 1.5,
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          '&:hover': {
          background: 'rgba(255, 255, 255, 0.15)',
          borderColor: '#FFC107',
          },
          '&:disabled': {
          background: 'rgba(255, 255, 255, 0.05)',
          color: '#757575',
          },
        }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        >
        {t('contactForm.cancelButton')}
        </MotionButton>
        <MotionButton
        type="submit"
        form="contact-form"
        variant="contained"
        disabled={isSending}
        sx={{
          background: 'linear-gradient(45deg, #FFC107, #FFCA28)',
          color: '#1F1F1F',
          fontWeight: 700,
          fontFamily: 'Montserrat, sans-serif',
          borderRadius: '12px',
          px: 4,
          py: 1.5,
          boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)',
          '&:hover': {
          background: 'linear-gradient(45deg, #FFCA28, #FFD54F)',
          boxShadow: '0 6px 20px rgba(255, 193, 7, 0.6)',
          },
          '&:disabled': {
          background: '#757575',
          color: '#B0B0B0',
          boxShadow: 'none',
          },
        }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        >
        {isSending ? t('contactForm.sendingButton') : t('contactForm.sendButton')}
        </MotionButton>
      </DialogActions>
      </MotionBox>
    </Dialog>
  );
};

export default ContactFormDialog;