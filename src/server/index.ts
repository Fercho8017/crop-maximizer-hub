import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const PYTHON_SERVICE_URL = 'http://localhost:8000';

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Nueva ruta para el clima
app.get('/api/weather/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const response = await axios.get(`${PYTHON_SERVICE_URL}/weather/${city}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener el clima' });
  }
});

// Nueva ruta para predicción de cultivos
app.post('/api/crop-prediction', async (req, res) => {
  try {
    const { temperature, humidity, rainfall } = req.body;
    const response = await axios.get(`${PYTHON_SERVICE_URL}/crop-prediction`, {
      params: { temperature, humidity, rainfall }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error en la predicción de cultivos' });
  }
});

// Ruta de autenticación
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // TODO: Implementar lógica de autenticación real
  if (email && password) {
    res.json({
      success: true,
      user: { email },
      token: 'dummy-token'
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Email y contraseña son requeridos'
    });
  }
});

// Manejo de errores
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Error interno del servidor' });
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
