const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');  // Importa el paquete CORS
const app = express();
const prisma = new PrismaClient();

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Configuración de CORS
app.use(cors());

// Rutas
app.get('/laboratorios', async (req, res) => {
  try {
    console.log('Consultando laboratorios...');
    const laboratorios = await prisma.laboratorio.findMany();
    console.log('Laboratorios recuperados:', laboratorios);
    res.json(laboratorios);
  } catch (error) {
    console.error('Error al recuperar laboratorios:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/carrera', async (req, res) => {
    try {
      console.log('Consultando carreras...');
      const carreras = await prisma.carrera.findMany();
      console.log('Carreras recuperadas:', carreras);
      res.json(carreras);
    } catch (error) {
      console.error('Error al recuperar carreras:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
