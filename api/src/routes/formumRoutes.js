const express = require('express');
const router = express.Router();
const Formum = require('../models/formum');
const formuCtrlsController = require('../controllers/formuCtrlsController');

router.get('/', async (req, res) => {
  try {
    const formumRoutes = await Formum.findAll();
    res.json(formumRoutes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/:id', async (req, res) => {
  const formuCtrlId = req.params.id;
  try {
    const formuCtrl = await Formum.findByPk(formuCtrlId);
    if (!formuCtrl) {
      res.status(404).json({ message: 'No se encontró la encuesta' });
    } else {
      res.json(formuCtrl);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/respuestas', async (req, res) => {
  try {
    const respuestas = await obtenerRespuestasDesdeLaBaseDeDatos(); 
    res.json(respuestas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/encuestas', async (req, res) => {
  const formuCtrlData = req.body;
  const formuCtrlId = req.body.id; 
  try {
    const formuCtrl = await formuCtrlsController.createOrUpdateFormuCtrl(formuCtrlData, formuCtrlId);
    res.json(formuCtrl);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

