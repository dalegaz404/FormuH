const Formum = require('../models/formum.js');

const formuCtrlsController = {
  createOrUpdateFormuCtrl: async (formuCtrlData, formuCtrlId) => {
    try {
      if (formuCtrlId) {
        const updatedFormuCtrl = await Formum.update(formuCtrlData, {
          where: { id: formuCtrlId }
        });
        return updatedFormuCtrl;
      } else {
        const formuCtrl = await Formum.create(formuCtrlData);
        return formuCtrl;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },

  obtenerRespuestasDesdeLaBaseDeDatos: async () => {
    try {
      const respuestas = await Formum.findAll(); // Suponiendo que quieres obtener todas las respuestas
      return respuestas;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = formuCtrlsController;


