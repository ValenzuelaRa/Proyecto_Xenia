// Importa los módulos necesarios
const express = require('express');
const { PrismaClient } = require('@prisma/client');

// Crea una instancia de Express
const app = express();

// Crea una instancia de PrismaClient
const prisma = new PrismaClient();

// Define una ruta que obtiene datos de la base de datos usando Prisma
app.get('/usuarios', async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
});

// Inicia el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
