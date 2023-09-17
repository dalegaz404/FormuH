import React, { useState, useEffect } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Box, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Formulario = ({ items }) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/encuestas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Encuesta enviada con éxito');
      } else {
        alert('Error al enviar la encuesta');
      }
    } catch (error) {
      console.error(error);
      alert('Error al enviar la encuesta');
    }
  };

  const verRespuestas = () => {
    navigate.push('/respuestas');
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '100vh',
        width: '100%',
        background: 'linear-gradient(to bottom, #ff7e5f, #feb47b)',
        mt: -1,
        mb: -1,
        mr: -1,
        ml: -1,
      }}
    >
      <form
        style={{
          maxWidth: '30rem',
          padding: '1.5rem',
          background: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        onSubmit={handleSubmit}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontFamily: 'Arial' }}>
          Formulario
        </h1>
        {items.map((item, index) => (
          <Box item key={index} style={{ marginBottom: '2rem', width: '90%', }}>
            {/* Resto del código del formulario... */}
          </Box>
        ))}
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Arial' }}
        >
          {items[items.length - 1].label}
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: 'blue', color: 'white', fontFamily: 'Arial', marginLeft: '1rem' }}
          onClick={verRespuestas}
        >
          Ver respuestas
        </Button>
      </form>
    </Grid>
  );
}

export default Formulario;


