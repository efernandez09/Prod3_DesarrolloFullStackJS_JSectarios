const mongoose = require('mongoose');

// ! Schema Tareas

let schemaTareas = new mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        minlenght: [30, 'No se cumple la longitud mínima de la descripción'],
        maxlenght: [150, 'Has superado el máximo permitido de caracteres (150)'],
        required: true
    }

})

// Modelo

const modeloTareas = new mongoose.model('modeloTareas', schemaTareas);

// Importamos modelo

module.exports = modeloTareas;