const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
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

app.get('/registro', async (req, res) => {
  try {
    console.log('Recibida solicitud para /registro');
    const registros = await prisma.registro.findMany();
    console.log('Registros recuperados:', registros);
    res.json(registros);
  } catch (error) {
    console.error('Error al obtener registros:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/guardarInformacion', async (req, res) => {
  try {
    const { matricula, nombre, grupo, materia, carrera, nombre_laboratorio } = req.body;

    console.log('Guardando información en la base de datos...');

    await prisma.registro.create({
      data: {
        matricula,
        nombre,
        grupo,
        materia,
        carrera: String(carrera), // Convertir a cadena
        nombreLaboratorio: nombre_laboratorio,
      },
    });

    console.log('Información guardada correctamente');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al guardar información en la base de datos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Eliminar un registro por ID
app.delete('/registro/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.registro.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el registro:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Actualizar un registro por ID
app.put('/registro/:id', async (req, res) => {
  const { id } = req.params;
  const { matricula, nombre, grupo, materia, carrera, nombre_laboratorio } = req.body;
  try {
    await prisma.registro.update({
      where: {
        id: parseInt(id),
      },
      data: {
        matricula,
        nombre,
        grupo,
        materia,
        carrera: String(carrera), // Convertir a cadena
        nombreLaboratorio: nombre_laboratorio,
      },
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error al actualizar el registro:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/registro/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const registroEliminado = await prisma.registro.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (registroEliminado) {
      console.log(`Registro con ID ${id} eliminado correctamente`);
      res.json({ success: true });
    } else {
      console.error(`No se encontró el registro con ID ${id}`);
      res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar el registro:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
