import  { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';


interface ContactFormDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ContactFormDialog = ({ open, setOpen }: ContactFormDialogProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        goal: '',
        message: '',
    });

    const handleClose = () => setOpen(false);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Replace this with your API call
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', phone: '', goal: '', message: '' });
        handleClose(); // Close dialog after submission
    };

    return (
        <>
            {/* Dialog popup */}
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>
                    <Typography variant="h6" align="center">
                        Kapcsolatfelvétel Személyi Edzővel
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
                    >
                        <TextField
                            label="Teljes Név"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            variant="outlined"
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
                        />
                        <TextField
                            label="Telefonszám"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                        />
                        <FormControl fullWidth>
                            <InputLabel>Fitnesz Cél</InputLabel>
                            <Select
                                name="goal"
                                value={formData.goal}
                                onChange={handleChange}
                                label="Fitnesz Cél"
                            >
                                <MenuItem value="weight-loss">Fogyás</MenuItem>
                                <MenuItem value="muscle-gain">Izomnövelés</MenuItem>
                                <MenuItem value="general-fitness">Általános Fitnesz</MenuItem>
                                <MenuItem value="other">Egyéb</MenuItem>
                            </Select>
                        </FormControl>
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
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Mégse
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        Üzenet Küldése
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ContactFormDialog;