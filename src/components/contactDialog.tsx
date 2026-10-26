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
  CircularProgress,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { tokens } from '../theme/theme';

interface ContactFormDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

// EmailJS public identifiers (safe to ship in the browser by design).
const EMAILJS = { serviceId: 'service_ck1xfpd', templateId: 'template_zwfqnn4', publicKey: 'FgEUG9Bwf0goqiuAV' };

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#F2F2F2',
    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.28)' },
    '&:hover fieldset': { borderColor: tokens.gold },
    '&.Mui-focused fieldset': { borderColor: tokens.gold, borderWidth: 2 },
  },
  '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.75)' },
  '& .MuiInputLabel-root.Mui-focused': { color: tokens.gold },
  '& .MuiInputLabel-asterisk': { color: tokens.gold },
  '& textarea::placeholder': { color: 'rgba(255, 255, 255, 0.6)', opacity: 1 },
};

const emptyForm = { name: '', email: '', phone: '', message: '' };

const ContactFormDialog = ({ open, setOpen }: ContactFormDialogProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleClose = () => {
    if (status === 'sending') return;
    setOpen(false);
    setStatus('idle');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, formRef.current, EMAILJS.publicKey);
      setFormData(emptyForm);
      setStatus('sent');
      setTimeout(() => {
        setOpen(false);
        setStatus('idle');
      }, 2500);
    } catch (err) {
      // keep what the user typed so they can retry
      console.error(err);
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      fullScreen={fullScreen}
      aria-labelledby="contact-title"
      PaperProps={{
        sx: {
          background: tokens.night,
          color: '#F2F2F2',
          borderRadius: fullScreen ? 0 : '20px',
          boxShadow: '0 24px 64px -16px rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(255, 192, 86, 0.15)',
        },
      }}
    >
      <DialogTitle id="contact-title" sx={{ pt: 4, pb: 1, textAlign: 'center', color: tokens.gold, fontWeight: 700, fontSize: '1.6rem' }}>
        {t('contactForm.title')}
      </DialogTitle>

      <DialogContent sx={{ px: { xs: 3, sm: 4 } }}>
        <Box
          component="form"
          id="contact-form"
          ref={formRef}
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pt: 2 }}
        >
          <TextField label={t('contactForm.nameLabel')} name="name" autoComplete="name" value={formData.name} onChange={handleChange} required fullWidth sx={fieldSx} />
          <TextField label={t('contactForm.emailLabel')} name="email" type="email" autoComplete="email" inputMode="email" value={formData.email} onChange={handleChange} required fullWidth sx={fieldSx} />
          <TextField label={t('contactForm.phoneLabel')} name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} fullWidth sx={fieldSx} />
          <TextField
            label={t('contactForm.messageLabel')}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            minRows={4}
            placeholder={t('contactForm.messagePlaceholder')}
            sx={fieldSx}
          />
          <Typography
            role="status"
            sx={{
              minHeight: '1.5em',
              textAlign: 'center',
              fontWeight: 600,
              color: status === 'error' ? '#FF8A65' : '#81C784',
            }}
          >
            {status === 'error' && t('contactForm.errorMessage')}
            {status === 'sent' && t('contactForm.successMessage')}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'space-between', gap: 2, px: { xs: 3, sm: 4 }, pb: 4, pt: 1 }}>
        <Button
          onClick={handleClose}
          disabled={sending}
          sx={{
            minHeight: 48,
            px: 3,
            borderRadius: '12px',
            color: '#E0E0E0',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            '&:hover': { background: 'rgba(255, 255, 255, 0.08)', borderColor: tokens.gold },
          }}
        >
          {t('contactForm.cancelButton')}
        </Button>
        <Button
          type="submit"
          form="contact-form"
          variant="contained"
          disableElevation
          disabled={sending || status === 'sent'}
          startIcon={sending ? <CircularProgress size={18} sx={{ color: 'inherit' }} /> : undefined}
          sx={{
            minHeight: 48,
            px: 4,
            borderRadius: '12px',
            backgroundColor: tokens.gold,
            color: tokens.night,
            '&:hover': { backgroundColor: tokens.goldHover },
            '&.Mui-disabled': { backgroundColor: 'rgba(255, 192, 86, 0.45)', color: tokens.night },
          }}
        >
          {sending ? t('contactForm.sendingButton') : t('contactForm.sendButton')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactFormDialog;
