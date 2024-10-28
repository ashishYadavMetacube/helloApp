import React, { useState } from 'react';
import { Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import axios from 'axios';


const TestConnectionButton = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');
  const [open, setOpen] = useState(false);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleClick = async () => {
    setLoading(true);
    setMessage('');
    await sleep(2000);

    const query = `query {
    health {
        status
    }
}`
    const api = window.config.apiUrl
    try {
      // Replace with your GraphQL endpoint
      const response = await axios.post(api, {
        query,
      });

      if (response.data.errors) {
        throw new Error(response.data.errors.map(err => err.message).join(', '));
      }

      // Assuming the API returns data
      setMessage('Connection successful');
      setSeverity('success');
    } catch (error) {
      setMessage(error.message || 'Connection failed');
      setSeverity('error');
    } finally {
      setLoading(false);
      setOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        disabled={loading}
        endIcon={loading ? <CircularProgress size={20} /> : null}
      >
        Test Connection
      </Button>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TestConnectionButton;
