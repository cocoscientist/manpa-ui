import React from 'react';
import MailOutlineSharp from '@mui/icons-material/MailOutlineSharp';
import { Typography } from '@mui/material';

const Contact = () => {
    const iconSize = `${window.innerWidth * 0.15}px`;

    return (
        <div style={{
            backgroundColor: '#FFD8B9',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            position: 'relative',
            padding: '20px'
        }}>
            <svg viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', display: 'block', height: 'auto', position: 'absolute', top: 0, left: 0 }}>
                <path fill="#a6492f" d="M0,96C120,128,240,192,360,192C480,192,600,128,720,96C840,64,960,96,1080,128C1200,160,1320,192,1440,160V0H1320C1200,0,1080,0,960,0C840,0,720,0,600,0C480,0,360,0,240,0C120,0,0,0,0,0Z" />
            </svg>
            <MailOutlineSharp style={{ color: '#B34B28', fontSize: iconSize, marginTop: '50px' }} />
            <Typography variant="h4" style={{ color: '#B34B28', marginBottom: '10px', fontWeight: 600 }}>Email Us</Typography>
            <Typography variant="subtitle1" style={{ marginBottom: '10px', fontWeight: 500 }}>We'd love to hear from you!</Typography>
            <Typography variant="body1"><a href="mailto:askmanpa@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>askmanpa@gmail.com</a></Typography>
        </div>
    );
}

export default Contact;